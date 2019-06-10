// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueAxios from 'vue-axios'
import VueAuth from '@websanova/vue-auth'
import index from './backend/axios/index'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueResource from 'vue-resource'
import auth from './Auth.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

// Vue.use(VueRouter);
Vue.use(VueAxios, index)
// axios.defaults.baseURL = 'http://localhost:2020/api';
Vue.router = router

Vue.use(require('@websanova/vue-auth'), {
  auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
  http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
  router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js')
})

Vue.use(VueResource)

Vue.component('example-component', require('./components/Home.vue'))

App.router = Vue.router
Vue.use(VueAuth, auth)

new Vue(App).$mount('#app')
