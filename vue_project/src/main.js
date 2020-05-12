import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'
import http from './http'
import waterfall from 'vue-waterfall2'
Vue.use(waterfall)
Vue.prototype.$http = http
import 'lib-flexible/flexible'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
