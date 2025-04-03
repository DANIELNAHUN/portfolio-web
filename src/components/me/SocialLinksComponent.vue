<script setup>
import Github from '../svg/Github.vue';
import LinkedIn from '../svg/LinkedIn.vue';

import Button from 'primevue/button';
</script>

<template>
    <section>
        <div class="socials">
            <div class="item">
                <Github/>
                <p>Github</p>
            </div>
            <div class="item">
                <LinkedIn/>
                <p>LinkedIn</p>
            </div>
            <div class="item">
                <Button label="My CV"/>
            </div>
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
        }
    }
    
}
</style>