import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* INTRO 2023-12-08: 使用 Arco Design UI 库 https://arco.design/vue */
import ArcoVue from '@arco-design/web-vue'
import ArcoVueIcon from '@arco-design/web-vue/es/icon'
import '@arco-design/web-vue/dist/arco.css'

const app = createApp(App)
app.use(router)
app.use(ArcoVue)
app.use(ArcoVueIcon)
app.mount('#app')
