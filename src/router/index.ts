import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'

// 路由规则
const routes = [
  {
    path: '/',
    component: Home
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
