
const routes = [
  { path: '/home',  component: () => import('../views/HomeView.vue')  },
  { path: '/about', component: () => import('../views/AboutView.vue') },

  /* NOTE 2023-12-08: 使用 () => import(...) 懒加载，即需要时才会被动态加载 */
  { path: '/', component: () => import('../views/LoginView.vue') },

  /* ... 在这里添加更多路由 */
]

import { createRouter, createWebHashHistory } from 'vue-router'
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
