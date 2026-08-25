<script setup lang="ts">
interface Tech {
  name: string
  role: string
}

const technologies: Tech[] = [
  { name: 'Python', role: 'Lenguaje principal' },
  { name: 'FastAPI', role: 'Framework backend' },
  { name: 'Vue.js', role: 'Frontend' },
  { name: 'MySQL', role: 'Base de datos' },
  { name: 'Selenium', role: 'RPA / Scraping' },
  { name: 'Zoho APIs', role: 'Integraciones' },
  { name: 'WordPress', role: 'Elementor / Divi' },
  { name: 'JavaScript', role: 'Web y automatización' },
]
</script>

<template>
  <section id="stack" class="relative py-24 md:py-32 border-y border-border">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Section header: number on the left, description on the right -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-16">
        <div class="md:col-span-4">
          <div class="flex items-center gap-3">
            <span class="text-gold font-mono text-sm">02</span>
            <span class="text-muted-foreground/40">·</span>
            <span class="text-sm text-muted-foreground">Stack</span>
          </div>
        </div>

        <div class="md:col-span-7 md:col-start-6 space-y-4">
          <h2
            class="text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.1] tracking-tight"
          >
            Las herramientas con las que envío a
            <span class="gradient-text italic font-normal">producción</span>.
          </h2>
          <p class="text-base text-muted-foreground max-w-xl leading-relaxed">
            Backend en Python con FastAPI, frontend con Vue.js, y todo el
            ecosistema de scraping, RPA e integraciones a su alrededor.
          </p>
        </div>
      </div>

      <!-- Tech grid -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
        <div
          v-for="tech in technologies"
          :key="tech.name"
          class="group relative bg-surface p-6 md:p-8 transition-colors hover:bg-surface-elevated"
        >
          <!-- Small status dot, turns gold on hover -->
          <span
            class="inline-block w-1.5 h-1.5 rounded-full bg-muted-foreground/40 mb-6 transition-colors group-hover:bg-gold group-hover:shadow-[0_0_8px_var(--color-gold)]"
            aria-hidden="true"
          />

          <div
            class="text-base font-medium text-foreground transition-colors group-hover:text-gold"
          >
            {{ tech.name }}
          </div>
          <div class="mt-1 text-sm text-muted-foreground">
            {{ tech.role }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
