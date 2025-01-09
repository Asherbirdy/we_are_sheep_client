import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'
import createI18n from './i18n'
import 'uno.css'
import router from './router'
import './assets/scss/global.scss'
import './assets/scss/transition.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(createI18n)

app.mount('#app')
