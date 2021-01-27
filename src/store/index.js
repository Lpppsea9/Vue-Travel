import Vue from 'vue'
import Vuex, { createLogger } from 'vuex'
import state from './state'
import mutations from './mutations'

// Vue里使用插件都是通过Vue.use来使用的
Vue.use(Vuex)


export default new Vuex.Store({

    state: state,
    mutations: mutations
})

// 导出一个通过Vuex创建的一个仓库
// export default new Vuex.Store({
//     // state存放一些全局公用的一些数据
//     state: {
//         /* 
//             城市是公用的数据，默认是北京
//             首页会用到这个公用的数据
//         */
//         city: defaultCity
//     },
//     // actions: {
//     //     changeCity(ctx, city) {
//     //         ctx.commit('changeCityM', city)
//     //     }
//     // },
//     mutations: {
//         changeCity (state, city) {
//             state.city = city
//             /* 
//                 把传过来的city 赋值到 本地localstorage.city上
//                 建议使用localStorage时，要加上try catch，如果用户
//                 关闭了本地存储或者使用隐身模式，那么localstorage会直接抛出异常
//              */
//             try {
//                 localStorage.city = city
//             } catch (error) {
                
//             }
//         }
//     }
    
// })
