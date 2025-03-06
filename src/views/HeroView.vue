<script setup>
import { ref, onMounted, computed  } from "vue";
import { useStore } from 'vuex';

const store = useStore()

const me = computed(()=> store.state.me)
const titles = computed(()=> store.state.titles)
const currentTitle = ref(titles[0]);
const titleIndex = ref(0);

const rotateTitles = () => {
  setInterval(() =>{
    titleIndex.value = (titleIndex.value + 1) % titles.value.length;
    currentTitle.value = titles.value[titleIndex.value];
  }, 3000);
}

onMounted(()=>{
  rotateTitles();
})


</script>

<template>
  <section id="home" class="hero">
    <div class="container">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="name">
            {{ me.shortname }}
          </h1>
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