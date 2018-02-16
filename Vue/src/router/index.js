import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import candle from '@/components/candle'
import addmore from '@/components/addmore'
import cart from '@/components/cart'
import deleteItem from '@/components/deleteItem'
import checkout from '@/components/checkout'
import login from '@/components/login'
import sucs from '@/components/sucs'

Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/candle',
      name: 'candle',
      component: candle
    },
    {
      path: '/addmore',
      name: 'addmore',
      component: addmore
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
      path: '/deleteItem',
      name: 'deleteItem',
      component: deleteItem
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: checkout
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/sucs',
      name: 'sucs',
      component: sucs
    },

  ]
})

