<script setup lang="ts">
import { computed, reactive, ref, watch } from 'vue'
import { X, Send, CheckCircle2 as CircleCheck } from '@lucide/vue'

const props = defineProps<{
  open: boolean
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

type FormState = {
  name: string
  email: string
  subject: string
  message: string
}

const subjects = [
  'Proyecto nuevo',
  'Advisory / consultoría',
  'Colaboración',
  'Otro',
] as const

const form = reactive<FormState>({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const status = ref<'idle' | 'sending' | 'sent'>('idle')
const errors = reactive<{
  name?: string
  email?: string
  subject?: string
  message?: string
}>({})

const isValid = computed(
  () =>
    !!form.name.trim() &&
    /.+@.+\..+/.test(form.email) &&
    !!form.subject &&
    !!form.message.trim()
)

function reset() {
  form.name = ''
  form.email = ''
  form.subject = ''
  form.message = ''
  errors.name = undefined
  errors.email = undefined
  errors.subject = undefined
  errors.message = undefined
  status.value = 'idle'
}

function close() {
  emit('close')
}

function validate(): boolean {
  errors.name = form.name.trim() ? undefined : 'Ingresa tu nombre'
  errors.email = /.+@.+\..+/.test(form.email) ? undefined : 'Email inválido'
  errors.subject = form.subject ? undefined : 'Elige un asunto'
  errors.message = form.message.trim() ? undefined : 'Cuéntame algo'
  return !errors.name && !errors.email && !errors.subject && !errors.message
}

function handleSubmit() {
  if (!validate()) return

  status.value = 'sending'

  // Build a mailto link with the form contents and open it.
  const subject = `[${form.subject}] ${form.name}`
  const body = `Nombre: ${form.name}\nEmail: ${form.email}\nAsunto: ${form.subject}\n\n${form.message}`
  const href = `mailto:daniel@example.com?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`

  // Open the mail client, then flip to the success state.
  window.location.href = href
  status.value = 'sent'
}

// Body scroll lock + escape-to-close.
watch(
  () => props.open,
  (open) => {
    if (typeof document === 'undefined') return
    document.body.classList.toggle('modal-open', open)
    if (open) reset()
  }
)

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape' && props.open) close()
}

if (typeof window !== 'undefined') {
  window.addEventListener('keydown', onKeydown)
}
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="open"
        class="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
      >
        <!-- Backdrop -->
        <div
          class="absolute inset-0 bg-primary/40 backdrop-blur-sm"
          @click="close"
        />

        <!-- Card -->
        <div
          class="relative w-full max-w-lg bg-surface border border-surface-container rounded-xl shadow-[0_24px_48px_-12px_rgba(15,30,54,0.18)] overflow-hidden"
        >
          <!-- Close button -->
          <button
            type="button"
            class="absolute top-4 right-4 inline-flex items-center justify-center w-9 h-9 rounded-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors"
            aria-label="Cerrar"
            @click="close"
          >
            <X :size="18" />
          </button>

          <!-- Content -->
          <div class="p-6 sm:p-8">
            <template v-if="status !== 'sent'">
              <!-- Header -->
              <div class="flex items-center gap-2 mb-1">
                <span
                  class="font-mono text-[11px] uppercase tracking-widest text-secondary"
                  >Canal Directo</span
                >
                <span class="text-on-surface-variant/40">·</span>
                <span
                  class="text-[11px] font-bold uppercase tracking-[0.12em] text-on-surface-variant"
                  >Formulario</span
                >
              </div>
              <h2
                id="contact-modal-title"
                class="text-[20px] font-medium text-on-surface tracking-[-0.01em] leading-[1.25]"
              >
                Iniciar Conversación con Daniel Nahun
              </h2>
              <p class="mt-1 text-[13.5px] text-on-surface-variant">
                Cuéntame qué necesitas. Respondo en menos de 24 horas.
              </p>

              <form class="mt-6 space-y-4" @submit.prevent="handleSubmit">
                <div>
                  <label
                    for="cm-name"
                    class="block text-[11px] font-bold uppercase tracking-[0.12em] text-on-surface-variant mb-1.5"
                    >Nombre</label
                  >
                  <input
                    id="cm-name"
                    v-model="form.name"
                    type="text"
                    autocomplete="name"
                    class="w-full px-3 py-2.5 bg-background border border-border rounded-md text-[14px] text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/40 transition-colors"
                    placeholder="Tu nombre"
                  />
                  <p v-if="errors.name" class="mt-1 text-xs text-red-600">
                    {{ errors.name }}
                  </p>
                </div>

                <div>
                  <label
                    for="cm-email"
                    class="block text-[11px] font-bold uppercase tracking-[0.12em] text-on-surface-variant mb-1.5"
                    >Email</label
                  >
                  <input
                    id="cm-email"
                    v-model="form.email"
                    type="email"
                    autocomplete="email"
                    class="w-full px-3 py-2.5 bg-background border border-border rounded-md text-[14px] text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/40 transition-colors"
                    placeholder="tu@email.com"
                  />
                  <p v-if="errors.email" class="mt-1 text-xs text-red-600">
                    {{ errors.email }}
                  </p>
                </div>

                <div>
                  <label
                    for="cm-subject"
                    class="block text-[11px] font-bold uppercase tracking-[0.12em] text-on-surface-variant mb-1.5"
                    >Asunto</label
                  >
                  <select
                    id="cm-subject"
                    v-model="form.subject"
                    class="w-full px-3 py-2.5 bg-background border border-border rounded-md text-[14px] text-on-surface focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/40 transition-colors"
                  >
                    <option value="" disabled>Selecciona un asunto</option>
                    <option
                      v-for="opt in subjects"
                      :key="opt"
                      :value="opt"
                    >
                      {{ opt }}
                    </option>
                  </select>
                  <p v-if="errors.subject" class="mt-1 text-xs text-red-600">
                    {{ errors.subject }}
                  </p>
                </div>

                <div>
                  <label
                    for="cm-message"
                    class="block text-[11px] font-bold uppercase tracking-[0.12em] text-on-surface-variant mb-1.5"
                    >Mensaje</label
                  >
                  <textarea
                    id="cm-message"
                    v-model="form.message"
                    rows="4"
                    class="w-full px-3 py-2.5 bg-background border border-border rounded-md text-[14px] text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/40 transition-colors resize-none"
                    placeholder="¿Qué quieres construir?"
                  />
                  <p v-if="errors.message" class="mt-1 text-xs text-red-600">
                    {{ errors.message }}
                  </p>
                </div>

                <button
                  type="submit"
                  :disabled="status === 'sending'"
                  class="group w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-primary text-white font-medium text-sm hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed transition-all"
                >
                  <Send :size="16" />
                  {{ status === 'sending' ? 'Enviando…' : 'Enviar mensaje' }}
                </button>
              </form>
            </template>

            <template v-else>
              <div class="py-8 text-center">
                <div
                  class="mx-auto inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary/15 text-secondary"
                >
                  <CircleCheck :size="28" />
                </div>
                <h2
                  class="mt-5 text-[20px] font-medium text-on-surface tracking-[-0.01em]"
                >
                  Listo, mensaje enviado
                </h2>
                <p class="mt-2 text-[14px] text-on-surface-variant max-w-sm mx-auto">
                  Se abrió tu cliente de correo. Si no se abrió automáticamente,
                  escríbeme directo a
                  <a
                    href="mailto:daniel@example.com"
                    class="text-secondary hover:underline"
                    >daniel@example.com</a
                  >.
                </p>
                <button
                  type="button"
                  class="mt-6 px-4 py-2 rounded-md border border-border text-[14px] text-on-surface hover:bg-surface-container transition-colors"
                  @click="close"
                >
                  Cerrar
                </button>
              </div>
            </template>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
