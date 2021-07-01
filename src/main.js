import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import { ElButton } from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css';

import '~/theme/index.css'

const app = createApp(App) // 生成 Vue 实例 app

app.use(router) // 引用路由实例
app.use(ElButton)

app.mount('#app') // 挂载到 #app
