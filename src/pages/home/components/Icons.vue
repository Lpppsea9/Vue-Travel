<template>
    <div class="icons">
        <swiper :options="swiperOptions">
            <swiper-slide v-for="(page, index) of pages" :key="index">
                <div 
                    class="icon" 
                    v-for="item of page"
                    :key="item.id"
                >
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl">
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'HomeIcons',
    props: {
        list: Array
    },
    data () {
        return {
            swiperOptions: {
                autoplay: false,
            }
        }
    },
    
    /* 
        计算属性是根据其他的一些属性计算出来生成的一组新的结果
        它自带缓存这一机制
    */
    computed: {
        pages () {
            /* 
                Math.floor是向下取整 8/8 = 1，则第九个图标
                会在第二个页面(即索引index = 1的页面)
             */ 
            const pages = []
            this.list.forEach((item, index) => {
                const page = Math.floor(index / 8)
                if (!pages[page]) {
                    pages[page] = []
                }
                pages[page].push(item)
            })
            return pages;
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
    /* 
        padding-bottom是根据父元素的width宽度来计算的 

        .icons >>> .swiper-container使下面的icons也能滑动
        .swiper-container在控制台可以获得
    */
    .icons >>> .swiper-container
        height 0
        padding-bottom 50%
        overflow hidden
        // background powderblue
        // touch-action none
    .icons
        margin-top .1rem
        .icon
            // border 1px solid grey
            position relative
            overflow hidden
            float left
            width 25%
            // height 0
            padding-bottom 25%
            .icon-img
                position absolute
                top 0 
                left 0
                right 0
                bottom .44rem
                box-sizing border-box
                padding .1rem
                .icon-img-content
                    display block
                    margin 0 auto
                    height 100%
            .icon-desc
                position absolute
                left 0
                right 0
                bottom 0
                height .44rem
                line-height .44rem
                text-align center
                color $darkTextColor
                ellipsis() //定义在mixins.css中的一个方法，让多余字体呈省略号
</style>
