import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/HomeView.vue'
import PDPView from '../pages/PDPView.vue'
import CartView from '../pages/CartView.vue'

const routes = [
  {
    path: '/bar/:id',
    name: 'PLP',
    component: HomeView,
    props: true
  },
  {
    path: '/bar/:id/product/:productID',
    name: 'PDP',
    component: PDPView,
    props: true
  },
  {
    path: '/bar/:id/cart',
    name: 'Cart',
    component: CartView,
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
