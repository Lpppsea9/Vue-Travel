<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
        <home-recommend></home-recommend>
        <home-weekend></home-weekend>

    </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'


export default {
    name: 'Home',
    components: {
        HomeHeader: HomeHeader,
        HomeSwiper: HomeSwiper,
        HomeIcons: HomeIcons,
        HomeRecommend: HomeRecommend,
        HomeWeekend: HomeWeekend
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
