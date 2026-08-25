<script setup lang="ts">
import { ArrowUpRight } from '@lucide/vue'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-border">
    <div class="max-w-6xl mx-auto px-6 py-10">
      <div
        class="flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
      >
        <div class="space-y-1">
          <div class="flex items-center gap-1.5 text-sm font-semibold">
            <span
              class="inline-block w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_8px_var(--color-gold)]"
              aria-hidden="true"
            />
            <span>Daniel</span>
            <span class="text-gold">.</span>
          </div>
          <p class="text-xs text-muted-foreground">
            © {{ year }} Daniel Calcina · Lima, Perú
          </p>
        </div>

        <div class="flex items-center gap-6">
          <a
            href="#top"
            class="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            Volver arriba
            <ArrowUpRight :size="14" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
