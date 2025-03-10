<script setup>
import { ref, computed, watch } from 'vue';
import { useStore } from 'vuex';
import Tag from 'primevue/tag';

const store = useStore();

const me = computed(() => store.state.me);
const skills = computed(() => store.state.technologies);
const skillsFront = ref([])
const skillsBack = ref([])
const skillsData = ref([])
const ageMe = ref(0)

const splitSkills = () => {
  skills.value.forEach(skill => {
    if (skill.tag === 'frontend') {
      skillsFront.value.push(skill.technology);
    } else if (skill.tag === 'backend') {
      skillsBack.value.push(skill.technology);
    } else if (skill.tag === 'data') {
      skillsData.value.push(skill.technology);
    }
  });
};

function calculateAge(date) {
    let today = new Date();
    let datB = new Date(date);
    let age = today.getFullYear() - datB.getFullYear();
    let month = today.getMonth() - datB.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < datB.getDate())) {
      age--;
    }
    ageMe.value = age
}

watch([skills, me], ([newskills, newme]) => {
  if(newskills.length && newme){
    splitSkills();
    calculateAge(me.value.birthdate)
  }
});


</script>

<template>
  <section id="about" class="about">
    <div class="container">
      <h2 class="section-title">About Me</h2>
      <div class="about-content">
        <div class="about-text">
          <p class="intro">
            Hello! I'm <strong>{{ me.fullname }}</strong>, a {{ageMe}}-year-old developer from
            Perú with a passion for creating elegant solutions to complex
            problems.
          </p>
          <p>
            With a Bachelor's degree in Computer Science from the National 
            University of Moquegua, I've spent the last 5 years honing
            my skills in both frontend and backend development.
          </p>
          <p>
            My journey in technology began when I was 20, building simple
            websites for friends and family. Today, I specialize in creating
            robust web applications using Vue.js and Python, developing ETL
            processes for data integration, and implementing RPA solutions to
            automate business workflows.
          </p>
          <p>
            What drives me is the constant evolution of technology and the
            endless opportunities to learn and create. I believe in clean code,
            user-centered design, and the power of automation to transform
            businesses.
          </p>
        </div>
        <div class="skills">
          <div class="skill-category" v-if="skillsFront.length > 0">
            <h3>Frontend</h3>
            <div class="skill-tags">
              <Tag unstyled v-for="(skill, index) in skillsFront" :key="index" :value="skill" rounded></Tag>
            </div>
          </div>
          <div class="skill-category" v-if="skillsBack.length > 0">
            <h3>Backend</h3>
            <div class="skill-tags">
              <Tag unstyled v-for="(skill, index) in skillsBack" :key="index" :value="skill" rounded></Tag>
            </div>
          </div>
          <div class="skill-category" v-if="skillsData.length > 0">
            <h3>Data & Automation</h3>
            <div class="skill-tags">
              <Tag unstyled v-for="(skill, index) in skillsData" :key="index" :value="skill" rounded></Tag>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>