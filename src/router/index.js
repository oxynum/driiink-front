import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/HomeView.vue'
import PDPView from '../pages/PDPView.vue'
import CartView from '../pages/CartView.vue'
import PaymentView from '../pages/PaymentView.vue'
import OrderView from '../pages/OrderView.vue'

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
  {
    path: '/bar/:id/payment',
    name: 'Payment',
    component: PaymentView,
    props: true
  },
  {
    path: '/bar/:id/order',
    name: 'Order',
    component: OrderView,
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
