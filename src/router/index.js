import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/home/index.vue'
import detail from '../views/detail/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },{
  	path:'/detail',
  	name:'detail',
  	component:detail
  }
]

const router = new VueRouter({
  mode:'hash',
  // mode:'history',
  // base: '/',
  routes
})

export default router
