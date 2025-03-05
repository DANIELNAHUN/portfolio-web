<script setup>

</script>

<template>
    <div class="header">
        <div class="container">
            <div class="logo">Portfolio</div>
            <div class="nav-links">
                <a href="/">Home</a>
                <a href="#about">About Me</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact Me</a>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
/* Navigation */
.nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  padding: 1rem 0;
}

.nav .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-links a {
  color: var(--dark-color);
  font-weight: 500;
}

.nav-links a:hover {
  color: var(--primary-color);
}
</style>