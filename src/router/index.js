import Vue from 'vue'
import Router from 'vue-router';
import Timeline from '@/components/Timeline/Timeline.vue'
import Todo from '@/components/Todo';
import Article from '@/components/Article';
import ArticleViewer from '@/components/ArticleViewer';
import TwoDimensionTable from '@/components/TwoDimensionTable';
import FactOpinionCard from '@/components/FactOpinionCard';
import WhyHowWhatCard from '@/components/WhyHowWhatCard';
import PreferenceRank from '@/components/PreferenceRank';
import PreferenceRankView from '@/components/PreferenceRankView';
import Preference from '@/components/Preference';
import ImageGallery from '@/components/ImageGallery';
import ImageGalleryView from '@/components/ImageGalleryView';
import Register from '@/components/Register';
import Login from '@/components/Login';
import Diary from '@/components/Diary';
import DiaryTimeline from '@/components/DiaryTimeline';



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
      path: '/article',
      name: 'Article',
      component: Article
    },
    {
      path:'/article/:id',
      name: 'ArticleView',
      component: Article
    },
    {
      path:'/article/view/:id',
      name: 'ArticleViewer',
      component: ArticleViewer
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
    },{
      path:'/imageGallery',
      name:'ImageGallery',
      component:ImageGallery
    },{
      path:'/imageGallery/:id',
      name:'ImageGalleryView',
      component:ImageGalleryView
    },{
      path:'/register',
      name:'Register',
      component:Register
    },{
      path:'/login',
      name:'Login',
      component:Login
    },{
      path:'/diary',
      name:'Diary',
      component:Diary
    },{
      path:'/diary/:id',
      name:'DiaryView',
      component:Diary
    },{
      path:'/diaryTimeline',
      name:'DiaryTimeline',
      component:DiaryTimeline
    }
    
  ]
});