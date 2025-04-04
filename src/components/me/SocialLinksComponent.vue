<script setup>
import Github from '../svg/Github.vue';
import LinkedIn from '../svg/LinkedIn.vue';

import Button from 'primevue/button';
</script>

<template>
    <section>
        <div class="socials">
            <a class="item" href="https://github.com/DANIELNAHUN" target="_blank">
                <Github class="btn-git"/>
                <p>Github</p>
            </a>
            <a class="item" href="https://www.linkedin.com/in/daniel-nahun-calcina-fuentes" target="_blank">
                <LinkedIn  class="btn-lkn"/>
                <p>LinkedIn</p>
            </a>
            <a class="item" href="#" target="_blank">
                <Button class="btn-cv" icon="pi pi-file-pdf" iconPos="bottom"/>
                <p>My CV</p>
            </a>
        </div>
    </section>
</template>

<style scoped lang="scss">
.socials{
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    max-height: 200px;

    .item{
        margin: 0px 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        p{
            font-size: small;
            color: white;
        }
        [class^="btn"]{
            transition: all 0.3s ease-in-out;
            &:hover{
                background-color: transparent;
                color: #fff;
                box-shadow: 0 0 10px #fff;
                border-radius: 10px;
            }
        }
        .btn-cv{
            background-color: transparent;
            color: #fff;
            border: #fff solid 1px;
            width: 50px;
            height: 50px;
            font-size: 40px;
            padding: 10px 20px;
            border-radius: 10px;
            shape-outside: margin-box;
            &:hover{
                background-color: transparent;
                color: #fff;
                box-shadow: 0 0 10px #fff;
                border-radius: 20px;
            }
        }
    }
    
}
</style>