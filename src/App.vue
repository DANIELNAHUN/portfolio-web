<script setup>
import HeaderApp from './components/system/HeaderApp.vue'
import FooterApp from './components/system/FooterApp.vue'

import { onMounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore();

onMounted(() => {
  store.dispatch('getMe');
  store.dispatch('getTitles');
  store.dispatch('getSkills');
  store.dispatch('getProjects');
  store.dispatch('getTopics');
  store.dispatch('getLanguages');
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
 /* .app{
  background-color: black;
 } */
</style>