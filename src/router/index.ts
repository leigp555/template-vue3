import { createRouter, createWebHashHistory } from 'vue-router'
import Enter from '@/views/Enter.vue'
import NotFound from '@/views/404.vue'
import NodePage from '@/views/NodePage.vue'
import ToolPage from '@/views/ToolPage.vue'
import UserInfo from '@/views/UserInfo.vue'
import General from '@/views/General.vue'
// 路由规则
const routes = [
  {
    path: '/',
    component: Enter
  },
  {
    path: '/nodePage',
    component: NodePage
  },
  {
    path: '/tool',
    component: ToolPage
  },
  {
    path: '/userInfo',
    component: UserInfo
  },
  {
    path: '/general',
    component: General
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
