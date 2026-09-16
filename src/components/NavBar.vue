<script setup lang="ts">
import { inject, ref } from 'vue'
import { ArrowUpRight, Menu, X } from '@lucide/vue'

const openContact = inject<() => void>('openContact', () => {})

const isMobileMenuOpen = ref(false)

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
</script>

<template>
  <header
    class="sticky top-0 z-40 border-b border-surface-container bg-surface/90 backdrop-blur-md"
  >
    <nav
      class="w-full px-4 sm:px-6 lg:px-8 xl:px-10 h-16 flex items-center justify-between gap-4"
    >
      <!-- Brand: logo + name + mono role -->
      <a
        href="#top"
        class="flex items-center gap-2.5 text-on-surface hover:opacity-80 transition-opacity min-w-0"
        aria-label="Daniel Nahun — inicio"
      >
        <img
          src="/logoweb.jpeg"
          alt="Daniel Nahun"
          class="w-8 h-8 rounded-md object-cover border border-border shrink-0"
          width="32"
          height="32"
        />
        <span class="text-[15px] font-semibold tracking-[-0.01em] truncate">
          Daniel Nahun
        </span>
        <span
          class="hidden lg:inline font-mono text-[11px] uppercase tracking-widest text-on-surface-variant"
        >
          AI &amp; Fullstack Architect
        </span>
      </a>

      <!-- Right: status badge + Contactar button (desktop) -->
      <div class="hidden md:flex items-center gap-3">
        <div
          class="hidden xl:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container border border-border text-[11px] text-on-surface-variant"
        >
          <span class="pulse-dot-success" aria-hidden="true" />
          <span>Disponible para Proyectos &amp; Advisory</span>
        </div>
        <button
          type="button"
          class="group inline-flex items-center gap-1.5 px-4 py-2 text-[14px] font-medium rounded-md bg-primary text-white hover:opacity-90 transition-all"
          @click="openContact"
        >
          Contactar
          <ArrowUpRight
            :size="14"
            class="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </button>
      </div>

      <!-- Mobile Menu Button -->
      <button
        type="button"
        class="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-on-surface hover:bg-surface-container transition-colors"
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
        class="md:hidden bg-surface/95 backdrop-blur-md border-b border-surface-container"
      >
        <div class="px-6 py-6 flex flex-col gap-4">
          <div
            class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container border border-border text-[11px] text-on-surface-variant self-start"
          >
            <span class="pulse-dot-success" aria-hidden="true" />
            <span>Disponible para Proyectos &amp; Advisory</span>
          </div>
          <button
            type="button"
            class="group w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-sm font-medium rounded-md bg-primary text-white hover:opacity-90 transition-all"
            @click="onContactClick"
          >
            Contactar
            <ArrowUpRight
              :size="14"
              class="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </button>
        </div>
      </div>
    </Transition>
  </header>
</template>
