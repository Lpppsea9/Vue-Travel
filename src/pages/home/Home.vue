<template>
    <div>
        <home-header></home-header>
        <home-swiper :list="swiperList"></home-swiper>
        <home-icons :list="iconList"></home-icons>
        <home-recommend :list="recommendList"></home-recommend>
        <home-weekend :list="weekendList"></home-weekend>
    </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from "axios"
import { mapState } from 'vuex'

export default {
    name: 'Home',
    components: {
        HomeHeader: HomeHeader,
        HomeSwiper: HomeSwiper,
        HomeIcons: HomeIcons,
        HomeRecommend: HomeRecommend,
        HomeWeekend: HomeWeekend
    },
    data () {
        return {
            // city: '', // 之前是ajax通过后端获取的，现在通过前端存储
            lastCity: '',
            swiperList: [],
            iconList: [],
            recommendList: [],
            weekendList: []
        }
    },
    computed: {
        ...mapState(['city'])
    },
    methods: {
        getHomeInfo () {
            // 请求接口的时候应该带一个参数city
            axios.get('/api/index.json?city=' + this.city)
                .then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc (res) {
            res = res.data
            if (res.ret && res.data) {
                const data = res.data
                // this.city = data.city // city同上去掉
                this.swiperList = data.swiperList
                this.iconList = data.iconList
                this.recommendList = data.recommendList
                this.weekendList = data.weekendList
            }
        }
    },
    mounted () {
        // lastCity：临时缓冲变量
        this.lastCity = this.city
        this.getHomeInfo()
    },

    /* 
    需求：点击二级页面来选择城市的时候跳转到Home页面的过程中
          要重新发一个ajax请求去调用不同城市的数据

        页面初次加载的时候，会去发一个ajax的请求
        mounted和activited的区别?
        activited什么时候执行？
            当页面重新显示的时候，activited一定会被重新执行
            那么可以这样做：
                在每一次页面重新显示的时候，可以判断当前页面的城市
                和上一次页面显示的城市是否是相同的，如果不相同，
                再去发一次ajax请求
                (设置lastCity)
    */ 
    activated () {
        // console.log('activited');
        if (this.lastCity !== this.city) {
            this.lastCity = this.city
            this.getHomeInfo()
        }
    }
}
</script>

<style>

</style>
