<script setup>
import HeroComponent from '../components/me/HeroComponent.vue';
import AboutMeComponent from '../components/me/AboutMeComponent.vue';
import LanguagesComponent from '../components/projects/LanguagesComponent.vue';
import ContactMeComponent from '../components/me/ContactMeComponent.vue';
import SocialLinksComponent from '../components/me/SocialLinksComponent.vue';
import ProjectsComponent from '../components/projects/ProjectsComponent.vue';
</script>

<template>
    <div class="grid">
        <div class="item item-0">
            <HeroComponent />
        </div>
        <div class="item item-1">
            <LanguagesComponent />
        </div>
        <div class="item item-2">
            <AboutMeComponent/>
        </div>
        <div class="item item-3">
            <ContactMeComponent />
        </div>
        <div class="item item-4">
            <SocialLinksComponent />
        </div>
        <div class="item item-5">
            <ProjectsComponent />
        </div>
    </div>
</template>

<style scoped>
.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(15, 1fr);
    gap: 15px;
    height: 100vh;
    padding: 1%;
}

.item {
    background-color: rgb(56, 56, 35);
    align-content: center;
    color: #fff;
    border-radius: 5px;
    padding: 20px;
    font-size: 150%;
    overflow: hidden;
}

.mobile-only {
    display: block;
}

.desktop-only {
    display: none;
}

.item-0 {
    grid-column: 1 / span 3;
    grid-row: 1 / span 4;
}

.item-1 {
    grid-column: 1 / span 3;
    grid-row: 5 / span 2;
}

.item-2 {
    grid-column: 1 / span 3;
    grid-row: 7 / span 3;
}

.item-3 {
    grid-column: 1 / span 3;
    grid-row: 10 / span 3;
}

.item-4 {
    grid-column: 1 / span 3;
    grid-row: 13;
}

.item-5 {
    grid-column: 1 / span 3;
    grid-row: 14 / span 2;
}

@media (max-width: 768px) {
    .grid{
        height: auto;
        padding: 3%;
    }    
}

@media (min-width: 768px) {
    .grid {
        grid-template-columns: repeat(11, 1fr);
        grid-template-rows: repeat(10, 1fr);        
        gap: 8px;
    }

    .mobile-only {
        display: none;
    }

    .desktop-only {
        display: block;
    }

    .item-0 {
        grid-column: 1 / span 5;
        grid-row: 1 / span 8;
    }

    .item-1 {
        grid-column: 1 / span 5;
        grid-row: 9 / span 2;
    }

    .item-2 {
        grid-column: 6 / span 3;
        grid-row: 1 / span 6;
    }

    .item-3 {
        grid-column: 9 / span 3;
        grid-row: 1 / span 4;
    }

    .item-4 {
        grid-column: 9 / span 3;
        grid-row: 5 / span 2;
    }

    .item-5 {
        grid-column: 6 / span 6;
        grid-row: 7 / span 4;
    }

}
</style>