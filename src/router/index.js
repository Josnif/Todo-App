import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue';
import NotFound from "../components/404.vue";
import addTask from '../views/Mobile/addTask'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
    
  },
  {
    path: '/add-task',
    name: 'AddTask',
    component: addTask
    
  },
  {
    path: '/*',
    name: '404',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
