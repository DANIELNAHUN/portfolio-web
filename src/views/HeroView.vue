<script setup>
</script>

<template>
  <section id="home" class="hero">
    <div class="container">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="name">John Doe</h1>
          <div class="title-container">
            <h2>
              I am a <span class="changing-title">{{ currentTitle }}</span>
            </h2>
          </div>
          <div class="cta-buttons">
            <a href="#projects" class="btn primary">View Projects</a>
            <a href="#contact" class="btn secondary">Contact Me</a>
          </div>
        </div>
        <div class="hero-image">
          <div class="image-container">
            <!-- Replace with your actual image -->
            <img src="../assets/vue.svg" alt="Profile Photo" />
          </div>
        </div>
      </div>
    </div>
    <div class="hero-background">
      <div class="shape shape-1"></div>
      <div class="shape shape-2"></div>
    </div>
  </section>
</template>