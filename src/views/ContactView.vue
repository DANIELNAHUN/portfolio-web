<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Message from 'primevue/message';
import Checkbox from 'primevue/checkbox';
import { Form } from '@primevue/forms';
import { valibotResolver } from '@primevue/forms/resolvers/valibot';
import * as v from 'valibot';

const store = useStore();

const contactTopics = computed(() => store.state.topics);
const selectedTopics = ref([]);
const contactEmail = ref('');
const contactMessage = ref('');

const resolver = ref(valibotResolver(
  v.object({
    topics: v.pipe(
      v.array(v.string(), v.minLength(3, 'Please select at least one topic')),
    ),
    email: v.pipe(
      v.string(),
      v.email('Please enter a valid email address'),
      v.nonEmpty('Please email is required')
    ),
    message: v.pipe(
      v.string(),
      v.nonEmpty('Please tell me about your project'),
      v.minLength(10, 'Your message must be at least 10 characters long')
    )
  })
))

const submitContact = ({valid}) => {
  console.log('Form submitted:', {
    topics: selectedTopics.value,
    email: contactEmail.value,
    message: contactMessage.value
  });
  if (valid){
    // Here I would typically send this data to your backend
    alert('Thank you for your message! I will get back to you soon.');
    selectedTopics.value = [];
    contactEmail.value = '';
    contactMessage.value = '';
  }
  else{
    console.log('Form is invalid');
  }
};
</script>

<template>
  <section id="contact" class="contact">
    <div class="container">
      <h2 class="section-title">Get In Touch</h2>
      <div class="contact-content">
        <div class="contact-intro">
          <p>
            Interested in working together? Select a topic you're interested in
            and let's discuss how I can help.
          </p>
        </div>
        <Form v-slot="$form" :resolver="resolver" @submit="submitContact">
          <div class="topic-selection">
            <h3>I'm interested in:</h3>
              <!-- <div v-for="topic in contactTopics" :key="topic" class="topic-chip">
                  <Checkbox inputId="topic" :value="topic" v-model="selectedTopics" class="chip-content"/>
                  <label for="topic"> {{ topic }} </label>
              </div> -->
            <div class="topic-chips">
              <label v-for="(topic, index) in contactTopics" :key="index" class="topic-chip">
                <input name="topics" type="checkbox" v-model="selectedTopics" :value="topic" />
                <span>{{ topic }}</span>
              </label>
            </div>
            <Message v-if="$form.topics?.invalid" severity="error" size="small" variant="simple">{{ $form.topics.error.message }}</Message>
          </div>
          <div class="form-group">
            <label for="email">Your Email</label>
            <InputText name="email" v-model="contactEmail" placeholder="your.email@example.com"/>
            <Message v-if="$form.email?.invalid" severity="error" size="small" variant="simple">{{ $form.email.error.message }}</Message>
          </div>
          <div class="form-group">
            <label for="message">Tell me about your project</label>
            <Textarea name="message" v-model="contactMessage" autoResize rows="5" cols="30" placeholder="Describe your project or inquiry..."/>
            <Message v-if="$form.message?.invalid" severity="error" size="small" variant="simple">{{ $form.message.error.message }}</Message>
          </div>
          <Button label="Send Message" class="btn primary" @click="submitContact"/>
        </Form>
      </div>
    </div>
  </section>
</template>