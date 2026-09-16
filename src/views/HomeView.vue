<script setup lang="ts">
import { inject } from 'vue'
import { Bot, Server, Cloud, ArrowUpRight } from '@lucide/vue'

const openContact = inject<() => void>('openContact', () => {})

const year = new Date().getFullYear()

const roles = ['Python Developer', 'Fullstack Architect', 'AI Engineer']

interface Experience {
  period: string
  company: string
  role: string
  description: string
}

const experiences: Experience[] = [
  {
    period: 'Jun 2025 — Present',
    company: 'Fractalia',
    role: 'AI Engineer',
    description:
      'Diseño de sistemas agentic en producción: orquestación con LangGraph, LangChain y MCP. Servicios backend async sobre FastAPI en AWS.',
  },
  {
    period: 'Feb 2022 — May 2025',
    company: 'Cableclub',
    role: 'Python Developer → Fullstack Architect',
    description:
      'Del ETL inicial con Selenium a una intranet modular en FastAPI + Vue.js. RPA biométrico, integraciones Zoho y plataformas internas para técnicos en campo.',
  },
]

interface Competency {
  icon: typeof Bot
  title: string
  description: string
  tags: string[]
}

const competencies: Competency[] = [
  {
    icon: Bot,
    title: 'AI & Agentic Systems',
    description:
      'Orquestación determinista con LangGraph, LangChain y MCP. Tool-calling, memory layers y state machines para flujos multi-step.',
    tags: ['LangGraph', 'LangChain', 'MCP'],
  },
  {
    icon: Server,
    title: 'Python Backend & Async',
    description:
      'Microservicios asíncronos en FastAPI con AsyncIO, validación Pydantic v2 y observabilidad con OpenTelemetry.',
    tags: ['FastAPI', 'AsyncIO', 'Pydantic', 'PostgreSQL'],
  },
  {
    icon: Cloud,
    title: 'Fullstack & Cloud',
    description:
      'Frontends reactivos con React y Vue 3 sobre TypeScript. Containerización Docker y cloud-native en AWS.',
    tags: ['React', 'Vue 3', 'AWS', 'Docker', 'TypeScript'],
  },
]
</script>

