<script setup>
import HeroView from "./HeroView.vue";
import AboutView from "./AboutView.vue";
import ProjectsView from "./ProjectsView.vue";
import ContactView from "./ContactView.vue";
import { useHead } from '@vueuse/head';

useHead({
  title: "Home - Daniel Calcina's Web Portfolio",
  meta: [
    {
      name: 'description',
      content: 'Welcome to the portfolio of Daniel Calcina, web developer. Here you will find information about me, my projects and how to contact me.',
    },
    {
      property: 'og:title',
      content: "Home - Daniel Calcina's Web Portfolio",
    },
    {
      property: 'og:description',
      content: 'Welcome to the portfolio of Daniel Calcina, web developer. Here you will find information about me, my projects and how to contact me.',
    },
    {
      property: 'og:url',
      content: 'https://daniel.calcina.dev/',
    },
    // {
    //   property: 'og:image',
    //   content: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    // },
  ],
});
</script>

<template>
  <HeroView />
  <AboutView />
  <ProjectsView />
  <ContactView />
</template>