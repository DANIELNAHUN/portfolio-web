<script setup>
import ProjectList from "../components/projects/ProjectList.vue";
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