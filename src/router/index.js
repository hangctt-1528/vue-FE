import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import Register from '@/components/Register.vue'
import Login from '@/components/Login.vue'
import Test from '@/components/test.vue'
import CreateItem from '@/components/CreateItem.vue'
import Index from '@/components/IndexComponent.vue'
import Edit from '@/components/EditComponent.vue'
import store from '../store'

Vue.use(Router)

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next()
    return
  }
  next('/')
}

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next()
    return
  }
  next('/login')
}

export default new Router({
  mode: 'history',
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
        auth: true
      }
    }, {
      path: '/create',
      name: 'create',
      component: CreateItem,
      meta: {
        auth: true
      }
    }, {
      path: '/index',
      name: 'index',
      component: Index,
      meta: {
        auth: true
      }
    }, {
      path: '/edit/:id',
      name: 'edit',
      component: Edit,
      meta: {
        auth: true
      }
    }
  ]
})