<template>
  <!-- Single-view layout: exactly viewport - navbar. No page scroll. -->
  <div
    class="h-[calc(100vh-4rem)] flex flex-col overflow-hidden bg-background text-foreground"
  >
    <!-- ============================================================== -->
    <!-- HERO — editorial status line + headline + role pills            -->
    <!-- ============================================================== -->
    <section
      id="top"
      class="border-b border-surface-container bg-background shrink-0"
    >
      <div class="w-full px-4 sm:px-6 lg:px-8 xl:px-10 pt-4 pb-4">
        <div
          class="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-secondary"
        >
          <span>Senior Portfolio Overview</span>
          <span class="text-on-surface-variant/40">·</span>
          <span>Concurrencia, Grafos Cíclicos &amp; Nube</span>
        </div>
        <h1
          class="mt-2 text-[22px] sm:text-[28px] md:text-[34px] lg:text-[40px] leading-[1.1] tracking-[-0.02em] font-normal text-on-surface"
        >
          Daniel Nahun <span class="text-secondary italic font-normal">— AI Engineer &amp; Fullstack Architect</span>
        </h1>
        <p class="mt-2 text-[13px] sm:text-[14px] md:text-[15px] text-on-surface-variant max-w-4xl leading-snug">
          Python Developer · Fullstack Architect · AI Engineer. Especializado en microservicios asíncronos en <span class="text-primary font-medium">FastAPI</span>, arquitectura en <span class="text-primary font-medium">AWS &amp; Docker</span>, y orquestación determinista de agentes con <span class="text-primary font-medium">LangGraph, LangChain y Model Context Protocol (MCP)</span>.
        </p>
      </div>
    </section>

    <!-- ============================================================== -->
    <!-- MAIN — 2-column grid: Trayectoria | Stack + CTA                 -->
    <!-- ============================================================== -->
    <section class="flex-1 min-h-0 overflow-hidden">
      <div class="w-full h-full px-4 sm:px-6 lg:px-8 xl:px-10 py-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 h-full">
          <!-- LEFT COLUMN: Trayectoria Profesional -->
          <div class="flex flex-col h-full min-h-0">
            <div class="flex items-center gap-2 mb-3 shrink-0">
              <span class="font-mono text-[12px] tracking-[0.02em] text-secondary"
                >01</span
              >
              <span class="text-on-surface-variant/40">·</span>
              <span
                class="text-[11px] font-bold uppercase tracking-[0.12em] text-on-surface-variant"
                >Trayectoria Profesional</span
              >
            </div>

            <div
              class="flex-1 min-h-0 bg-surface border border-surface-container rounded-xl p-5 md:p-6 overflow-auto shadow-sm"
            >
              <ol class="timeline">
                <li v-for="exp in experiences" :key="exp.company">
                  <span class="timeline-dot" aria-hidden="true" />
                  <div
                    class="font-mono text-[11px] tracking-[0.02em] text-secondary"
                  >
                    {{ exp.period }}
                  </div>
                  <h3
                    class="mt-1 text-[18px] font-medium text-on-surface tracking-[-0.01em]"
                  >
                    {{ exp.company }}
                  </h3>
                  <div
                    class="text-[13px] text-on-surface font-medium mt-0.5 leading-[1.4]"
                  >
                    {{ exp.role }}
                  </div>
                  <p
                    class="mt-1.5 text-[13.5px] text-on-surface-variant leading-[20px]"
                  >
                    {{ exp.description }}
                  </p>
                </li>
              </ol>

              <div
                class="mt-5 pt-4 border-t border-border flex items-center justify-between gap-3 text-[11px] font-mono tracking-[0.02em] text-on-surface-variant"
              >
                <span>3+ Años</span>
                <span class="text-on-surface-variant/40">·</span>
                <span>Exp. Continua</span>
                <span class="text-on-surface-variant/40">·</span>
                <span>Lima, Perú</span>
              </div>
            </div>
          </div>

          <!-- RIGHT COLUMN: Core Stack & Competencias + CTA -->
          <div class="flex flex-col h-full min-h-0 gap-3">
            <div class="flex items-center gap-2 shrink-0">
              <span class="font-mono text-[12px] tracking-[0.02em] text-secondary"
                >02</span
              >
              <span class="text-on-surface-variant/40">·</span>
              <span
                class="text-[11px] font-bold uppercase tracking-[0.12em] text-on-surface-variant"
                >Core Stack &amp; Competencias</span
              >
            </div>

            <div class="flex-1 min-h-0 overflow-auto space-y-3 pr-1">
              <article
                v-for="comp in competencies"
                :key="comp.title"
                class="bg-surface border border-surface-container rounded-xl p-4 md:p-5 transition-all hover:border-secondary/40 hover:shadow-[0_4px_24px_-8px_rgba(15,30,54,0.08)] shadow-sm"
              >
                <div class="flex items-start gap-3">
                  <div
                    class="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-surface-container border border-surface-container text-primary shrink-0"
                  >
                    <component :is="comp.icon" :size="18" />
                  </div>
                  <div class="flex-1 min-w-0">
                    <h3
                      class="text-[15px] font-medium text-on-surface tracking-[-0.01em] leading-[1.25]"
                    >
                      {{ comp.title }}
                    </h3>
                    <p
                      class="mt-1 text-[12.5px] leading-[18px] text-on-surface-variant"
                    >
                      {{ comp.description }}
                    </p>
                    <div class="mt-2.5 flex flex-wrap gap-1.5">
                      <span
                        v-for="tag in comp.tags"
                        :key="tag"
                        class="px-2 py-0.5 rounded bg-surface-container text-primary font-mono text-[10.5px] tracking-[0.02em] font-medium"
                      >
                        {{ tag }}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            <!-- CTA card -->
            <div
              class="bg-primary text-surface rounded-xl p-5 md:p-6 shrink-0 shadow-[0_8px_24px_-8px_rgba(15,30,54,0.25)]"
            >
              <div
                class="flex items-center justify-between gap-4 flex-wrap md:flex-nowrap"
              >
                <div class="flex-1 min-w-[200px]">
                  <h3
                    class="text-[16px] md:text-[18px] font-medium tracking-[-0.01em] leading-[1.3]"
                  >
                    ¿Listo para escalar arquitecturas y sistemas agentic?
                  </h3>
                  <p
                    class="mt-1 text-[12.5px] text-white/70 leading-[18px]"
                  >
                    Respuesta en menos de 24 horas.
                  </p>
                </div>
                <button
                  type="button"
                  class="group inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-secondary text-primary font-medium text-[13px] hover:opacity-90 transition-all whitespace-nowrap"
                  @click="openContact"
                >
                  Contactar
                  <ArrowUpRight
                    :size="14"
                    class="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================================== -->
    <!-- FOOTER — author + copyright                                    -->
    <!-- ============================================================== -->
    <footer
      class="border-t border-surface-container bg-background shrink-0"
    >
      <div
        class="w-full px-4 sm:px-6 lg:px-8 xl:px-10 py-3 flex items-center justify-between gap-4 flex-wrap"
      >
        <div class="flex items-center gap-2 text-[12px] font-medium">
          <span
            class="inline-block w-1.5 h-1.5 rounded-full bg-secondary"
            aria-hidden="true"
          />
          <span class="text-on-surface">Daniel Nahun — AI Engineering</span>
        </div>
        <p class="text-[11px] font-mono tracking-[0.02em] text-on-surface-variant">
          © {{ year }} · Portfolio Overview
        </p>
      </div>
    </footer>
  </div>
</template>
