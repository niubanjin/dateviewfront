import Vue from 'vue'
import Router from 'vue-router'
import Graph from '@/components/graph'
import Pin from '@/components/pin'
import Parallel from '@/components/parallel'
import Radar from '@/components/radar'
import Themeriver from '@/components/themeriver'
import Line from '@/components/line'
import Heatmap from '@/components/heatmap'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/graph',
      name: 'Graph',
      component: Graph
    }, 
    {
      path: '/pin',
      name: 'Pin',
      component: Pin
    },
    {
      path: '/parallel',
      name: 'Parallel',
      component: Parallel
    }, 
    {
      path: '/radar',
      name: 'Radar',
      component: Radar
    },
    {
      path:'/themeriver',
      name:'Themeriver',
      component:Themeriver
    },
    {
      path:'/line',
      name:'Line',
      component:Line
    },
    {
      path:'/heatmap',
      name:'Heatmap',
      component:Heatmap
    }

  ]
})
