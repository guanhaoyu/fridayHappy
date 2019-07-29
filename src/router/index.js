import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '../page/home'
import Item from '../page/item'
import Score from '../page/score'
import Test from '../page/testVviewer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'home',
      component: Home
    },
    {
      path: '/item',
      name: 'item',
      component: Item
    },
    {
      path: '/score',
      name: 'score',
      component: Score
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    }
  ]
})
