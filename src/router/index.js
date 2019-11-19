import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from 'pages/home/Home'
import Community from 'pages/community/Community'
import ShoppingCart from 'pages/shoppingcart/ShoppingCart'
import Profile from 'pages/profile/Profile'
import ProductDetail from 'pages/detail/ProductDetail'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/community',
    name: 'community',
    component: Community
  },
  {
    path: '/shoppingcart',
    name: 'shoppingcart',
    component: ShoppingCart
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/productdetail',
    name: 'productdetail',
    component: ProductDetail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router