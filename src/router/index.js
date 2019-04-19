import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import Register from '@/components/Register.vue'
import Login from '@/components/Login.vue'
import Test from '@/components/test.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        auth: false
      }
    }, {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        auth: false
      }
    }, {
      path: '/test',
      name: 'test',
      component: Test,
      meta: {
        auth: false
      }
    }]
})
