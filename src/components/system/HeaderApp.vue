<script setup>
import DarkModeBtn from "./DarkModeBtn.vue";
</script>

<template>
    <nav class="header">
        <div class="container">
            <div class="logo">Portfolio</div>
            <div class="header-links">
                <a href="/">Home</a>
                <a href="#about">About Me</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact Me</a>
            </div>
            <div class="tools">
                <DarkModeBtn />
            </div>
        </div>
    </nav>
</template>

<style>
</style>