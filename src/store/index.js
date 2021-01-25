import Vue from 'vue'
import Vuex from 'vuex'

// Vue里使用插件都是通过Vue.use来使用的
Vue.use(Vuex)

// 导出一个通过Vuex创建的一个仓库
export default new Vuex.Store({
    // state存放一些全局公用的一些数据
    state: {
        /* 
            城市是公用的数据，默认是北京
            首页会用到这个公用的数据
        */
        city: '上海'
    }
})