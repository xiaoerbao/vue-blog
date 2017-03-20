// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.config.productionTip = false
Vue.prototype.serverHost = 'http://localhost:8081'

Vue.filter('time', function (value) {
  return new Date(parseInt(value)).toLocaleString().replace(/年|月/g, '-').replace(/日/g, ' ')
})

import './assets/bootstrap/css/bootstrap.min.css'
import './assets/css/common.css'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
