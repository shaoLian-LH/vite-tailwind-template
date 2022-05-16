import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import { router } from './router'
import Antd from 'ant-design-vue'
import './theme/index.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Antd)

app.mount('#app')
