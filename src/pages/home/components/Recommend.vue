<template>
    <div>
        <div class="title">热销推荐</div>
        <ul>
            <router-link 
                tag="li" 
                class="item border-bottom"
                v-for="(item, index) of list"
                :key="item.id"
                :to="'./Detail/' + index"
            >
                <img class="item-img" :src="item.imgUrl" />
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeRecommend',
    props: {
        list: Array
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
    .title
        margin-top .2rem
        line-height: .8rem
        background #eee
        text-indent .2rem
    .item
        display flex
        height 1.9rem
        overflow hidden
        .item-img
            width 1.7rem
            height 1.7rem
            padding .1rem
        .item-info
            flex: 1
            padding .1rem
            min-width 0 
            //在一个flex布局中，设置flex:1,min-width: 0 ，保证内容不超出外层容器
            .item-title
                width 4rem
                line-height .54rem
                font-size .32rem
                ellipsis()
            .item-desc
                line-height .4rem
                color grey
                ellipsis()
            .item-button
                line-height .44rem
                margin-top .16rem
                background #ff9300
                padding 0 .1rem
                border-radius .06rem
                color #fff
</style>
