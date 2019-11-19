<template>
  <div class="xbjx">
    <div class="bt-title">
      <van-divider
        :style="{ color: '#646464',borderColor: '#ccc', padding: '0 46px',fontSize:'16px' }"
      >
        <img src="https://s1.ymatou.com/homem/images/tag_select-cb4a47d788.png" alt /> 小编精选
      </van-divider>
    </div>
    <div class="content goto-xbjx" onclick>
      <img
        src="http://pic1.ymatou.com/G02/M07/86/1B/CgvUBVvrzheAQTFDAAH0yCAeoYw144_15_8_w_o.jpg"
        width="100%"
        alt="CHANEL"
      />
      <div class="desc">
        <div class="text">
          <h2>CHANEL</h2>
          <a
            href="//m.ymatou.com/topic/forBuyerApp/topic/newProductList"
            class="btn-more"
            module_index
            module_name="xiaobianjingxuan"
            onclick
          >查看更多</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Divider } from "vant";

Vue.use(Divider);
export default {};
</script>

<style lang="stylus" scoped>
.xbjx
  width 100%
  overflow hidden
  background #f5f5f5

  .bt-title
    img
      width 0.25rem
      height 0.16rem
      padding-right 0.06rem

  .content
    border 0.1rem solid #fff
    background #fff
    position relative
    overflow hidden
    font-size 0

    .desc
      position absolute
      left 0
      top 0
      width 100%
      height 100%
      background rgba(0, 0, 0, 0.6)

      .text
        width 80%
        position absolute
        top 50%
        left 10%
        overflow hidden
        transform translate(0, -50%)
        text-align center
        color #fff

        h2
          font-size 0.17rem
          font-weight 400
          padding-bottom 0.26rem

        a
          font-size 0.13rem
          display inline-block
          padding 0.05rem 0.2rem 0.06rem 0.18rem
          border-radius 0.26rem
          border 1px solid #fff
          color #fff
          margin 0.01rem
          position relative

          &::after
            content ''
            position absolute
            top 50%
            width 0.08rem
            height 0.08rem
            border-width 1px
            border-style solid
            border-color #fff #fff transparent transparent
            transform translate(0, -50%) rotate(45deg)
</style>