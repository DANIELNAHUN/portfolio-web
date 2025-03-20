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
      content: 'Daniel Calcina. Portfolio, Projects and Contact.',
    },
    {
      property: 'og:title',
      content: "Home - Daniel Calcina's Web Portfolio",
    },
    {
      property: 'og:description',
      content: 'Daniel Calcina. Portfolio, Projects and Contact.',
    },
    {
      property: 'og:url',
      content: 'https://daniel.calcina.dev/',
    },
    // {
    //   property: 'og:image',
    //   content: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    // },
    {
      name: 'keywords',
      content: 'Daniel Calcina, Peru, Ilo, Arequipa, Tacna, Lima, Web Developer, RPA, Developer, ETL, Python, VueJS, Vue, Wordpress, FastaAPI, RestAPI, Docker, HTML, CSS, JavaScript, Azure, Git, Supabase',
    }

  ],
});
</script>

<template>
  <HeroView />
  <AboutView />
  <ProjectsView />
  <ContactView />
</template>