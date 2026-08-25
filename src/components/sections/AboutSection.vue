<script setup lang="ts">
import { Briefcase, Calendar, MapPin } from '@lucide/vue'

const details = [
  { icon: MapPin, label: 'Lima, Perú' },
  { icon: Calendar, label: '10·12·1999' },
  { icon: Briefcase, label: 'Backend & Automation' },
]
</script>

<template>
  <section id="sobre-mi" class="relative py-24 md:py-32">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Section number + label -->
      <div class="mb-12 flex items-center gap-3">
        <span class="text-gold font-mono text-sm">01</span>
        <span class="text-muted-foreground/40">·</span>
        <span class="text-sm text-muted-foreground">Sobre mí</span>
      </div>

      <!-- 12-col grid: 4 cols left (label) + offset-1 + 7 cols right (content) -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        <div class="md:col-span-4">
          <p class="text-xs font-mono uppercase tracking-widest text-gold/80">
            Ingeniero
          </p>
        </div>

        <div class="md:col-span-7 md:col-start-6 space-y-8">
          <h2
            class="text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.1] tracking-tight"
          >
            Ingeniero
            <span class="gradient-text italic font-normal">de sistemas</span>,
            constructor por oficio.
          </h2>

          <div class="space-y-4 text-base text-muted-foreground leading-relaxed">
            <p>
              Nací en Lima el 10 de diciembre de 1999. Estudié Ingeniería de
              Sistemas e Informática y me especialicé en backend y
              automatización empresarial.
            </p>
            <p>
              Trabajo donde los procesos duelen: integraciones con ERPs sin
              API, cobranzas multicanal, validaciones SUNAT, hojas de ruta
              para técnicos en campo y sistemas internos que conectan
              finanzas, operaciones y comercial en una sola plataforma.
            </p>
          </div>

          <!-- Personal details as bordered chips -->
          <div class="flex flex-wrap gap-3 pt-4">
            <div
              v-for="detail in details"
              :key="detail.label"
              class="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-surface border border-border text-sm text-foreground"
            >
              <component
                :is="detail.icon"
                :size="14"
                class="text-gold"
              />
              <span>{{ detail.label }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
