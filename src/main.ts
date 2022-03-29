import { createApp } from 'vue'
import App from '@/App'
import '@/css/reset.scss'
import '@/css/global.scss'
import '@/utils/icon'
import router from '@/router/index'
import { key, store } from '@/store'

const app = createApp(App)
app.use(router)
app.use(store, key)
app.mount('#app')
