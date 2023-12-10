
const routes = [
  /* NOTE 2023-12-08: 使用 () => import(...) 懒加载，即需要时才会被动态加载 */
  /* NOTE 2023-12-08: @ 是 /src 的化名 */

  { path: '/', component: () => import('@/pages/user/LoginPage.vue') },

  /* 管理员端 */
  { path: '/admin/home', component: () => import('@/pages/admin/HomePage.vue') },

  /* 教师端 */
  { path: '/teacher/home', component: () => import('@/pages/teacher/HomePage.vue') },

  /* 学生端 */
  { path: '/student/home', component: () => import('@/pages/student/HomePage.vue') },
]

import { createRouter, createWebHashHistory } from 'vue-router'
const router = createRouter({ history: createWebHashHistory(), routes })

export default router
