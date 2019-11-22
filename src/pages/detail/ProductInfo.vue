<template>
  <div data-v-2c8e1059 class="product-info">
    <div data-v-2c8e1059 class="productinfo-content">
      <div data-v-2c8e1059 class="product-name">
        <span data-v-2c8e1059 class="tag">包邮包税</span>
        <span data-v-2c8e1059 class="name">{{name}}</span>
      </div>
      <div data-v-2c8e1059 class="product-price">
        <span data-v-2c8e1059 class="interval-price">
          <i data-v-2c8e1059>¥&nbsp;</i>
          {{price}}
        </span>
      </div>

      <div data-v-2c8e1059 class="product-activity">
        <span data-v-2c8e1059 class="name">活动价￥38.8起，黑五狂欢价</span>
        <span data-v-2c8e1059 class="day">11月22日00:00准时开始</span>
      </div>
    </div>

    <div data-v-7949db3c data-v-2c8e1059 class="seller-coupon">
      <div data-v-7949db3c class="coupon-btn" ref="couponBtn" @click="couponClick">
        <div data-v-7949db3c class="tag"></div>
        <div data-v-7949db3c class="list">
          <span data-v-7949db3c class="item">
            <i data-v-7949db3c class="tag-before"></i>满1999减60
            <i data-v-7949db3c class="tag-after"></i>
          </span>
        </div>
      </div>
      <div data-v-7949db3c class="coupon-layer" v-show="isCouponShow"></div>
      <div data-v-7949db3c class="coupon-pop iphonex" v-show="isCouponShow">
        <div data-v-7949db3c class="title">买手优惠券</div>
        <div data-v-7949db3c class="list">
          <div data-v-7949db3c class="item">
            <div data-v-7949db3c class="cart">
              <div data-v-7949db3c class="price">
                ¥
                <i data-v-7949db3c>60</i>
              </div>
              <div data-v-7949db3c class="rule">满1999元可用</div>
            </div>
            <div data-v-7949db3c class="info">
              <div data-v-7949db3c class="name">
                <span data-v-7949db3c>买手券</span>限买手(首尔姐妹花)商品
              </div>
              <div data-v-7949db3c class="time">2019.11.22-2019.11.25</div>
              <div
                data-v-7949db3c
                module_index
                module_name="coupon"
                sproductid="04f8bcd8-a103-40e0-8fa7-1e11bb19308f"
                sellerid="20927755"
                class="btn"
              >点击领取</div>
            </div>
          </div>
        </div>
        <div data-v-7949db3c class="close" @click="closeClick">关闭</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCouponShow: false,

      id: "",
      name: "",
      price: "",
      img: ""
    };
  },

  mounted() {
    let { id, name, price, img } = this.$route.params;
    this.name = name;
    this.price = price;
    this.img = img;
  },

  methods: {
    //领券
    couponClick() {
      this.isCouponShow = true;
    },
    closeClick() {
      this.isCouponShow = false;
    }
  }
};
</script>

