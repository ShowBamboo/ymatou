<template>
  <li class="product-wrapper" @click="handleClick">
    <a
      class="product needsclick"
      module_index
      module_name="maybe_like_list"
      sub_module_name="product"
      onclick
      :sproductid="product.id"
      :title="product.name"
    >
      <img class="picture lazyload" :src="product.pic" alt />
      <div class="info">
        <div class="name">{{ product.name }}</div>
        <div class="info-tag">
          <span>包邮包税</span>
        </div>
        <div class="price">¥ {{ product.price }}</div>
        <div class="country">
          <img class="flag" :src="product.sellerInfo.countryIconUrl" alt="flag" />
          {{ product.sellerInfo.countryName }}
        </div>
      </div>
    </a>
  </li>
</template>

<script>
import store from "../../../node_modules/store/dist/store.legacy";

export default {
  props: {
    product: {
      type: Object
    }
  },

  methods: {
    handleClick() {
      let info = {
        id: this.product.id,
        name: this.product.name,
        price: this.product.price,
        img: this.product.pic,
        avatarUrl: this.product.sellerInfo.avatarUrl,
        sellerName: this.product.sellerInfo.name,
        sellerLevel: this.product.sellerInfo.sellerLevel,
        countryName: this.product.sellerInfo.countryName,
        countryIconUrl: this.product.sellerInfo.countryIconUrl,
        point: this.product.sellerInfo.sellerDSR.DSRPoint.point,
        num: 1
      };

      store.set("info", info);

      this.$router.push({
        name: "productdetail",
        query: {
          id: this.product.id
        },
        params: info
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
.product-wrapper
  width 50%
  margin-bottom 0.11rem

  &:nth-child(2n+1)
    padding-right 0.05rem

  .product
    display block
    height 2.8rem
    position relative
    background-color #fff

    .picture
      width 100%
      height 1.73rem
      position relative

    .info
      padding 0 0.08rem
      position relative

      .name
        height 0.45rem
        font-size 12px
        color #383838
        line-height 0.22rem
        display -webkit-box
        -webkit-box-orient vertical
        -webkit-line-clamp 2
        overflow hidden
        margin 0.1rem 0 0

      .info-tag
        width 100%
        overflow hidden
        margin 0 0 0.06rem -0.05rem

        span
          display inline-block
          font-size 0.1rem
          transform scale(0.8)
          border 1px solid #c33
          color #c33
          padding 0.013rem 0.04rem
          margin 1px
          line-height 0.18rem
          border-radius 0.08rem

      .price
        line-height 1
        font-size 16px
        color #c33

      .country
        font-size 0.1rem
        transform scale(0.9)
        color #646464
        text-align right
        display inline-block
        position absolute
        right 0.13rem
        bottom 0

        .flag
          width 0.13rem
          height 0.13rem
          border-radius 50%
          margin-right 0.05rem
          vertical-align middle
</style>
