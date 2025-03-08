<script setup>
import HeaderApp from './components/system/HeaderApp.vue'
import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'
import ProjectsView from './views/ProjectsView.vue'
import ContactView from './views/ContactView.vue'
import FooterApp from './components/system/FooterApp.vue'

import { onMounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore();

onMounted(() => {
  // store.dispatch('getMe');
  // store.dispatch('getTitles');
  store.dispatch('getSkills');
  store.dispatch('getProjects');
})
</script>

<template>
  <div class="app">
    <HeaderApp/>
    <div class="body-container">
      <router-view/>
    </div>
  </div>
  <FooterApp/>
</template>

<style>
.body-container{
  margin-top: 4rem;
}
</style>