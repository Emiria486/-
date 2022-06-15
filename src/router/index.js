import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '@/store/index.js'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/itemMusic',
    name: 'ItemMusic',
    component: () => import(/* webpackChunkName: "itemMusic" */ '../views/ItemMusic.vue')
  },
  {
    path: '/searchMusic',
    name: 'searchMusic',
    component: () => import(/* webpackChunkName: "searchMusic" */ '../views/searchMusic.vue')
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
  },
  {
    path: '/InfoUser',
    name: 'InfoUser',
    beforeEnter:(to, from, next)=> {
      if(store.state.isLogin||store.state.token||localStorage.getItem('token')){
        next()
      }
      else{
        next('/Login')
      }
    },
    component: () => import(/* webpackChunkName: "InfoUser" */ '../views/InfoUser.vue')
  },
  {
    path: '/DailySong',
    name: 'DailySong',
    component: () => import(/* webpackChunkName: "DailySong" */ '../components/item/DailySong')
  },
  {
    path: '/MVDetail',
    name: 'MVDetail',
    component: () => import(/* webpackChunkName: "MVDetail" */ '../components/item/MVDetail')
  },
  {
    path: '/mikuTop',
    name: 'mikuTop',
    component: () => import(/* webpackChunkName: "mikuTop" */ '../components/item/mikuTop')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to,from)=>{//在进入某些特殊页面的时候不显示FooterMusic
  if(to.path=='/Login'||to.path=='/MVDetail'||to.path=='/mikuTop'){
    store.state.isFooterMusic=false
  }
  else{
    store.state.isFooterMusic=true
  }
})
export default router
