import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',  //指网页上的根路径
            name: 'Home',
            component: Home
        },
        {
            path: '/city', //指网页上的根路径下的list
            name: 'City',
            component: City
        },
        {   
            /* 
                通过在detail/后面加上:id的方法实现动态路由
            */
            path: '/detail/:id', 
            name: 'Detail',
            component: Detail
        }
    ]
})

