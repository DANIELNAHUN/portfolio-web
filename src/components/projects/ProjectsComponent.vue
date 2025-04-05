<script setup>
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";

import Carousel from 'primevue/carousel';
import Tag from 'primevue/tag';

const store = useStore();
const projects = computed(() => store.state.projects);

const myprojects = ref([]);

const examples = ref([
    {
        id: 1,
        name: 'Project 1',
        description: 'Description of project 1',
        category: 'Backend',
        image: 'https://via.placeholder.com/150'
    },
    {
        id: 2,
        name: 'Project 2',
        description: 'Description of project 2',
        category: 'Frontend',
        image: 'https://via.placeholder.com/150'
    },
    {
        id: 3,
        name: 'Project 3',
        description: 'Description of project 3',
        category: 'Fullstack',
        image: 'https://via.placeholder.com/150'
    }
])

const assignProjects = () => {
    myprojects.value = projects.value;
}

const getCategory = (project) => {
    switch (project.tag) {
        case 'backend':
            return 'info';
        case 'frontend':
            return 'warn';
    }
}

const responsiveOptions = ref([
    {
        breakpoint: '1400px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
    }
]);



onMounted(() => {
    assignProjects();
});
</script>

<template>
    <section>
        <Carousel :value="projects" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions" circular autoplayInterval="2000">
            <template #item="slotProps">
                <div>
                    <img :src="slotProps.data.image" :alt="slotProps.data.name" style="width: 90%; border-radius: 15px;" />
                    <div>
                        <h3>{{ slotProps.data.title }}</h3>
                        <div v-for="(item, index) in slotProps.data.languages" :key="index" class="project-tag">
                            <Tag :value="item.language" style="background-color: black; color: white; border: #EE6D32 solid 1px;"></Tag>
                        </div>
                    </div>
                </div>
            </template>
        </Carousel>
    </section>
</template>

<style scoped lang="scss">
.p-carousel-item{
    h3{
        color: white;
        font-size: 1rem;
    }
    .project-tag{
        display: inline-block;
        margin: 0.1rem;
    }
}

</style>