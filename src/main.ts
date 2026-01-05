import { createApp } from 'vue'
import App from './App.vue'
import i18n from './i18n'
import './style.css'

// 创建应用实例
const app = createApp(App)

// 使用国际化插件
app.use(i18n)

// 挂载应用
app.mount('#app')