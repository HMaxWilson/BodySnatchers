import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import InstagramFeed from "vue3-instagram-feed";
import "vue3-instagram-feed/dist/style.css";

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(InstagramFeed)
app.mount('#app')
