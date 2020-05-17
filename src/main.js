import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'; //  引入路由配置文件

import store from './store'; //  引入vuex实例

Vue.use(ElementUI)

Vue.config.productionTip = false;  //  关闭生产模式下给出的提示


const app = new Vue({
  el: '#app',
  router, //  注入路由配置
  store,// // 注入
  render: h => h(App)
})