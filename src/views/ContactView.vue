<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';

import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Message from 'primevue/message';
import Toast from 'primevue/toast';

import { useToast } from 'primevue/usetoast';
import { Form } from '@primevue/forms';
import { valibotResolver } from '@primevue/forms/resolvers/valibot';
import * as v from 'valibot';
import { useReCaptcha  } from 'vue-recaptcha-v3';

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

const sendEmail =  async () =>{
  const params = {
    subject: 'Portafolio - Contacto',
    message: `<div><h1>Interesado en: ${selectedTopics.value}</h1><h3>Contacto: ${contactEmail.value}</h3><p>${contactMessage.value}</p></div>`
  }
  await recaptchaLoaded()
  const token = await executeRecaptcha('contact_form')
  await store.dispatch('verifyRecaptcha', token).then(async (res) =>{
    if (res === 200){
      await store.dispatch('sendEmails', params).then((res) =>{
        if (res === 200){
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
  const {valid, reset} = form;
  if (valid){
    if (selectedTopics.value.length > 0){
      const res = sendEmail();
      if (res){
        toast.add({ severity: 'success', summary: 'Thank you for your message! I will get back to you soon.', life: 3000 });
        selectedTopics.value = [];
        contactEmail.value = '';
        contactMessage.value = '';
        reset();
      }
      else{
        toast.add({ severity: 'error', summary: 'There was an error sending the email', life: 3000, closable: false});
      }
    }
    else{
      toast.add({ severity: 'error', summary: 'Please select at least one topic', life: 3000, closable: false});
    }
  }
  else{
    toast.add({ severity: 'error', summary: 'Form is invalid', life: 3000, closable: false});
  }
};
</script>

<template>
  <section id="contact" class="contact">
    <Toast />
    <div class="container">
      <h2 class="section-title">Get In Touch</h2>
      <div class="contact-content">
        <div class="contact-intro">
          <p>
            Interested in working together? Select a topic you're interested in
            and let's discuss how I can help.
          </p>
        </div>
        <Form v-slot="$form" :resolver="resolver" @submit="submitContact" :initialValues>
          <div class="topic-selection">
            <h3>I'm interested in:</h3>
            <div class="topic-chips">
              <label v-for="(topic, index) in contactTopics" :key="index" class="topic-chip">
                <input name="topics" type="checkbox" v-model="selectedTopics" :value="topic" />
                <span>{{ topic }}</span>
              </label>
            </div>
            <Message  v-if="$form.topics?.invalid" size="small" variant="simple" severity="warn">{{ $form.topics.error.message }}</Message>
          </div>
          <div class="form-group">
            <label for="email">Your Email</label>
            <InputText name="email" v-model="contactEmail" placeholder="your.email@example.com" style="background-color: white; color: black;"/>
            <Message v-if="$form.email?.invalid" size="small" variant="simple" severity="warn">{{ $form.email.error.message }}</Message>
          </div>
          <div class="form-group">
            <label for="message">Tell me about your project</label>
            <Textarea name="message" v-model="contactMessage" autoResize rows="5" cols="30" placeholder="Describe your project or inquiry..." style="background-color: white; color: black;"/>
            <Message v-if="$form.message?.invalid" size="small" variant="simple" severity="warn">{{ $form.message.error.message }}</Message>
          </div>
          <Button unstyled type="submit" label="Send Message" class="btn primary" />
        </Form>
      </div>
    </div>
  </section>
</template>