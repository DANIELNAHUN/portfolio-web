<script setup lang="ts">
import { inject } from 'vue'
import { ArrowUpRight } from '@lucide/vue'

const openContact = inject<() => void>('openContact', () => { })

const stats = [
  { value: '3+', label: 'Años en producción' },
  { value: '20+', label: 'Automatizaciones' },
  { value: '2', label: 'Empresas activas' },
  { value: '100%', label: 'Backend & RPA' },
]
</script>

<template>
  <section id="top" class="relative min-h-screen flex items-center pt-24 overflow-hidden">
    <!-- Grid background with radial mask -->
    <div class="absolute inset-0 grid-bg-mask pointer-events-none" />

    <!-- Top gradient fade overlay -->
    <div class="absolute top-0 left-0 right-0 h-40 gradient-fade pointer-events-none" />

    <!-- Bottom soft gradient to blend into next section -->
    <div
      class="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-background pointer-events-none" />

    <div class="relative max-w-6xl mx-auto px-6 py-20 w-full">
      <div class="max-w-3xl">
        <!-- Status badge -->
        <div
          class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-border text-xs text-muted-foreground">
          <span class="pulse-dot" aria-hidden="true" />
          <span>Disponible para proyectos</span>
        </div>

        <!-- Heading -->
        <h1 class="mt-8 text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight">
          Construyo
          <span class="gradient-text italic font-normal">software</span>
          y automatizo lo que
          <span class="text-gold italic font-normal">nadie quiere repetir</span>.
        </h1>

        <!-- Subcopy -->
        <p class="mt-6 text-base md:text-lg text-muted-foreground max-w-xl">
          Desarrollador de software y procesos, me especializo en crear aplicaciones
          robustas y automatizaciones que se integran con lo que ya usa tu empresa.
        </p>

        <!-- CTAs -->
        <div class="mt-10 flex flex-wrap items-center gap-3">
          <button type="button"
            class="group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gold text-primary-foreground font-medium text-sm hover:brightness-110 transition-all"
            @click="openContact">
            Trabajemos juntos
            <ArrowUpRight :size="16"
              class="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
          <a href="#proyectos"
            class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-sm font-medium text-foreground hover:border-gold/40 hover:bg-surface transition-colors">
            Ver proyectos
          </a>
        </div>
      </div>

      <!-- Stats grid: gap-px + bg-border creates hairline separators -->
      <div
        class="relative mt-20 grid grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
        <div v-for="stat in stats" :key="stat.label" class="bg-surface p-6 md:p-8">
          <div class="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
            {{ stat.value }}
          </div>
          <div class="mt-2 text-sm text-muted-foreground">
            {{ stat.label }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
