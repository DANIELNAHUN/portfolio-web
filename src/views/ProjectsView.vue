<script setup>
import { ref, watch, computed  } from "vue";
import { useStore } from 'vuex';

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
    updateNameTags();
  }
});
</script>

<template>
  <section id="projects" class="projects">
    <div class="container">
      <h2 class="section-title">Featured Projects</h2>
      <div class="projects-grid">
        <div
          class="project-card"
          v-for="(project, index) in projects"
          :key="index"
        >
          <div class="project-image">
            <img src="../assets/vue.svg" :alt="project.title" />
            <!-- <img :src="project.image" :alt="project.title" /> -->
          </div>
          <div class="project-content">
            <h3>{{ project.title }}</h3>
            <p class="project-category">{{ project.category }}</p>
            <p class="project-description">{{ project.description }}</p>
            <div class="project-tags">
              <span v-for="(tag, tagIndex) in project.tags" :key="tagIndex">{{
                tag
              }}</span>
            </div>
            <a :href="project.link" class="project-link">View Project</a>
          </div>
        </div>
      </div>
      <div class="view-all">
        <router-link to="/projects" class="btn primary"
          >View All Projects</router-link
        >
      </div>
    </div>
  </section>
</template>