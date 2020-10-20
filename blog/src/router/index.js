import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      title:'首页'
    }
  },
  {
    path: '/category/:id',
    name: 'Category',
    component: () => import('../views/Category.vue'),
    meta:{
      title:'分类页'
    }
  },
  {
    path: '/post/:id',
    name: 'post',
    component: () => import('../views/Post.vue'),
    meta:{
      title:'文章页'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
