<script setup lang="ts">
import {
  ArrowUpRight,
  Bot,
  CodeXml as Code2,
  Database,
  Globe,
  Server,
  Workflow,
  CircleCheck as CheckCircle2,
} from '@lucide/vue'

interface Project {
  category: string
  title: string
  description: string
  tags: string[]
  icon: typeof Code2
  featured?: boolean
}

const projects: Project[] = [
  {
    category: 'ETL · Scraping',
    title: 'ETL & Webscraping a ERP sin endpoints',
    description:
      'Extracción automatizada con Selenium hacia MySQL desde un ERP sin API pública, alimentando reportes y módulos internos.',
    tags: ['Python', 'Selenium', 'MySQL'],
    icon: Bot,
  },
  {
    category: 'Fullstack · Freelance',
    title: 'Portales de Gestión de Personal',
    description:
      'Plataformas fullstack para vendedores y técnicos en campo: registro en vivo, asignaciones y seguimiento operacional.',
    tags: ['FastAPI', 'Vue.js', 'MySQL'],
    icon: Globe,
  },
  {
    category: 'API',
    title: 'Endpoints sobre el ETL',
    description:
      'Capa de API que expone la información consolidada del ETL para BI, intranet y consumo interno con control de acceso.',
    tags: ['FastAPI', 'REST', 'JWT'],
    icon: Code2,
  },
  {
    category: 'RPA',
    title: 'RPA Sistema Biométrico (Lackey)',
    description:
      'Bot de descarga y normalización de reportes biométricos, eliminando trabajo manual recurrente.',
    tags: ['Python', 'Selenium', 'Cron'],
    icon: Workflow,
  },
  {
    category: 'Automatización',
    title: 'Suite de automatizaciones empresariales',
    description:
      'Actualización de deuda, consulta unificada multi-plataforma, reportes para BI, avisos de cobranza SMS/Email, validación de comprobantes SUNAT/ERP y onboarding de clientes.',
    tags: ['Python', 'SMTP', 'SUNAT', 'BI'],
    icon: Database,
  },
  {
    category: 'Plataforma',
    title: 'Intranet corporativa modular',
    description:
      'Sistema interno con módulos comerciales, finanzas y operaciones: RBAC granular, gestor de tarifas conectado a landings, hoja de ruta de OS, atención técnica en tiempo real y reportes .xlsx.',
    tags: ['FastAPI', 'Vue.js', 'RBAC'],
    icon: Server,
    featured: true,
  },
]

const featuredProject = projects.find((p) => p.featured)
const regularProjects = projects.filter((p) => !p.featured)

interface IntranetModule {
  title: string
  description: string
  items: string[]
}

const intranetModules: IntranetModule[] = [
  {
    title: 'Comercial',
    description: 'Gestión de leads, cotizaciones y seguimiento de clientes.',
    items: [
      'Pipeline comercial con etapas configurables',
      'Generador de cotizaciones PDF',
      'Integración con landings',
      'Dashboard de conversión',
    ],
  },
  {
    title: 'Finanzas',
    description: 'Cobranzas, facturación y reportería financiera.',
    items: [
      'Actualización automática de deuda',
      'Avisos SMS/Email multicanal',
      'Validación SUNAT y ERP',
      'Reportes .xlsx exportables',
    ],
  },
  {
    title: 'Operaciones',
    description: 'Hojas de ruta, técnicos en campo y OS en vivo.',
    items: [
      'Asignación de técnicos en tiempo real',
      'Hoja de ruta por técnico',
      'Atención técnica registrada',
      'Estados de OS configurables',
    ],
  },
  {
    title: 'Integraciones',
    description: 'Conectores con ERPs, biométricos y servicios externos.',
    items: [
      'ETL continuo desde ERP sin API',
      'Webhook de biométrico (Lackey)',
      'Sync con Zoho Suite',
      'API REST interna con RBAC',
    ],
  },
]
</script>

