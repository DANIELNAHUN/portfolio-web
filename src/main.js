import { createApp } from 'vue'
import './style.css'
import 'primeicons/primeicons.css'
import ToastService from 'primevue/toastservice';
import App from './App.vue'
import router from './router'
import store from './store'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura';
import { useRecaptcha } from 'vue-recaptcha-v3';

const app = createApp(App);

app.use(PrimeVue,
    {
        theme: {
        preset: Aura,
        options: {
            prefix: 'p',
            ddarkModeSelector: false || 'none',
            cssLayer: false
        }
        // unstyled:true
        }
    }
);
app.use(router);
app.use(store);
app.use(ToastService);
app.use(useRecaptcha, {siteKey: import.meta.env.VITE_APP_TOKEN_GOOGLE_RECAPTCHA});

app.mount('#app');
