<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe624;</div>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe632;</span>
            输入城市/景点/游玩主题
        </div>
        <router-link to="/city">
            <div class="header-right">
                {{this.city}}
                <span class="iconfont down-icon">&#xe665;</span>
            </div>
        </router-link>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'HomeHeader',
    /* 
        之前city是父组件Home传来的，现在不用了,
        之前显示数据是{{this.city}}改为{{this.$store.city}}

        $store指的是创建的store文件夹下的index中的 Vuex.store,为什么每个子组件
        都能用这个$store呢,是因为在main.js里面创建 vue根实例的时候,把store传递
        进去了，所以vuex创建的store会被派发到每一个子组件里面，所以在每一个子组件里都可以用 {{this.$store}} 获取到这个store

    */
    // props: {
    //     city: String
    // }

    /* 
        意思是 mapstate是指把vuex里面的数据映射到这个组件的computed计算属性里 
        映射什么? 
            把city这个公用数据映射到名字叫做city的计算属性之中
    */
    computed: {
        ...mapState(['city'])
    }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    /* 
        1rem = html font-size = 50px
        那么43px/100再*2
     */
    .header
        display flex
        line-height $headerHeight //定义成变量方便后面整体修改头高
        background $bgColor
        color #fff
        .header-left
            width .64rem
            .back-icon
                text-align center
                font-size .4rem
        .header-input
            flex 1
            height .64rem
            line-height .64rem
            margin-top .12rem
            margin-left .2rem
            padding-left .2rem
            background #fff
            border-radius .1rem
            color #ccc
        .header-right
            min-width 1.04rem
            padding 0 .1rem;
            text-align center
            color #fff
            .down-icon
                margin-left -0.04rem
                font-size .24rem
</style>
