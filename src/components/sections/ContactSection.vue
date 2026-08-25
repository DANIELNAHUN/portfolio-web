<script setup lang="ts">
import { inject } from 'vue'
import { ArrowUpRight, Mail } from '@lucide/vue'

const openContact = inject<() => void>('openContact', () => {})
</script>

<template>
  <section id="contacto" class="relative py-24 md:py-32 overflow-hidden">
    <!-- Background pattern + gradient -->
    <div class="absolute inset-0 grid-bg pointer-events-none opacity-60" />
    <div
      class="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background pointer-events-none"
    />
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full bg-gold/5 blur-3xl pointer-events-none"
    />

    <div class="relative max-w-3xl mx-auto px-6 text-center">
      <div
        class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-border text-xs text-muted-foreground"
      >
        <span class="pulse-dot" aria-hidden="true" />
        <span>Disponible para proyectos</span>
      </div>

      <h2
        class="mt-8 text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight"
      >
        ¿Tienes un proceso que
        <span class="gradient-text italic font-normal">debería automatizarse</span>?
      </h2>

      <p class="mt-6 text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
        Cuéntame qué necesitas. Respondo en menos de 24 horas con un alcance
        inicial y los siguientes pasos.
      </p>

      <div class="mt-10 flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          class="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gold text-primary-foreground font-medium text-sm hover:brightness-110 transition-all"
          @click="openContact"
        >
          <Mail :size="16" />
          Escríbeme
          <ArrowUpRight
            :size="16"
            class="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </button>
        <a
          href="mailto:daniel@example.com"
          class="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-sm font-medium text-foreground hover:border-gold/40 hover:bg-surface transition-colors"
        >
          daniel@example.com
        </a>
      </div>
    </div>
  </section>
</template>
