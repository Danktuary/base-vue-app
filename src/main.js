import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import './registerServiceWorker.js'

createApp(App).use(router).mount('#app')
