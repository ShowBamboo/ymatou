<template>
  <div data-v-5152bdb0 data-v-2c8e1059 class="logistics-freight-server">
    <div data-v-5152bdb0 class="logistics-wrap" @click="logisticsClick">
      <div data-v-5152bdb0 class="logistics-info">
        <span data-v-5152bdb0 class="tag">物流</span>

        <span data-v-5152bdb0 class="value">
          拼邮
          <i data-v-5152bdb0>，韩国发货</i>
        </span>
      </div>
      <div data-v-5152bdb0 class="logistic-time"></div>
    </div>
    <div data-v-5152bdb0 class="logistics-pop iphonex" v-show="islogisticsShow">
      <div data-v-5152bdb0 class="item">
        <div data-v-5152bdb0 class="name">虚拟发货</div>
        <div data-v-5152bdb0 class="desc">支付成功且买手接单后，将自动闪电发货</div>
      </div>

      <div data-v-5152bdb0 class="pic">
        <img data-v-5152bdb0 src="//s1.ymatou.com/itemm/static/img/log-pinyou.e8056fe.png" />
      </div>
      <div data-v-5152bdb0 class="btn" @click="okClick">确定</div>
    </div>
    <div data-v-5152bdb0 class="logistics-layer" v-show="isMaskShow"></div>
    <div data-v-5152bdb0 class="freight-wrap">
      <span data-v-5152bdb0 class="tag">运费</span>
      <span data-v-5152bdb0 class="value">包邮</span>
    </div>
    <div data-v-5152bdb0 class="server-wrap" @click="serverClick">
      <span data-v-5152bdb0 class="tag-server">假一赔三</span>
      <span data-v-5152bdb0 class="tag-server">售后无忧</span>
    </div>
    <div data-v-5152bdb0 class="server-pop iphonex" v-show="isServerShow">
      <div data-v-5152bdb0 class="server-content">
        <div data-v-5152bdb0 class="title">服务说明</div>
        <div data-v-5152bdb0 class="list">
          <div data-v-5152bdb0 class="service-item">
            <span data-v-5152bdb0 class="name tag_jyps">假一赔三</span>
            <div data-v-5152bdb0 class="content">100%海外正品，杜绝假货，让您无忧购物</div>
          </div>
          <div data-v-5152bdb0 class="service-item">
            <span data-v-5152bdb0 class="name tag_btth">售后无忧</span>
            <div data-v-5152bdb0 class="content">商品在退货时买家只需寄回国内退货仓，无需寄回海外。</div>
          </div>
        </div>
      </div>
      <div data-v-5152bdb0 class="btn" @click="okClick">确定</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      islogisticsShow: false,
      isServerShow: false,
      isMaskShow: false
    };
  },

  methods: {
    //物流
    logisticsClick() {
      this.islogisticsShow = true;
      this.isMaskShow = true;
    },
    okClick() {
      this.islogisticsShow = false;
      this.isServerShow = false;
      this.isMaskShow = false;
    },
    serverClick() {
      this.isServerShow = true;
      this.isMaskShow = true;
    }
  }
};
</script>

