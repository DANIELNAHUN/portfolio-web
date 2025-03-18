<script setup>
import { ref, watch, computed, onMounted  } from "vue";
import { useStore } from 'vuex';
import ProjectList from "../components/projects/ProjectList.vue";

const store = useStore()

const featuredProjects = computed(()=> store.state.projects)
const techs = computed(()=> store.state.technologies)
const projects = ref([])

const updateNameTags = () => featuredProjects.value.forEach( project => {
  let listtechnologies = project.tags;
  let techsObject = techs.value;
  let techNames = listtechnologies.map(tech => {
    let techName = techsObject.find(techObject => techObject.id === tech);
    return techName.technology;
  });
  projects.value.push({ ...project, tags: techNames });
});

watch([featuredProjects, techs],([newFeaturedProjects, newTechs]) =>{
  if (newFeaturedProjects.length && newTechs.length) {
    projects.value = [];
    updateNameTags();
  }
});

onMounted(() => {
  if (featuredProjects.value.length<1) {
    store.dispatch('getProjects');
  }
  if (techs.value.length) {
    store.dispatch('getSkills');
  }
});
</script>

<template>
  <section id="projects" class="projects">
    <div class="container">
      <h2 class="section-title">Featured Projects</h2>
      <ProjectList paginator="true" layout="list"/>
      <div class="view-all">
        <router-link to="/projects" class="btn primary">View All Projects</router-link>
      </div>
    </div>
  </section>
</template>