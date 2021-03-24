import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Feed from '../views/Feed.vue'
import newPost from '../views/post/new.vue'
import myNetwork from '../views/myNetwork.vue'
import myNetworkById from '../views/myNetwork.vue'
import Profile from '../views/Profile/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/feed',
    name: 'Feed',
    component: Feed
  },
  {
    path: '/post/new',
    name: 'newPost',
    component: newPost
  },
  {
    path: '/post/new',
    name: 'newPost',
    component: newPost
  },
  {
    path: '/mynetwork',
    name: 'myNetwork',
    component: myNetwork
  },
  {
    path: '/mynetwork/:id',
    name: 'myNetworkById',
    component: myNetworkById
  },
  {
    path: '/in/:id',
    name: 'Profile',
    component: Profile
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
