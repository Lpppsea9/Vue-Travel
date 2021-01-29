<template>
    <div class="container" @click="handleGalleryClick">
        <div class="wrapper">
            <swiper :options="swiperOptions">
                <swiper-slide 
                    v-for="(item, index) in imgs"
                    :key="index"
                >
                    <img class="gallery-img" :src="item">
                </swiper-slide>
                 <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CommonGallery',
    props: {
        imgs: {
            type: Array,
            default () {
                return []
            }
        }
    },
    data () {
        return {
            swiperOptions: {
                pagination: '.swiper-pagination',
                paginationType:'fraction', // 分页方式
                /* 
                    将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新。
                    意思是 
                        这个swiper插件只要监听到我这个元素或者父级元素
                    发生了dom结构的变化的时候。会自动的自我刷新一次
                */
                observeParents: true, 
                observer: true
            }
        }
    },
    methods: {
        handleGalleryClick () {
            this.$emit('close')
        }
    }
}
</script>

<style lang="stylus" scoped>
    .container >>> .swiper-container
        overflow: visible
    .container
        display flex
        flex-direction column
        justify-content center
        z-index 99
        position  fixed
        left 0
        right 0
        top 0
        bottom 0
        background #000
        .wrapper
            width 100%
            height 0
            // overflow hidden
            padding-bottom 100%
            .gallery-img
                width 100%
            .swiper-pagination
                color #fff
                bottom -1rem


</style>