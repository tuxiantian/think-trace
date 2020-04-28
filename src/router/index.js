import Vue from 'vue'
import Router from 'vue-router';
import Timeline from '@/components/Timeline/Timeline.vue'
import Layouts from '@/components/layouts.vue'
import todo from '@/components/todo';
import Markdown from '@/components/markdown';
import Viewer from '@/components/Viewer';
import TwoDimensionTable from '@/components/TwoDimensionTable';
import FactOpinionCard from '@/components/FactOpinionCard';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Timeline
    },
    {
      path: '/todo',
      name: 'todo',
      component: Layouts,
      children: [{
        path: '/todo/:id',
        name: 'todo',
        component: todo
      }]
    }, {
      path: '/index',
      name: 'Timeline',
      component: Timeline
    }, {
      path: '/markdown',
      name: 'Markdown',
      component: Markdown
    },
    {
      path:'/markdown/:id',
      name: 'Markdown',
      component: Markdown
    },
    {
      path:'/markdown/view/:id',
      name: 'Viewer',
      component: Viewer
    },
    {
      path:'/twoDimensionTable',
      name: 'TwoDimensionTable',
      component: TwoDimensionTable
    },
    {
      path:'/twoDimensionTable/:id',
      name: 'TwoDimensionTable',
      component: TwoDimensionTable
    },
    {
      path:'/factOpinionCard',
      name: 'FactOpinionCard',
      component: FactOpinionCard
    },
    {
      path:'/factOpinionCard/:id',
      name: 'FactOpinionCard',
      component: FactOpinionCard
    }
  ]
});