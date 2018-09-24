import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/home/Home'
import List from '@/pages/list/List'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',  //路由名
      component: Home  //组件名
    }, {
      path: '/list',
      name: 'List',  
      component: List 
    }
  ]
})
