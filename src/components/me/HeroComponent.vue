<script setup>
import { ref, onMounted, computed  } from "vue";
import { useStore } from 'vuex';
import Card from 'primevue/card';

const store = useStore()

const me = computed(()=> store.state.me)
const titles = computed(()=> store.state.titles)
const currentTitle = ref(titles[0]);
const titleIndex = ref(0);

const rotateTitles = () => {
  setInterval(() =>{
    titleIndex.value = (titleIndex.value + 1) % titles.value.length;
    currentTitle.value = titles.value[titleIndex.value];
  }, 3000);
}

onMounted(()=>{
  rotateTitles();
})
</script>

<template>
    <Card>
        <template #header><p>I'm <span>{{ currentTitle }}</span></p></template>
        <template #title>
            <div>
                <img src="/src/assets/profile.webp" :alt="me.shortname">
                <!-- <img :src="me.photo" :alt="me.shortname"> -->
                <p>{{ me.fullname }}</p>
            </div>
        </template>
    </Card>
</template>

<style scoped lang="scss">
.p-card{
    width: 100%;
    height: auto;
    background-color: transparent;
    color: #EE6D32;
    box-shadow: none;

    img{
        width: 100%;
        max-height: 450px;
        object-fit: cover;
    }

    .p-card-header{
        p{
            font-size: 2rem;
            font-weight: bold;
            text-align: center;
        }
        span{
            background-image: url(https://c.tenor.com/IrUuJA9J_JoAAAAC/trippy-color.gif);
            background-size: cover;
            background-clip: text;
            color: transparent;
        }
    }
    .p-card-title{
        p{
            font-size: 1.5rem;
            font-weight: bold;
            text-align: center;
            color: #EE6D32;
        }
    }
}
</style>