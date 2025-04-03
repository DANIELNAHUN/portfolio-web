<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';

import Button from 'primevue/button';
import CheckboxGroup from 'primevue/checkboxgroup';
import Checkbox from 'primevue/checkbox';
import FloatLabel from 'primevue/floatlabel';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Message from 'primevue/message';
import Toast from 'primevue/toast';

import { useToast } from 'primevue/usetoast';
import { Form } from '@primevue/forms';
import { valibotResolver } from '@primevue/forms/resolvers/valibot';
import * as v from 'valibot';
import { useReCaptcha } from 'vue-recaptcha-v3';

const store = useStore();
const toast = useToast();
const { executeRecaptcha, recaptchaLoaded } = useReCaptcha();

const contactTopics = computed(() => store.state.topics);
const selectedTopics = ref([]);
const contactEmail = ref('');
const contactMessage = ref('');

const initialValues = ref({
    topics: [],
    email: '',
    message: ''
});

const sendEmail = async () => {
    const params = {
        subject: 'Portafolio - Contacto',
        message: `<div><h1>Interesado en: ${selectedTopics.value}</h1><h3>Contacto: ${contactEmail.value}</h3><p>${contactMessage.value}</p></div>`
    }
    await recaptchaLoaded()
    const token = await executeRecaptcha('contact_form')
    await store.dispatch('verifyRecaptcha', token).then(async (res) => {
        if (res === 200) {
            await store.dispatch('sendEmails', params).then((res) => {
                if (res === 200) {
                    return true
                } else {
                    return false
                }
            })
            return true
        } else {
            return false
        }
    })
}
const resolver = valibotResolver(
    v.object({
        email: v.pipe(
            v.string(),
            v.email('Please enter a valid email address'),
            v.nonEmpty('Please email is required')
        ),
        message: v.pipe(
            v.string(),
            v.nonEmpty('Please tell me about your project'),
            v.minLength(10, 'Your message must be at least 10 characters long')
        ),
        topics: v.pipe(
            v.array(v.string()),
            v.nonEmpty('Please select at least one topic')
        )
    })
)

const submitContact = (form) => {
    const { valid, reset } = form;
    if (valid) {
        if (selectedTopics.value.length > 0) {
            const res = sendEmail();
            if (res) {
                toast.add({ severity: 'success', summary: 'Thank you for your message! I will get back to you soon.', life: 3000 });
                selectedTopics.value = [];
                contactEmail.value = '';
                contactMessage.value = '';
                reset();
            }
            else {
                toast.add({ severity: 'error', summary: 'There was an error sending the email', life: 3000, closable: false });
            }
        }
        else {
            toast.add({ severity: 'error', summary: 'Please select at least one topic', life: 3000, closable: false });
        }
    }
    else {
        toast.add({ severity: 'error', summary: 'Form is invalid', life: 3000, closable: false });
    }
};
</script>

<template>
    <section class="contact-me">
        <Toast />
        <div class="msg">

            <h1>Let's get in Touch</h1>
        </div>
        <div class="form">
            <Form v-slot="$form" :resolver="resolver" @submit="submitContact" :initialValues>
                <div class="checkbox-field">
                    <CheckboxGroup v-model="selectedTopics" name="topics" :options="contactTopics" optionLabel="name" optionValue="id" :inline="true">
                        <div v-for="item in contactTopics" :key="item.id" class="checkbox-item">
                            <Checkbox :inputId="item.id" :value="item.topic" :label="item.topic" />
                            <label for="item.id">{{ item.topic }}</label>
                        </div>
                    </CheckboxGroup>
                </div>
                <div class="email-field">
                    <FloatLabel variant="on">
                        <InputText name="email" v-model="contactEmail" id="email"/>
                        <label for="email">Your Email</label>
                    </FloatLabel>
                    <Message v-if="$form.email?.invalid" size="small" variant="simple" severity="warn">{{
                        $form.email.error.message }}</Message>
                </div>
                <div class="message-field">
                    <FloatLabel variant="on">
                        <Textarea name="message" v-model="contactMessage" autoResize rows="2" cols="40"/>
                        <label for="message">Tell me more about your ideas...</label>
                    </FloatLabel>
                    <Message v-if="$form.message?.invalid" size="small" variant="simple" severity="warn">{{
                        $form.message.error.message }}</Message>
                </div>
                <Button type="submit" label="Send Message" />
            </Form>
        </div>
    </section>
</template>

<style scoped lang="scss">
.contact-me{
    h1{
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 1rem;
        color: white;
    }
    p{
        font-size: 1rem;
        line-height: 1.5;
        margin-bottom: 1rem;
    }
    span, label{
        font-size: 0.8rem;

    }
    [class$="field"]{
        margin: 15px 0;
    }
}
.checkbox-item{
    display: flex;
    flex-direction: row;
    columns: 3;
    align-items: center;
    margin: 0 10px;
    gap: 3px;
}
</style>