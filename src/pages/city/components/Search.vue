<template>
    <div>
        <div class="search">
            <input
                v-model="keyword" 
                class="search-input" 
                type="text" 
                placeholder="输入城市名或拼音" 
            />
        <div class="search-content">
            <ul>
                <li>123</li>
            </ul>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CitySearch',
    props: {
        cities: Object
    },
    data () {
        return {
            keyword: '',
            list: []
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .search
        height .72rem
        padding 0rem .1rem
        background $bgColor
        .search-input
            box-sizing border-box
            width 100%
            height .62rem
            padding 0 .1rem
            line-height .62rem
            border-radius .06rem
            text-align center
            color #666
    .search-content
        z-index 1
        position absolute
        top: 1.58rem
        left 0
        right 0
        bottom 0
        background green
</style>