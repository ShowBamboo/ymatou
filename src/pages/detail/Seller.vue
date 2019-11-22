<template>
  <div data-v-6b274da8 data-v-2c8e1059 class="seller-wrap">
    <div data-v-6b274da8 class="seller-info">
      <img class="pic lazyload transition" :src="avatarUrl" alt />
      <div data-v-6b274da8 class="info">
        <div data-v-6b274da8 class="name">{{sellerName}}</div>
        <div data-v-6b274da8 class="type-coutry">
          <span data-v-6b274da8 class="selle-type">
            <i data-v-6b274da8>{{sellerLevel}}</i>
            <i data-v-6b274da8 class="num hign">{{point}}</i>
          </span>
          <span data-v-6b274da8 class="contry">
            <img data-v-6b274da8 :src="countryIconUrl" />
            {{countryName}}
          </span>
        </div>
      </div>

      <div
        data-v-6b274da8
        module_index
        module_name="follow_seller"
        sproductid="p2482307"
        sellerid="20927755"
        class="btn-follow"
      >未关注</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      avatarUrl: this.$route.params.avatarUrl,
      sellerName: this.$route.params.sellerName,
      sellerLevel: this.$route.params.sellerLevel,
      countryName: this.$route.params.countryName,
      countryIconUrl: this.$route.params.countryIconUrl,
      point: this.$route.params.point
    };
  }
};
</script>

<style lang="stylus" scoped>
.seller-wrap
  margin-top 0.1rem
  width 100%
  padding 0.15rem 0.12rem
  overflow-x hidden
  background #fff

  .seller-info
    width 100%
    overflow-x hidden
    display flex
    align-items flex-start
    -webkit-align-items flex-start

    .pic
      margin-right 0.05rem
      width 0.3rem
      height 0.3rem
      overflow-x hidden
      border-radius 100%
      background-size cover

    .info
      flex 1
      -webkit-flex 1
      padding-right 0.12rem
      overflow hidden
      font-size 0

      .name
        width 100%
        text-overflow ellipsis
        -webkit-line-clamp 1
        overflow hidden
        white-space normal
        font-family STHeitiSC-Medium
        font-size 0.14rem
        color #292929

      .type-coutry
        width 100%
        overflow hidden
        color #999
        font-size 0.12rem

        span
          display inline-block
          margin-right 0.05rem
          line-height 0.14rem
          font-size 0

          i
            font-size 0.12rem
            font-style normal

          i.hign
            color #e95656
            margin-left 0.02rem

        span.contry
          font-size 0.12rem

          img
            width 0.13rem
            height 0.13rem
            overflow hidden
            display inline-block
            float left
            border-radius 100%
            margin 0 0.05rem 0 0

    .btn-follow
      margin-top 0.06rem
      width 0.68rem
      overflow hidden
      display inline-block
      border 1px solid #c33
      color #c33
      border-radius 0.04rem
      text-align center
      line-height 0.26rem
      font-size 0.12rem

      .follow
        display inline-block
        width 0.1rem
        height 0.1rem
        position relative
        vertical-align text-bottom
        margin-right 0.05rem
        top 0.02rem
</style>