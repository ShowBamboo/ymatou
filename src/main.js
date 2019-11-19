import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import 'assets/css/reset.css'
import 'assets/css/animation.css'
import 'assets/js/zepto.min.js'
import 'assets/js/swiper.js'
import 'assets/css/swiper.css'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')