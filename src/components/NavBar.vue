<script setup lang="ts">
import { inject, onMounted, onUnmounted, ref } from 'vue'
import { Menu, X } from '@lucide/vue'

const openContact = inject<() => void>('openContact', () => {})

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const navLinks = [
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Stack', href: '#stack' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Experiencia', href: '#experiencia' },
]

function handleScroll() {
  isScrolled.value = window.scrollY > 50
}

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

function closeMobileMenu() {
  isMobileMenuOpen.value = false
}

function onContactClick() {
  closeMobileMenu()
  openContact()
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="
      isScrolled
        ? 'bg-background/80 backdrop-blur-md border-b border-border'
        : 'bg-transparent border-b border-transparent'
    "
  >
    <nav class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      <!-- Logo -->
      <a
        href="#top"
        class="flex items-center gap-1.5 text-base font-semibold text-foreground hover:text-foreground/90 transition-colors"
      >
        <span
          class="inline-block w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_8px_var(--color-gold)]"
          aria-hidden="true"
        />
        <span>Daniel</span>
        <span class="text-gold">.</span>
      </a>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center gap-8">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          {{ link.label }}
        </a>
        <button
          type="button"
          class="px-4 py-2 text-sm font-medium rounded-lg bg-foreground text-background hover:bg-foreground/90 transition-colors"
          @click="openContact"
        >
          Contacto
        </button>
      </div>

      <!-- Mobile Menu Button -->
      <button
        type="button"
        class="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-foreground hover:bg-surface transition-colors"
        :aria-label="isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'"
        :aria-expanded="isMobileMenuOpen"
        @click="toggleMobileMenu"
      >
        <X v-if="isMobileMenuOpen" :size="20" />
        <Menu v-else :size="20" />
      </button>
    </nav>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="isMobileMenuOpen"
        class="md:hidden bg-background/95 backdrop-blur-md border-b border-border"
      >
        <div class="px-6 py-6 flex flex-col gap-4">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="text-base text-muted-foreground hover:text-foreground transition-colors"
            @click="closeMobileMenu"
          >
            {{ link.label }}
          </a>
          <button
            type="button"
            class="mt-2 w-full px-4 py-2.5 text-sm font-medium text-center rounded-lg bg-foreground text-background hover:bg-foreground/90 transition-colors"
            @click="onContactClick"
          >
            Contacto
          </button>
        </div>
      </div>
    </Transition>
  </header>
</template>
