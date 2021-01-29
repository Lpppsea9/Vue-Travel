<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg">
            <div class="banner-info" v-for="item of list">
                <div class="banner-title">
                    {{item.sightName}}
                </div>
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xe91f;</span>
                    39
                </div>
            </div>
        </div>
        <common-gallery 
            :imgs="imgs"
            @close="handleGalleryClose"
            v-show="showGallery"
        ></common-gallery>
    </div>
</template>

<script>
import CommonGallery from 'common/gallery/Gallery'
export default {
    name: 'DetailBanner',
    props: {
        list: Array
    },
    data () {
        return {
            imgs: ["http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg","http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.png"],
            showGallery: false
        }
    },
    components: {
        CommonGallery
    },
    methods: {
        handleBannerClick () {
            this.showGallery = true
        },
        handleGalleryClose () {
            this.showGallery = false
        }
    },
    mounted() {
        console.log(this.list);
    }
}
</script>

<style lang="stylus" scoped>
    .banner
        height 0
        padding-bottom 55%
        overflow hidden
        position relative
        .banner-img
            width 100%
        .banner-info
            display flex
            position absolute
            color #fff 
            left 0
            bottom 0
            right 0
            line-height .6rem
            background-image linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
            .banner-title
                flex 1
                font-size .32rem
                padding 0 .2rem
            .banner-number
                height .32rem
                line-height .32rem
                margin-top .14rem
                padding 0 .4rem
                border-radius .2rem
                background rgba(0, 0, 0, 0.8)
                font-size .24rem
                // .banner-icon
</style>