<style lang="stylus" scoped>
.logistics-freight-server
  width 100%
  overflow hidden
  margin-bottom 0.1rem
  background #fff

  .logistics-wrap
    width 100%
    overflow hidden
    padding 0.12rem 0.12rem 0.08rem
    position relative

    .logistics-info
      width 100%
      overflow hidden
      font-family STHeitiSC-Medium
      color #292929
      font-size 0

      span
        display inline-block
        font-size 0.13rem
        line-height 0.18rem

      span.tag
        width 0.4rem
        overflow hidden
        float left

      span.value
        padding-bottom 0.05rem

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
      margin-top -0.05rem

  .freight-wrap
    padding 0.1rem 0 0.12rem 0.12rem
    width 100%
    overflow hidden
    font-family STHeitiSC-Medium
    color #292929
    font-size 0
    border-bottom 1px solid hsla(0, 0%, 87%, 0.5)
    position relative

    span
      display inline-block
      font-size 0.13rem
      line-height 0.18rem

    span.tag
      width 0.4rem
      overflow hidden
      float left

  .server-wrap
    padding 0.09rem 0.12rem
    text-overflow ellipsis
    -webkit-line-clamp 1
    overflow hidden
    white-space normal
    white-space nowrap
    background #f8f8f8
    overflow-x auto
    font-size 0

    span
      display inline-block
      overflow hidden
      font-size 0.12rem
      margin-right 0.1rem
      padding-left 0.14rem
      position relative
      line-height 0.14rem

      &:after
        position absolute
        content ''
        width 0.1rem
        height 0.1rem
        background-image url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABGdBTUEAALGPC/xhBQAAArRJREFUOBGdlM9PE0EUx2dmi/4Blir+SDwotYkxJNbEKyRy0xYxu9t64USinqEejOmBmBqMBxT9D2h3oxG9GDXC0QOYaGIg5WA8+CNsqQcuQMPO+H0L025LawKTTGbm/fjMm/dmhrM2TY2OdlXW11NKqSHOWJIpdVwxVmOcr2C9ApdSzHHetnFl0De3NdNMS8YmATgDZZlzPof5L8V5F5OyF+s+bJTA+BXy8aOO8z5MiOiFyudFZWnpgc9YDsbzBmPZqOMsaH14XLWsQcDGsOFNyJuAdTvPNAvoEv1eXXjQCR1z1TTVQWEV2056IyPHaH9BBaCc0TFjrjux36A8274jpVxgGxtT5BsJqokCUM72C0Mubyspn6L6m1yp5+QvULE0VbNTATptQjBcp2mCwSbV7brzZBsB7BKO+7GTYzt5K4yuzt9M5sK2lFcFdunBHfupHau2fapqWZf1unUE7BaOFxwTupS+h77vX8Fp7wsIEWSjbSv1BP0TJbsh3ZkRDAE8QwBbGNMaRlolxGGAagI5+I0dT2pnQ4gpygslOwzdjWwnZwRz3Xfah8aAAVYEYX4GoF8ro8XiXDWTuYZ8vCEoQEpwLjGfrkfWAiNfvJx+9EXBDWMW0HOVbPaihh4pFj9gngoqiEoC1jhmGxj5EoML8Vp0x+OzcPwufb+ggTTu5ieA/i8ysg18wQhYJMCzGw6enm3naB1uXjZ7tmJZvWFZeO5Z1l3yRWquh+UMgkdQ+ijEHmiTYWhBtvShkK8W17+vWCIx7i0vc/x5BYAHmGHkYjMzX7RheETUfcz3HyK3g0jXY/LV+qY7SELsegMJnsQ9Ow3jb7gOwQdLOhifQD4HoDsP3Q+8sLFYqfSCdLrtAZICn+2htXJ5GBEMAZ6Ec0/goNQfQBZRzVfRePwlz+drGqTHf3gSaE5WFr0wAAAAAElFTkSuQmCC')
        background-size cover
        left 0
        top 50%
        margin-top -0.01rem
        transform translateY(-50%)
        -webkit-transform translateY(-50%)

  .logistics-layer
    position fixed
    z-index 111
    background-color rgba(0, 0, 0, 0.65)
    width 100%
    height 100%
    top 0
    left 0

  .logistics-pop
    position fixed
    z-index 1111
    background-color #f8f8f8
    width 100%
    bottom 0
    left 0
    transition all 0.45s ease

    .item
      padding 0.2rem
      overflow hidden
      text-align center

      .name
        display inline-block
        font-size 0.14rem
        color #292929
        position relative

        &:before
          right -0.7rem
          position absolute
          content ''
          width 0.6rem
          height 1px
          background-color #e95656
          top 50%

        &:after
          left -0.7rem
          position absolute
          content ''
          width 0.6rem
          height 1px
          background-color #e95656
          top 50%

      .desc
        padding-top 0.1rem
        font-size 0.12rem
        color #666
        width 100%
        display inline-block
        text-align left

    .pic
      width 100%
      overflow hidden
      margin-bottom 0.2rem

      img
        display inline-block
        width 100%

    .btn
      width 100%
      line-height 0.45rem
      background-color #c33
      text-align center
      font-size 0.17rem
      color #fff

  .server-pop
    position fixed
    left 0
    right 0
    bottom 0
    background-color #fff
    z-index 111

    .server-content
      padding 0.2rem 0
      overflow hidden
      text-align center

      .title
        display inline-block
        font-size 0.14rem
        color #292929
        position relative
        margin-bottom 0.2rem

        &:before
          right -0.7rem
          position absolute
          content ''
          width 0.6rem
          height 1px
          background-color #e95656
          top 50%

        &:after
          left -0.7rem
          position absolute
          content ''
          width 0.6rem
          height 1px
          background-color #e95656
          top 50%

      .list
        width 100%
        text-align left
        max-height 3rem
        overflow hidden
        overflow-y auto
        padding 0 0.2rem

        .service-item
          padding 0 0 0.2rem
          line-height 0.18rem
          overflow hidden

          .name
            padding-left 0.2rem
            font-size 0.14rem
            color #383838
            position relative

          .tag_jyps
            &:after
              position absolute
              top 0.01rem
              left 0
              content ''
              width 0.15rem
              height 0.15rem
              vertical-align middle
              background-size contain
              background-position 50%
              background-repeat no-repeat
              background-image url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABGdBTUEAALGPC/xhBQAAAzhJREFUSA21Vl1IVEEU/ubudXfduyppL5b9QiQaFkpJP5RKSVRQBKaSlVQaQQW99NCTD9JDIRGIZZIZCepDEfQQgWVB6YNRYCgoYZppP/6g+6fr3r3TzNU7u9dlydAGdud83z3znXNnzs5ZgvlBKSVjxWVlhNKzzEwHqNN4triZeAih3ZSQ+pVNdXWEAb6O8C9vSXny9KzWSEHzOF7qICCvY61SidJ4/4fEM19OcZ4cT1TXZNqWS73D5aD0yr9kTZwK4q9eRKB/ANTjjbZ0g+/p8xFZ3/Mwl8TaKkCWwxhA/foNrkrGzw8uyoPY9+6Er+WZQUfMXFueP1DxkCgOeOoeI/jzt87FpG+GNWsbLCmrkFBxLeRns0HeuA72AzmCc924DbV/UGCuzVKNrBaeMZEtoNMzCA7/AFgAbXwC7pp6sOrQBdjZCSFiYb7BIIK/RgU3Z1CntIAR0LZvF2K2bhGYBwt09cBRUgA640fgY9fc53MPnOdOAn4/qNcn/A0jagDDwTSrqv5GtpzdgrZuzwRiZAT6+gUXbiw+AN8advj+N+9h25EJoig6tufuYVw722m2ZVKknLlcwkMvsO0H8+AsLRZsUv0dYSMjDbFH8jHT9g6eew0hnlmLDuDv+GCqEJPKPNAmXRF09AD8dTVNLKCTU1C9rP4dDsGZDH7I7PAXjqgBpPg4BFxuk78tOwtxl8tMnAGmX7yCt6HJgGKOHiBxBTSWtZQQJ5y5ERybwFTFTROnlBaZcDiICDDT+pbdDSrk9Wv0ktRGx+FrehJaowWhjY6FMLfY9kQbEXXlbWiGnLoJ6pcBWDPSobDKCXT3Rlv/Vz7iDSxrU+A8Uwh39QMEenrhOHEUyulCeB8162L8kGOPHzYJ83tK6+kzcQZgAYjHuI/s+blQThVg+mUbZjs/6T6uW9VIqLwOdXBI3zpitSImLdVYr89SQrwJhwDxyHqbo8jWSfZrdd99iNn2TuET/D4Cd1UN1KFhyKuT4e/ohIddeuEj9tghUF/kPcS1yWjR+XJotDZ8wbLZErnAegIl44VlrcvVj43keF9OaqnbL/Huzxs0J4yHS52Nps+157oHU/xff1v+APQdTHVaOqbsAAAAAElFTkSuQmCC')

          .tag_btth
            &:after
              position absolute
              top 0.01rem
              left 0
              content ''
              width 0.15rem
              height 0.15rem
              vertical-align middle
              background-size contain
              background-position 50%
              background-repeat no-repeat
              background-image url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAIAAABvFaqvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAnVJREFUeNqslV1o01AUx3Nu0rqmNKBdFccK82ErDIfTibANQdleHFgYiG97GMieREF9VcZgb5OBA9mLCqKCTBA68cmHOlhBcDBQJnWihQVxtvOjYU2TJfd6snT9SFNdZPchnHub+8v5+J9TYIxxHMeUDbqUoF+WOb3A7XL5RXKkm/TEIRTGHSCIbawZiSkPiFqcEL8B4ShBX/6fgksv4HWECBiRK4W0dUOsH5/lE5pZpu9esa/pehZCBCsvdd7yZ0e5YLM2N00z14BYZyBK/LEB3+AYk9+bqaeObyME9NlLDo5w4ZbxeUV7OL7v9BB/6jz4A1Y1dBXdofJH38Wb9LtMF+47bzn2/Mk4VRTtyaR4+TaJ9ZXPYTtYZGFG8EusvZ+tLtakwlnRrgHt+UxgeKyaUnm7a5CTDiMODUahIQgLiSwgjBw/16hKKBxEkEgrxsgMwwUELTGUg2WEmm2NuS6+rdPMrluvhaOU+t08UnK71c6OI+baqgsIRWUuPNo2cn/RJ83KtqHevc5LIfcc0Q+vtekR7vc3mk41Am0l5+DHp82rvfjkIwcbVA33YpNwKGK+nccGrKeYmZWt5GPgdH/n0WqKi47s5ig1YPSE0DsMQcmKdzOvv7yHlKahERAEbJd/CfLMqK0gujRP04v6TIL5gua6jI3CR9vFK3fsXyGdMpMPqi/WtEiZUqkABqgVsD9QELY4KgmtZQnVOqpXc0lZrsqM9RlvXoCadSbbkr/HZTXKjqYI9kTJaunwDGrtYEq+NCdx7tqqwRFBi0WvLPPXT7L/AEKA5nPGswmUMiuqTFW9giAQACmMg2XPhj/s1d/RHwEGAMZgMca6vKSmAAAAAElFTkSuQmCC')

          .content
            padding 0 0.2rem
            display inline-block
            width 100%
            font-size 0.12rem
            color #9b9b9b

    .btn
      width 100%
      line-height 0.45rem
      background-color #c33
      text-align center
      font-size 0.17rem
      color #fff
</style>