<script setup lang="ts">
interface Experience {
  period: string
  company: string
  role: string
  description: string
}

const experiences: Experience[] = [
  {
    period: 'Jun 2025 — Actualidad',
    company: 'Fractalia',
    role: 'Backend & Automation Engineer',
    description:
      'Desarrollo backend e implementación de automatizaciones operativas críticas.',
  },
  {
    period: 'Feb 2022 — Ene 2025',
    company: 'Cableclub',
    role: 'Asistente de programación → Analista programador → Fullstack Dev Leader',
    description:
      'Tres años liderando la evolución técnica: del ETL inicial a una intranet modular con módulos comerciales, finanzas y operaciones. Integraciones Zoho, RPA, automatizaciones de cobranza y sistemas de campo.',
  },
]
</script>

<template>
  <section id="experiencia" class="relative py-24 md:py-32 border-y border-border">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Section header -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-16">
        <div class="md:col-span-4">
          <div class="flex items-center gap-3">
            <span class="text-gold font-mono text-sm">04</span>
            <span class="text-muted-foreground/40">·</span>
            <span class="text-sm text-muted-foreground">Experiencia</span>
          </div>
        </div>
        <div class="md:col-span-7 md:col-start-6">
          <h2
            class="text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.1] tracking-tight"
          >
            De asistente a
            <span class="gradient-text italic font-normal">líder fullstack</span>.
          </h2>
        </div>
      </div>

      <!-- Experience table: period (gold mono) on the left, content on the right.
           space-y-px + bg-border creates hairline row separators. -->
      <div class="rounded-2xl border border-border bg-border overflow-hidden">
        <div
          v-for="(exp, index) in experiences"
          :key="exp.company"
          class="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 p-6 md:p-8 bg-surface transition-colors hover:bg-surface-elevated"
          :class="{ 'border-t border-border': index !== 0 }"
        >
          <div class="md:col-span-3">
            <div class="text-xs font-mono text-gold tracking-wider">
              {{ exp.period }}
            </div>
          </div>
          <div class="md:col-span-9 space-y-2">
            <h3 class="text-lg font-semibold text-foreground">
              {{ exp.company }}
            </h3>
            <div class="text-sm text-gold/90 font-medium">
              {{ exp.role }}
            </div>
            <p class="text-sm text-muted-foreground leading-relaxed max-w-2xl">
              {{ exp.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
