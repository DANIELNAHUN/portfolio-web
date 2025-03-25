<script setup>
import ProjectList from "../components/projects/ProjectList.vue";
import { useHead } from '@vueuse/head';
useHead({
  title: "Projects - Daniel Calcina",
  meta: [
    {
      name: 'description',
      content: 'Projects developed by Daniel Calcina.',
    },
    {
      property: 'og:title',
      content: "Prjects - Daniel Calcina",
    },
    {
      property: 'og:description',
      content: 'Projects developed by Daniel Calcina.',
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
  <section id="projects" class="projects">
    <div class="container">
      <h2 class="section-title">Featured Projects</h2>
      <ProjectList :paginator="Boolean(true)" layout="list"/>
      <div class="view-all">
        <router-link to="/projects" class="btn primary">View All Projects</router-link>
      </div>
    </div>
  </section>
</template>