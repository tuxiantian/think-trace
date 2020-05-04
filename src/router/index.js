import Vue from 'vue'
import Router from 'vue-router';
import Timeline from '@/components/Timeline/Timeline.vue'
import Todo from '@/components/Todo';
import Markdown from '@/components/markdown';
import Viewer from '@/components/Viewer';
import TwoDimensionTable from '@/components/TwoDimensionTable';
import FactOpinionCard from '@/components/FactOpinionCard';
import WhyHowWhatCard from '@/components/WhyHowWhatCard';
import PreferenceRank from '@/components/PreferenceRank';
import PreferenceRankView from '@/components/PreferenceRankView';
import Preference from '@/components/Preference';


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Timeline
    }, {
      path: '/todo',
        name: 'todo',
        component: Todo
    }, {
      path: '/todo/:id',
        name: 'todoView',
        component: Todo
    },{
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
      name: 'MarkdownView',
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
      name: 'TwoDimensionTableView',
      component: TwoDimensionTable
    },
    {
      path:'/factOpinionCard',
      name: 'FactOpinionCard',
      component: FactOpinionCard
    },
    {
      path:'/factOpinionCard/:id',
      name: 'FactOpinionCardView',
      component: FactOpinionCard
    },
    {
      path:'/whyHowWhatCard',
      name: 'WhyHowWhatCard',
      component: WhyHowWhatCard
    },
    {
      path:'/whyHowWhatCard/:id',
      name: 'WhyHowWhatCardView',
      component: WhyHowWhatCard
    },
    {
      path:'/preferenceRank/:id',
      name: 'PreferenceRank',
      component: PreferenceRank
    },
    {
      path:'/preferenceRankView/:id',
      name: 'PreferenceRankView',
      component: PreferenceRankView
    },
    {
      path:'/preference',
      name: 'Preference',
      component: Preference
    },
    {
      path:'/preference/:id',
      name: 'PreferenceView',
      component: Preference
    }
    
  ]
});