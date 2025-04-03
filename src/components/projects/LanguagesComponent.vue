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

const store = useStore();

const languages = computed(() => store.state.languages);
</script>

<template>
    <section class="languages">
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
    </section>
</template>

<style scoped lang="scss">
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