<script setup lang="ts">
import { RouterView } from 'vue-router'
import { provide, ref } from 'vue'
import NavBar from './components/NavBar.vue'
import ContactModal from './components/ContactModal.vue'

const isContactOpen = ref(false)

function openContact() {
  isContactOpen.value = true
}

function closeContact() {
  isContactOpen.value = false
}

// The openContact function is provided so any descendant (NavBar,
// HomeView) can open the modal without prop drilling.
provide('openContact', openContact)
</script>

<template>
  <div
    class="min-h-screen flex flex-col bg-background text-foreground font-[family-name:var(--font-display)]"
  >
    <NavBar />
    <main class="flex-1 flex flex-col min-h-0">
      <RouterView />
    </main>
    <ContactModal :open="isContactOpen" @close="closeContact" />
  </div>
</template>
