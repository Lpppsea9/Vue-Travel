<template>
  <div class="container">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(item,index) in imgs" :key="index">
          <img class="gallary-img" :src="item" />
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination">1111</div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommonGallary",
  props: {
    imgs: {
      type: Array,
      default() {
        return [
          "https://imgs.qunarzz.com/tuan/team2/1507/2c/83e0e0e7ae082a.jpg_640x276_212dcff9.jpg",
          "https://imgs.qunarzz.com/wugc/p102/201301/13/20805c2d8250fd1b93835fbb.jpg_640x276_f56a602f.jpg"
        ]
      }
    }
  },
  data() {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow inherit
  .container
    display flex
    flex-direction column
    justify-content center
    z-index 99
    position: fixed
    left 0 
    right 0 
    top 0
    bottom 0
    background #000
    .wrapper
      // overflow hidden
      height 0
      width 100%
      padding-bottom 60%
      .gallary-img
        width: 100%;
      .swiper-pagination
        color: #fff
        // bottom: -1rem
</style>