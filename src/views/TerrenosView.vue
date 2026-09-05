<script setup lang="ts">
import { MapPin, Maximize2, ArrowUpRight } from '@lucide/vue'

interface Terreno {
  titulo: string
  metros: string
  detalles: string
  precio: string
  precioAlternativos?: string
  lat: number
  lng: number
}

const terrenos: Terreno[] = [
  {
    titulo: 'Miguel Grau - Paucarpata',
    metros: '180 m²',
    detalles: 'Luz + Agua, opción de inicial de S/10,000',
    precio: 'S/28,000',
    lat: -16.404219032472394,
    lng: -71.4733114226225,
  },
  {
    titulo: 'Pajonal - Mollebaya',
    metros: '100 m²',
    detalles:
      'Separar con S/300. Descuento de S/4,000 por pago al contado o financiamiento de 50% en 6 meses.',
    precio: 'S/47,000',
    lat: -16.50455226529705,
    lng: -71.50263092603528,
  },
  {
    titulo: 'Proyecto - Mollebaya',
    metros: '200 m²',
    detalles:
      'Proyecto de 3 etapas: 1ra etapa con luz y agua, 2da etapa con solo luz (agua en proceso), 3ra etapa sin servicios aún. Cada etapa tiene su precio siendo la 3ra la más económica.',
    precio: 'S/45,000 / S/35,000 / S/25,000',
    lat: -16.50240932524987,
    lng: -71.43971009079037,
  },
]

function mapsEmbedUrl(lat: number, lng: number): string {
  return `https://maps.google.com/maps?q=${lat},${lng}&t=&z=15&ie=UTF8&iwloc=&output=embed`
}

function mapsExternalUrl(lat: number, lng: number): string {
  return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`
}
</script>

<template>
  <div class="min-h-screen bg-background pt-24 pb-16">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Header -->
      <div class="mb-16">
        <div class="flex items-center gap-3 mb-6">
          <span class="text-gold font-mono text-sm">Terrenos</span>
          <span class="text-muted-foreground/40">·</span>
          <span class="text-sm text-muted-foreground">Disponibles</span>
        </div>
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight">
          Busqueda de
          <span class="gradient-text italic font-normal">terrenos</span>.
        </h1>
        <p class="mt-4 text-muted-foreground max-w-xl leading-relaxed">
          ...
        </p>
      </div>

      <!-- Terrenos Grid -->
      <div class="space-y-8">
        <article v-for="terreno in terrenos" :key="terreno.titulo"
          class="group rounded-2xl bg-surface border border-border overflow-hidden transition-colors hover:border-border/60">
          <div class="grid md:grid-cols-2">
            <!-- Info -->
            <div class="p-8 md:p-10 flex flex-col justify-between">
              <div>
                <div class="flex items-center gap-3 mb-4">
                  <div
                    class="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gold/10 border border-gold/20 text-gold">
                    <MapPin :size="18" />
                  </div>
                  <h2 class="text-xl md:text-2xl font-semibold tracking-tight">
                    {{ terreno.titulo }}
                  </h2>
                </div>

                <div
                  class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gold/10 text-gold text-xs font-medium border border-gold/20 mb-5">
                  <Maximize2 :size="12" />
                  {{ terreno.metros }}
                </div>

                <p class="text-muted-foreground leading-relaxed">
                  {{ terreno.detalles }}
                </p>
              </div>

              <div class="mt-8 flex items-end justify-between gap-4 flex-wrap">
                <div>
                  <span class="text-xs text-muted-foreground uppercase tracking-widest">
                    Precio
                  </span>
                  <p class="mt-1 text-2xl md:text-3xl font-semibold text-gold">
                    {{ terreno.precio }}
                  </p>
                </div>

                <a :href="mapsExternalUrl(terreno.lat, terreno.lng)" target="_blank" rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-foreground text-background hover:bg-foreground/90 transition-colors">
                  Ver en Maps
                  <ArrowUpRight :size="14" />
                </a>
              </div>
            </div>

            <!-- Map -->
            <div class="relative min-h-[300px] md:min-h-0 bg-surface-elevated">
              <iframe :src="mapsEmbedUrl(terreno.lat, terreno.lng)" width="100%" height="100%"
                style="border: 0; position: absolute; inset: 0" allowfullscreen loading="lazy"
                referrerpolicy="no-referrer-when-downgrade" :title="`Mapa de ${terreno.titulo}`" />
            </div>
          </div>
        </article>
      </div>

      <!-- Footer note
      <p class="mt-12 text-center text-sm text-muted-foreground">
        Interesado en alguno?&nbsp;
        <router-link to="/" class="text-gold hover:underline">
          Contactame
        </router-link>
      </p> -->
    </div>
  </div>
</template>