<style lang="stylus" scoped>
.product-info
  width 100%
  overflow hidden
  background-color #fff
  padding 0 0 0 0.12rem
  border-bottom 0.1rem solid #f1f1f1

  .productinfo-content
    padding 0.08rem 0.12rem 0.1rem 0

    .product-name
      width 100%
      display inline-block
      line-height 0.22rem
      font-family STHeitiSC-Medium
      font-size 0
      text-overflow ellipsis
      -webkit-line-clamp 2
      overflow hidden
      white-space normal

      span.tag
        display inline-block
        border 1px solid #c33
        font-size 0.12rem
        color #c33
        padding 0 0.015rem
        border-radius 0.025rem
        margin-right 0.03rem
        line-height 0.13rem
        vertical-align middle

      span.name
        font-size 0.15rem
        display inline
        letter-spacing 1px
        color #292929
        vertical-align middle

    .product-price
      width 100%
      overflow hidden
      margin-top 0.05rem
      line-height 0.2rem
      font-size 0

      .interval-price
        font-family STHeitiSC-Medium
        font-size 0.18rem
        color #c33
        vertical-align middle

        i
          font-size 0.14rem

    .product-activity
      margin-top 0.05rem
      display inline-block
      font-size 0.12rem
      line-height 0.22rem
      height 0.22rem
      overflow hidden
      text-align left
      font-family PingFangSC-Regular

      .name
        padding-left 0.06rem
        padding-right 0.06rem
        border-radius 0.05rem
        background #c33
        line-height 0.22rem
        height 0.22rem
        color #fff
        max-width 1.9rem
        text-overflow ellipsis
        -webkit-line-clamp 1
        overflow hidden
        white-space normal
        float left

      .day
        display inline-block
        height 100%
        max-width 1.5rem
        color #c33
        position relative
        text-indent 0.12rem
        line-height 0.22rem
        height 0.22rem
        border-bottom 0.01rem solid #c33
        margin-left -0.04rem

        &:after
          position absolute
          left -0.02rem
          top 0
          content ''
          width 0.14rem
          height 0.22rem
          background-image url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAsCAYAAAB2d9g5AAAABGdBTUEAALGPC/xhBQAAAlFJREFUWAm9mL9rFEEUx2cSgwkiCAciRrBQEEwR8PYuXAo9C0NSKAQDIhIPNPk3QqrUaa0C6cQ+RRqLlLnbeFhYWKXNQUCMKZLLPr+zuMc4vL2b3Z3ZbW7m7dvv577z4+3NyXa1SsK4pBDHCH3H59fxSuXT7P7+HyMld1dyQF0N0J6Qcqvabm/r8bztkcCBsJS7gmgt6HQuB7EcjTHrZ4jew+1n6/yURHsgBDDZy2EQrKRoWYUzAZUiEW3/XFq6bqXOJGUHCjH96+TkNaNlFcoMjFWlXLdSZ5JyASXRs06j8ZDRGxnKBcTikdTvr41UZxJyAWMdohY1m9cYzaGhIsA74fn5y6HqzM38QIhRFGUe1kJALJ7F7tzcPcZIaqgQEItn7DKKPqSqMzcKAZWeBJA2N611rBOZLxuH4PJ+uLf3Iu2+GS8MjAWjyLryOAGioL/qzs/fNt1wfSdACE/0Ly5aHMCMuQKqd+VHU5zrOwPiRfkorNWechA95g4IVczlyMrjFijEylGzeUt3ZLadAmFxKjo7e2dC9L5boFImGronnQOxWmfDej3QXelt58DY5JDK4wcoxNvuwsIN3VnS9gLEPN68Oj19k0D0Tz9AEDCX7J70ByRqfKvVZnR3qu0NqMSvmMrjFYhhXTXPIV6BWDyV373esnKbXH6BoKCg/1d5vAPBfI5j/YPyHOKHHVwNXs5lOFR7soWhxYnd87ZIhhHAu916/XFpQAWKhKiUB5SyLyYnf5QJ3HhycNBTwMwHSvWQzfXvH6w2FstOcHj4JXnmLyIloaVw78NwAAAAAElFTkSuQmCC')
          background-size cover

  .seller-coupon
    overflow hidden
    background #fff

    .coupon-btn
      padding 0.15rem 0.12rem 0.15rem 0
      overflow hidden
      font-size 0
      display flex
      -webkit-display flex
      border-top 1px solid #dedede
      position relative

      &:after
        right 0.12rem
        top 50%
        content ''
        display block
        position absolute
        width 0.06rem
        height 0.06rem
        border-width 1px
        border-style solid
        border-color #9b9b9b #9b9b9b transparent transparent
        transform translateY(-50%) rotate(45deg)
        -moz-transform translateY(-50%) rotate(45deg)
        -ms-transform translateY(-50%) rotate(45deg)
        -webkit-transform translateY(-50%) rotate(45deg)

      .tag
        display inline-block
        height 0.15rem
        width 0.24rem
        margin-right 0.05rem
        margin-top 0.01rem
        background-image url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAeCAYAAABqpJ3BAAAABGdBTUEAALGPC/xhBQAABK5JREFUWAnVWEtoFEkY/qqn55XJOxgfiMaTMYmR6GUPCoqgXkTBmBhdRQRhT148eFLHx9WDoLA3Rcxu1BAQ8SAIccEXiWjYCCYXDS4SzZoMyWQmPel0t//fZibTPT1jJbJs8kNPVf2v/qvqf/WIsba2Rt0wfocQTcKyVCwBsACD7H1Dpv6m6qbZTpMGWBaIsFRAJXt/IWP/UOjU65eK1R521ikeyByUCAbBjwyIsjL4li93sPpraxHetcuBU5Ytg3/DBgduIQupDYT37kV4zx4p/cVHjqDs9GmQj2b42fjQzp2ZNU9Kjh9HpLnZgVvIQmoDyc5OJO/fl9KfuHMHvpUrEdq2LcPPN6C/eze33rgRgc2bEb95M4Nb6EQq64hIBHaQJ5N53yPCYYiiIps+9eQJfCtWQKmqglJZCR+NxvCwvWYGf00NUs+ewSJ9zMOjNTWVV3chghhpaTEp+8zdtwd3pKUF1swMkl1dHtTvKHaHyMGDeemFCIl795CgW14ISN2AjOLko0fQnj93sHLgl587h1RPT0EXNONxh9x8FlIbmCLjLKoThcAiIwyXIUX79kEEAkjcvQtzdLSQ+IJoQogJqQ2Y4+MFXxDavh2BhoYcnsCWLbASCRS3teXQ3Ijpt2+hUez8CMjX45YQf9LYr6rqX1Ib4JPkGJh6+NBbv6o66wS5TnDTJhgjI5gZGnLS/H4Em5qgv38P8+vXOX2kQwJ66Eb3V9++PZzmlZKyi5jPl5bJGbXHj8EPgygtRfmZMzC+fEHs/HmYsVgOPycFrgsT167B+PQph+6JEEJThWiuyjKe+aTqQKq3F9OvX3vqzUZy/q+4dAlKeTliFy96Gs/8HBPTfX2oiEbhX78+W0XeOblMb1VHxz9uBqkbmPnwwS3nWHOdiBw4gPDu3TDHxmCQaxQfOuTgyVnQjRrEW37hAlJPn2KyvT3vhmdlPQ9bqg4Et24FTBMpV5pkxSIUQtXVqwD5PZ9s6sULlJw4Yb9Tqa6GumYNpl+9mrVhdiB/D1Iljl2+bMuXnjxpZ7nRU6eAVMrJO7dKBRSltqKjY2gOBUjdgLpqlR3E2YLpuaVpiN+4AX1wMHOC41eu2GSuATpll/Q6LcPNHm+AZfX+fowODEBdvbqQ8Swa1C2ra+zYsf2Vt259TOuS2oDOLkRZKB+kXr7MIQUaGxGor7cD1U3kQGfg2pEes3slG+nxQ7WoSde0gX9bWztNIf5WFKVbagPTFMTzAnKnyOHD0CmFauTfbvBRK83glaHcvB7rsGlZR+3ezDTjnoHhFvLX1YE7ShngTFRJvu2jJm7i+nW7CXTL8e1wmrXy+7tbxHNNvUGJ1A1wleVCppOv5gNRUoLi1laEduyA8fkzYmfP2kYyv/0xQwWME4G6di3CxJN48CCfqnnhpTbArQRvoCAQXV23zk6H3DvBMDLsak0N/BQPDNbkpB30Wnd3hv4zE6k0+jMv+K9lpWKA0x7n9MUIUi7kp09ATqMaNWeLDaQ2kG7UFpvxbI9C/x7kTy2L0eIsm6jBG1SEz3eUvmze0GNm0Rb1lG0l4/uEovxK43ewolEOaKmgTsv8j6MpotElc+AFz+kbXC6m5gfj318AAAAASUVORK5CYII=')
        background-size cover

      .list
        display inline-block
        flex 1
        -webkit-flex 1
        white-space nowrap
        overflow hidden
        overflow-x auto
        margin-right 0.01rem

        .item
          font-size 0.12rem
          display inline-block
          line-height 0.14rem
          border 1px solid #e95656
          color #e95656
          padding 0 0.08rem
          margin-right 0.05rem
          position relative
          z-index 1

    .coupon-layer
      position fixed
      z-index 111
      background-color rgba(0, 0, 0, 0.65)
      width 100%
      height 100%
      top 0
      left 0

    .coupon-pop
      position fixed
      z-index 1111
      background-color #f8f8f8
      width 100%
      bottom 0
      left 0
      transition all 0.45s ease

      .title
        width 100%
        line-height 0.18rem
        font-size 0.14rem
        color #292929
        padding 0.12rem

      .list
        width 100%
        overflow hidden
        padding 0 0.12rem
        max-height 3rem
        overflow-y auto

        .item
          width 100%
          overflow hidden
          height 0.9rem
          display flex
          display -webkit-flex
          margin-bottom 0.12rem
          font-family PingFangSC-Regular
          background #fff
          position relative

          .cart
            width 1.05rem
            overflow hidden
            height 100%
            background-color #ffa968
            text-align center
            color #fff

            .price
              margin-top 0.15rem
              font-size 0.17rem

              i
                font-size 0.3rem

            .rule
              font-size 0.12rem

          .info
            flex 1
            -webkit-flex 1
            height 100%
            padding-left 0.15rem
            position relative

            .name
              width 100%
              font-size 0.12rem
              text-overflow ellipsis
              -webkit-line-clamp 2
              overflow hidden
              white-space normal
              line-height 0.18rem
              margin-top 0.1rem
              margin-bottom 0.2rem

              span
                background-color #ffa968
                border-radius 0.04rem
                color #fff
                padding 0 0.03rem
                margin-right 0.05rem
                font-size 0.12rem

            .time
              font-size 0.12rem
              color #666
              display inline-block

            .btn
              position absolute
              right 0.1rem
              bottom 0.15rem
              border 1px solid #e95656
              padding 0.02rem 0.1rem
              border-radius 0.1rem
              font-size 0.12rem
              color #e95656
              background #fff

      .close
        width 100%
        line-height 0.45rem
        background-color #c33
        text-align center
        font-size 0.17rem
        color #fff
</style>