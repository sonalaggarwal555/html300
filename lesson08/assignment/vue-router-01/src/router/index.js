import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import images from '@/components/images'
import grid from '@/components/grid'
import accordion from '@/components/accordion'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/images',
      name: 'images',
      component: images
    },
    {
      path: '/grid',
      name: 'grid',
      component: grid
    },
    {
      path: '/accordion',
      name: 'accordion',
      component: accordion
    }
  ]
})
