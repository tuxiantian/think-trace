import Vue from 'vue'
import Router from 'vue-router';
import Timeline from '@/components/Timeline/Timeline.vue'
import Layouts from '@/components/layouts.vue'
import todo from '@/components/todo';

Vue.use(Router);

export default new Router({
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
    }]
});