
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper' //引入轮播图插件
import 'styles/reset.css'   //重置项目的css，统一方案
import 'styles/border.css'  //解决1像素边框的问题
import 'styles/iconfont.css' //引入iconfont
import 'swiper/dist/css/swiper.css' //使用vue awsomeswiper插件，css文件

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper) // 使用轮播图插件
/* 
    不再使用fastclick插件，因为
    html {
        touch-action: manipulation
    }
    可以解决300ms延迟的问题
*/

/* 本段代码做了变更 */
new Vue({
  router,   //router:router
  store,    //store:store
  render: h =>h(App)
}).$mount('#app')
