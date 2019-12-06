import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import cart from './modules/cart'
import order from './modules/order'

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    cart,
    order
  }
})