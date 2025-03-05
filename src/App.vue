<script setup>
import HeaderApp from './components/system/HeaderApp.vue'
import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'
import ProjectsView from './views/ProjectsView.vue'
import ContactView from './views/ContactView.vue'
</script>

<template>
  <div class="app">
    <HeaderApp/>
    <div>
      <router-view/>
    </div>
  </div>
</template>

<style>
.container{
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
</style>