<template>
  <section id="proyectos" class="relative py-24 md:py-32">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Section header -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-16">
        <div class="md:col-span-4">
          <div class="flex items-center gap-3">
            <span class="text-gold font-mono text-sm">03</span>
            <span class="text-muted-foreground/40">·</span>
            <span class="text-sm text-muted-foreground">Proyectos</span>
          </div>
        </div>
        <div class="md:col-span-7 md:col-start-6">
          <h2
            class="text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.1] tracking-tight"
          >
            Sistemas reales, en
            <span class="gradient-text italic font-normal">operación</span>.
          </h2>
        </div>
      </div>

      <!-- Featured project (Intranet) -->
      <article
        v-if="featuredProject"
        class="group relative mb-6 p-8 md:p-10 rounded-2xl bg-gradient-to-br from-surface-elevated to-surface border border-border overflow-hidden"
      >
        <div
          class="absolute -top-px -right-px w-32 h-32 bg-gold/5 blur-3xl pointer-events-none"
        />

        <div class="relative flex items-start justify-between gap-6 flex-wrap">
          <div class="flex-1 min-w-[240px]">
            <span
              class="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-gold/10 text-gold text-xs font-medium border border-gold/20"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-gold" />
              Caso destacado
            </span>

            <h3 class="mt-5 text-2xl md:text-3xl font-semibold tracking-tight">
              {{ featuredProject.title }}
            </h3>
            <p class="mt-3 text-muted-foreground max-w-2xl leading-relaxed">
              {{ featuredProject.description }}
            </p>
            <div class="mt-6 flex flex-wrap gap-2">
              <span
                v-for="tag in featuredProject.tags"
                :key="tag"
                class="px-2.5 py-1 text-xs font-medium text-foreground/80 bg-surface border border-border rounded-md"
              >
                {{ tag }}
              </span>
            </div>
          </div>

          <div
            class="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gold/10 border border-gold/20 text-gold"
          >
            <component :is="featuredProject.icon" :size="24" />
          </div>
        </div>
      </article>

      <!-- 2-col grid of regular projects -->
      <div class="grid md:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden border border-border">
        <article
          v-for="project in regularProjects"
          :key="project.title"
          class="group bg-surface p-6 md:p-8 transition-colors hover:bg-surface-elevated"
        >
          <div class="flex items-start justify-between gap-4">
            <div
              class="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gold/10 border border-gold/20 text-gold"
            >
              <component :is="project.icon" :size="18" />
            </div>
            <ArrowUpRight
              :size="18"
              class="text-muted-foreground/40 transition-all group-hover:text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </div>

          <div class="mt-5 text-xs font-mono uppercase tracking-widest text-muted-foreground">
            {{ project.category }}
          </div>

          <h3
            class="mt-2 text-lg font-semibold text-foreground tracking-tight"
          >
            {{ project.title }}
          </h3>

          <p class="mt-2 text-sm text-muted-foreground leading-relaxed">
            {{ project.description }}
          </p>

          <div class="mt-5 flex flex-wrap gap-1.5">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="px-2 py-0.5 text-[11px] text-muted-foreground bg-background border border-border rounded"
            >
              {{ tag }}
            </span>
          </div>
        </article>
      </div>

      <!-- Intranet deep-dive -->
      <div class="mt-24">
        <div class="mb-10 flex items-center gap-3">
          <span class="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            Intranet · módulos
          </span>
          <span class="h-px flex-1 bg-border" />
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          <div
            v-for="module in intranetModules"
            :key="module.title"
            class="bg-surface p-6 md:p-7"
          >
            <h4 class="text-base font-semibold text-foreground">
              {{ module.title }}
            </h4>
            <p class="mt-2 text-sm text-muted-foreground leading-relaxed">
              {{ module.description }}
            </p>

            <ul class="mt-5 space-y-2.5">
              <li
                v-for="item in module.items"
                :key="item"
                class="flex items-start gap-2.5 text-sm text-foreground/80"
              >
                <CheckCircle2
                  :size="14"
                  class="mt-0.5 shrink-0 text-gold"
                />
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
