import '@/assets/css/app.css'
import '@/assets/css/font-awesome.min.css'

import '@/assets/js/app.js'
import '@/assets/js/font-awesome.min.js'


import { createApp } from 'vue'
import { createPinia } from 'pinia'

import i18n from '@/i18n'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
