<template>
    <ul class="list">
        <li 
            class="item" 
            v-for="item of letters" 
            :key="item"
            :ref="item"
            @touchstart="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
            @click="handleLetterClick"
        >
            {{item}}
        </li>
    </ul>
</template>

<script>
/* 
    1.  Alphabet怎么拿到字母表每个dom元素
    2.  只有在touchstart之后才能触发touchmove里的一些内容，
        所以要在data里定义一个标识位
*/
export default {
    name: 'CityAlphabet',
    props: {
        cities: Object
    },
    computed: {
        letters () {
            const letters = []
            for (let i in this.cities) {
                letters.push(i)
            }
            // 返回类似['A', 'B', 'C']
            return letters
        }
    },
    data () {
        return {
            // touch标识位
            touchStatus: false,
            startY: 0,
            timer: 0
        }
    },
    updated () {
        // updated当页面完成了数据的更新之后，同时页面完成了自己的渲染之后up会执行
        this.startY = this.$refs['A'][0].offsetTop
    },
    methods: {
        // 1. 点击右侧字母列表向左侧的list兄弟组件触发事件
        handleLetterClick (e) {
            this.$emit('change', e.target.innerText)
            // 获取点击的右边的字母列表
            // console.log(e.target.innerText);
        },
        // 2. 右侧字母列表滚动事件
        handleTouchStart () {
            this.touchStatus = true
        },
        handleTouchMove (e) {
            if(this.touchStatus) {
                if(this.timer) {
                    clearTimeout(this.timer)
                }
                this.timer = setTimeout(() => {
                    /*
                    右侧字母列表A到他的父元素list的值即(到搜索框底部的值)
                    将startY定义在data中，并且
                    */
                    // const startY = this.$refs['A'][0].offsetTop
                    const touchY = e.touches[0].clientY - 79
                    const index = Math.floor((touchY - this.startY) / 20)
                    console.log(this.$refs['A'][0].offsetTop);
                    if (index >= 0 && index < this.letters.length) { 
                        this.$emit('change', this.letters[index]) 
                    }
                }, 16)
            }
        },
        handleTouchEnd () {
            this.touchStatus = false
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .list
        display flex 
        flex-direction column
        justify-content center
        position absolute
        // 顶部(城市选择和搜索框高度总和)为1.58rem
        top 1.58rem
        right 0
        bottom 0
        width .4rem
        .item
            line-height .4rem
            text-align center
            color $bgColor
</style>
