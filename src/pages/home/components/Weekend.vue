<template>
    <div>
        <div class="title">周末去哪儿</div>
        <ul>
            <li
                class="item border-bottom"
                v-for="item of recommendList"
                :key="item.id"
            >   
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeWeekend',
    data () {
        return{
            recommendList: [{
                id: '0001',
                imgUrl: 'http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg',
                title: '故宫',
                desc: '东方宫殿建筑代表，世界宫殿建筑典范'
            },{
                id: '0002',
                imgUrl: 'http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg',
                title: '故宫',
                desc: '东方宫殿建筑代表，世界宫殿建筑典范'
            },
            {
                id: '0003',
                imgUrl: 'http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg',
                title: '故宫',
                desc: '东方宫殿建筑代表，世界宫殿建筑典范'
            },{
                id: '0004',
                imgUrl: 'http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg',
                title: '故宫',
                desc: '东方宫殿建筑代表，世界宫殿建筑典范'
            }]
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/mixins.styl'
    .title
        margin-top .2rem
        line-height .8rem
        background #eee
        text-indent .2rem
    .item-img-wrapper
        overflow hidden
        height 0
        padding-bottom 29.9%
        .item-img
            width 100%
    .item-info
        padding .1rem
        .item-title
            line-height .54rem
            font-size .32rem
            ellipsis()
        .item-desc
            line-height .4rem
            color grey
            ellipsis()
</style>>

