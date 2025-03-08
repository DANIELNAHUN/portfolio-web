import { createApp } from 'vue'
import './style.css'
import 'primeicons/primeicons.css'
import App from './App.vue'
import router from './router'
import store from './store'
import PrimeVue from 'primevue/config'

const app = createApp(App);

app.use(PrimeVue,
    { unstyled:true }
);
app.use(router);
app.use(store);

app.mount('#app');
