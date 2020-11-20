import { createWebHashHistory, createRouter } from 'vue-router'
import IconPage from './pages/IconPage.vue'
import ButtonPage from './pages/ButtonPage.vue'
const history = createWebHashHistory()

export const router = createRouter({
  history: history,
  routes: [
    { path: '/icon', component: IconPage },
    { path: '/button', component: ButtonPage }
  ]
})