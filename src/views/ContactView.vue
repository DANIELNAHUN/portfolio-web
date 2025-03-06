<script setup>
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
        <div class="contact-form">
          <div class="topic-selection">
            <h3>I'm interested in:</h3>
            <div class="topic-chips">
              <label
                v-for="(topic, index) in contactTopics"
                :key="index"
                class="topic-chip"
              >
                <input
                  type="checkbox"
                  v-model="selectedTopics"
                  :value="topic"
                />
                <span>{{ topic }}</span>
              </label>
            </div>
          </div>
          <div class="form-group">
            <label for="email">Your Email</label>
            <input
              type="email"
              id="email"
              v-model="contactEmail"
              placeholder="your.email@example.com"
            />
          </div>
          <div class="form-group">
            <label for="message">Tell me about your project</label>
            <textarea
              id="message"
              v-model="contactMessage"
              rows="4"
              placeholder="Describe your project or inquiry..."
            ></textarea>
          </div>
          <button class="btn primary" @click="submitContact">
            Send Message
          </button>
        </div>
      </div>
    </div>
  </section>
</template>