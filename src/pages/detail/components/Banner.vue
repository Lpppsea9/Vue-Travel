<template>
    <div>
        <div class="banner">
            <img class="banner-img" src="//img1.qunarzz.com/sight/p0/2005/a9/a9411416ff215fe2a3.water.jpg_600x330_feb1c240.jpg" />
            <div class="banner-info">
                <div class="banner-title">
                    大连圣亚海洋世界(AAAA景区)
                </div>
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xe91f;</span>
                39
                </div>
            </div>
        </div>
        <common-gallary></common-gallary>
    </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
    name: 'Detailbanner',
    components: {
        CommonGallary
    }
}
</script>

<style lang="stylus" scoped>
    .banner
        position relative
        overflow hidden
        height 0
        padding-bottom 55%
        .banner-img
            width 100%
        .banner-info
            display flex
            position absolute
            left 0 
            right 0
            bottom 0
            line-height .6rem
            color: #fff
            .banner-title
                flex 1
                font-size .36rem
                padding 0 .2rem
            .banner-number
                height: .32rem
                line-height: .32rem
                margin-top .14rem
                padding: 0 .4rem
                border-radius: .2rem
                background rgba(0,0,0,.8)
                font-size .24rem
                .banner-icon
                    font-size: .24rem
</style>