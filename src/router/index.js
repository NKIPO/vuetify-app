import { createRouter, createWebHistory } from 'vue-router'
import MainPage from "@/pages/MainPage";
const routes = [
  {
    path: '/',
    name: 'main',
    component: MainPage
  },
  {
    path: '/photo',
    name: 'photo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../pages/PhotoPage')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
