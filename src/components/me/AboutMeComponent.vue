<script setup>
import { ref, computed, watch } from 'vue';
import { useStore } from 'vuex';

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
    if (newskills.length && newme) {
        splitSkills();
        calculateAge(me.value.birthdate)
    }
});

</script>

<template>
    <section class="aboutme">
        <h1>About Me</h1>
        <p>
            Hello! I'm <strong>{{ me.fullname }}</strong>, a {{ ageMe }}-year-old developer from Lima, Perú, specializing in both frontend and backend development.
        </p>
        <p>
            With a Bachelor's degree in Computer Science from the National University of Moquegua and 5 years of experience, he builds robust web applications using Vue.js and Python, develops ETL processes for data integration, and implements RPA solutions for automating business workflows.
        </p>
        <p>
            Passionate about technology's evolution, he values clean code, user-centered design, and automation's transformative power for businesses.
        </p>
    </section>
</template>

<style scoped lang="scss">
.aboutme {
    padding: 1rem;
    color: white;
    align-items: center;

    h1 {
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 1rem;
        color: #EE6D32;
    }

    p {
        font-size: 1rem;
        line-height: 1.5;
        margin-bottom: 1rem;

        strong {
            font-weight: 600;
        }
    }
}
</style>