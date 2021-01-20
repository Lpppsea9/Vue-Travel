<template>
    <div class="wrapper">
    <swiper :options="swiperOptions" v-if="showSwiper">
        <swiper-slide v-for="item of list" :key="item.id">
            <img class="swiper-img" :src="item.imgUrl" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    </div>
</template>

<script>
export default {
    name: 'HomeSwiper',
    props: {
        list: Array
    },
    data () {
        return {
        swiperOptions: {
            pagination: '.swiper-pagination',
            loop: true,
            autoplay: true,
            delay: 3000
        },
        swiperList: [{
            id: '0001',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg'
        },{
            id: '0002',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1802/42/7c92b9a381e46402.jpg_640x200_1cdce2a4.jpg'
        }]
        }
    },
    computed: {
        // 使list加载完再渲染到页面上，防止轮播图加载后第一张是最后一张图
        showSwiper () {
            return this.list.length
        }
    }
}
</script>

<style lang="stylus" scoped>
    /*  
        注意轮播图下方的元素不要抖动
    */
    //穿透，不受scoped限制,改变小圆点的颜色，wrapper所以子组件只要出现bullet-active就会让他变成白色
    .wrapper >>> .swiper-pagination-bullet-active
        background: #fff
    .wrapper
        overflow: hidden //别忘了加上
        width: 100% 
        height: 0 //设置宽高比要把高度设为0，这里写31.25%的话则是相对于父级的高度
        padding-bottom: 31.25% //百分比，因为宽度是100%,他的高度会相对于宽度自动撑开
        background: #eee
        .swiper-img
            width: 100%
</style>
