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
            swiperList: [],
            iconList: [],
            recommendList: [],
            weekendList: []
        }
    },
    methods: {
        getHomeInfo () {
            axios.get('/api/index.json')
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
                console.log(data);
            }
        }
    },
    mounted () {
        this.getHomeInfo()
    }
}







































// import HomeHeader from './components/Header'
// import HomeSwiper from './components/Swiper'
// import HomeIcons from './components/Icons'
// import HomeRecommend from './components/Recommend'
// import HomeWeekend from './components/Weekend'
// import axios from 'axios'
// import { mapState } from 'vuex'

// export default {
//   name: 'Home',
//   components: {
//     HomeHeader,
//     HomeSwiper,
//     HomeIcons,
//     HomeRecommend,
//     HomeWeekend
//   },
//   data () {
//     return {
//       lastCity: '',
//       swiperList: [],
//       iconList: [],
//       recommendList: [],
//       weekendList: []
//     }
//   },
//   computed: {
//     ...mapState(['city'])
//   },
//   methods: {
//     getHomeInfo(){
//       axios.get('/api/index.json')
//         .then(this.getHomeInfoSucc)
//     },
//     getHomeInfoSucc (res) {
//       res = res.data
//       if (res.ret && res.data) {
//         const data = res.data
//         this.swiperList = data.swiperList
//         this.iconList = data.iconList
//         this.recommendList = data.recommendList
//         this.weekendList = data.weekendList
//       }
//     }
//   },
//   mounted () {
//     this.getHomeInfo()
//   },
//   activated () {
//     if (this.lastCity !== this.city) {
//       this.lastCity = this.city
//       this.getHomeInfo()
//     }
//   }
// }
</script>

<style>

</style>
