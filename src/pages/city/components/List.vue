<template>
    <div class="list" ref="wrapper">
        <div>
            <!-- 当前城市区域 -->
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">{{this.currentCity}}</div>
                    </div>
                </div>
            </div>
            <!-- 热门城市区域 -->
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div 
                        class="button-wrapper" 
                        v-for="item of hot"
                        :key="item.id"
                        @click="handleCityClick(item.name)"
                    >
                        <div class="button">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <!-- 首字母城市列表 -->
            <div 
                class="area" 
                v-for="(item, key) of cities" 
                :key="key"
                :ref="key"
            >
                <div class="title border-topbottom">{{key}}</div>
                <div class="item-list">
                    <div 
                        class="item border-bottom"
                        v-for="innerItem of item"
                        :key="innerItem.id"
                        @click="handleCityClick(innerItem.name)"
                    >
                        {{innerItem.name}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
/* 
    1.  只要key值保持本层级不重复，和另一层级相同也没关系
    2.  兄弟组件传值：Alphabet和List实现字母关联
            当我们处理兄弟组件的时候，可以让Alphabet组件里的值传递给City组件，
            然后City.vue再帮助我们把数据转发给兄弟组件也就是，List.vue
 */
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
    name: 'CityList',
    props: {
        hot: Array,
        cities: Object,
        letter:String
    },
    computed: {
        /* 
            可以是数组，也可以是一个对象
            意思是 把vuex里的 city 这个公用的数据映射到list这个组件的计算属性
            里
        */
        ...mapState({
            currentCity: 'city'
        })
    },
    methods: {
        handleCityClick (city) {
            // alert(city)
            // this.$store.dispatch('changeCity', city)
            // 直接 commit
            // this.$store.commit('changeCity', city)
            this.changeYity(city)
            this.$router.push('/')
        },
        ...mapMutations(['changeYity'])
    },
    watch: {
        // 监听letter的变化
        letter() {
            if(this.letter){
                /* 
                    获取点击的dom元素(左边某一个首字母的区域)
                    因为scrollToElement方法需要一个dom元素 
                */
                const element = this.$refs[this.letter][0]
                this.scroll.scrollToElement(element)
                // console.log(element); // 加上[0]才能获取到dom元素
            }
            // console.log(this.letter); //打印变化的letter
        }
    },
    mounted () {
        // 使用betterScroll实例
        this.scroll = new Bscroll(this.$refs.wrapper, {
            click: true
        })
    }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .border-topbottom
        &:before
            border-color #ccc
        &:after
            border-color #ccc
    .border-bottom
        &:before
            border-color #ccc
    .list
        width 100%
        overflow hidden
        position absolute
        top 1.58rem
        left 0
        right 0
        bottom 0
        .title
            line-height .54rem
            background #eee
            padding-left .2rem
            color #666
            font-size .26rem
        .button-list
            overflow hidden
            padding .1rem .6rem .1rem .1rem
            .button-wrapper
                float: left
                width: 33.33%
                .button
                    margin: .1rem
                    padding: .1rem 0
                    text-align: center
                    border: .02rem solid #ccc
                    border-radius: .06rem
        .item-list
            .item
                line-height .76rem
                color #666
                padding-left .2rem

</style>