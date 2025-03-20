import { createApp } from 'vue'
import './style.css'
import 'primeicons/primeicons.css'
import ToastService from 'primevue/toastservice';
import App from './App.vue'
import router from './router'
import store from './store'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura';
import { useReCaptcha, VueReCaptcha } from 'vue-recaptcha-v3';
import { createHead } from '@vueuse/head';

const app = createApp(App);
const head = createHead();

app.use(PrimeVue,
    {
        theme: {
        preset: Aura,
        options: {
            prefix: 'p',
            darkModeSelector: false || 'none',
            cssLayer: false
        }
        // unstyled:true
        }
    }
);
app.use(router);
app.use(store);
app.use(ToastService);
app.use(head);
app.use(VueReCaptcha, { siteKey: import.meta.env.VITE_APP_TOKEN_GOOGLE_RECAPTCHA, loaderOptions: { autoHideBadge: false, useReCaptchaNet: true } })

app.mount('#app');
