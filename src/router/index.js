import Vue from 'vue'
import VueRouter from 'vue-router'
import AppHome from '../views/AppHome.vue'
import AppTris from '../views/tris/AppTris.vue'
import AppTrisSp from '../views/tris/AppTrisSp.vue'
import AppTrisMp from '../views/tris/AppTrisMp.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: AppHome,
    meta: {
      title: 'Arcade Mania',
    }
  },
  {
    path: '/tris',
    name: 'tris',
    component: AppTris,
    meta: {
      title: 'Arcade Mania - Tris',
    }
  },
  {
    path: '/tris/singleplayer',
    name: 'tris singleplayer',
    component: AppTrisSp,
    meta: {
      title: 'Arcade Mania - Tris - SP',
    }
  },
  {
    path: '/tris/multiplayer',
    name: 'tris multiplayer',
    component: AppTrisMp,
    meta: {
      title: 'Arcade Mania - Tris - MP',
    }
  },
]

const router = new VueRouter({
  routes
})

export default router
