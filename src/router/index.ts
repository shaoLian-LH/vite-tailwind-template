import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '@/views/HelloWorld.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: HelloWorld
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export { router }
 