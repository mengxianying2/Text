// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//mint ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
import { InfiniteScroll } from 'mint-ui';
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);


//vant 
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


//全局axios
import axios from '../src/api'
Vue.prototype.axios=axios;

Vue.use(InfiniteScroll);
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { 
    'App':()=>import('./App')
   },
  template: '<App/>'
})
