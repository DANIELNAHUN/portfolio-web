<script setup>
import { ref, computed, watch } from 'vue';
import { useStore } from 'vuex';
import Python from '../svg/Python.vue';
import JavaScript from '../svg/JavaScript.vue';
import HTML5 from '../svg/HTML5.vue';
import CSS from '../svg/CSS.vue';
import Node from '../svg/Node.vue';
import VueJS from '../svg/VueJS.vue';
import SQL from '../svg/SQL.vue';
import Docker from '../svg/Docker.vue';

const store = useStore();

const languages = computed(() => store.state.languages);
</script>

<template>
    <section>
        <div class="lang-titles"><h1>My Skills</h1></div>
        <div class="languages">
            <div class="item">
                <Python/>
                <p>Python</p>
            </div>
            <div class="item">
                <JavaScript/>
                <p>JavaScript</p>
            </div>
            <div class="item">
                <HTML5/>
                <p>HTML5</p>
            </div>
            <div class="item">
                <CSS/>
                <p>CSS</p>
            </div>
            <!-- <div class="item">
                <Node/>
                <p>NodeJS</p>
            </div> -->
            <div class="item">
                <VueJS/>
                <p>VueJS</p>
            </div>
            <div class="item">
                <SQL/>
                <p>SQL</p>
            </div>
            <div class="item">
                <Docker/>
                <p>Docker</p>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.lang-titles{
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    max-height: 200px;
    margin-bottom: 20px;

    h1{
        color: #EE6D32;
        font-size: 2rem;
        text-align: center;
        // text-transform: uppercase;
        font-weight: bold;
    }
}
.languages{
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    max-height: 200px;

    .item{
        margin: 0px 5px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        p{
            font-size: small;
        }
    }
    
}
</style>