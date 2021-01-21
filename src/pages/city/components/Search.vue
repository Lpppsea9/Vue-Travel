<template>
    <div class="search">
        <input class="search-input" type="text" placeholder="输入城市名或拼音" />
    </div>
</template>

<script>
export default {
    name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .search
        height .72rem
        padding 0rem .3rem
        background $bgColor
        
</style>