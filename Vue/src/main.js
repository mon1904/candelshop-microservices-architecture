// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
// import VeeValidate from 'vee-validate';
//
// Vue.use(VeeValidate);

import Simplert from 'vue2-simplert-plugin'
Vue.use(Simplert)

Vue.use(VueResource)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  template: '<App/>',
  components: { App }
})
