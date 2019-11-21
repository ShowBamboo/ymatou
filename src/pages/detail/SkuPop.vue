<template>
  <div data-v-0a7494f4 data-v-2c8e1059 class="sku-wrap">
    <div
      data-v-0a7494f4
      onclick
      module_index
      module_name="specification"
      sproductid="p2482307"
      sellerid="20927755"
      class="sku-btn"
      @click="showClick"
    >
      <span data-v-0a7494f4 class="tag">已选</span>
      <span data-v-0a7494f4 class="value">酒糟面膜170g</span>
    </div>
    <div data-v-0a7494f4 class="sku-pop-layer" v-show="isShow"></div>
    <div data-v-0a7494f4 class="sku-pop" v-show="isShow">
      <div data-v-0a7494f4 class="sku-content">
        <div data-v-0a7494f4 class="sku-info">
          <div
            data-v-0a7494f4
            class="pic"
            style="background-image: url(&quot;http://pic1.ymatou.com/G02/shangou/M0A/57/B3/CgzUDF2utl2APJ9ZAAzsgABrLv8392_1_1_n_w_lb.jpg&quot;);"
          ></div>
          <div data-v-0a7494f4 class="desc">
            <span data-v-0a7494f4 class="price">
              <i data-v-0a7494f4>¥&nbsp;</i>59
            </span>
            <span data-v-0a7494f4 class="stock">库存充足</span>
            <span data-v-0a7494f4 class="choosed">已选择: 酒糟面膜170g</span>
          </div>
        </div>
        <div data-v-0a7494f4 class="spec-wrap">
          <div data-v-0a7494f4 class="spec">
            <div data-v-0a7494f4 class="title">规格分类</div>
            <div data-v-0a7494f4 class="options">
              <span
                data-v-0a7494f4
                module_index
                module_name="specification"
                sproductid="p2482307"
                sellerid="20927755"
                class="sku"
                :class="{selected:isSelected}"
                @click="selectedClick"
              >酒糟面膜170g</span>
              {
              "value": "酒糟面膜170g"
              }
            </div>
          </div>
        </div>
        <div data-v-0a7494f4 class="purchase-amount">
          <div data-v-0a7494f4 class="text">
            <span data-v-0a7494f4 class="title">
              购买数量
              <br data-v-0a7494f4 />
            </span>
          </div>
          <div data-v-0a7494f4 class="amount">
            <input data-v-0a7494f4 type="button" value="-" @click="reduceNum" class="btn-minus" />
            <span data-v-0a7494f4 class="num">{{num}}</span>
            <input data-v-0a7494f4 type="button" value="+" @click="addNum" class="btn-plus" />
          </div>
        </div>
      </div>
      <div data-v-0a7494f4 class="preorder-pop-layer preorder-pop-layer-active"></div>
      <div data-v-0a7494f4 class="spec-confirm">
        <span
          data-v-0a7494f4
          module_index
          module_name="specification"
          sub_module_name="add_to_shoppingcart"
          sproductid="p2482307"
          sellerid="20927755"
          class="half"
        >加入购物车</span>
        <span
          data-v-0a7494f4
          module_index
          module_name="specification"
          sub_module_name="go_buy"
          sproductid="p2482307"
          sellerid="20927755"
          class="half"
        >立即购买</span>
      </div>
      <div data-v-0a7494f4 class="close" @click="closeClick"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
      isSelected: false,
      num: 1
    };
  },
  methods: {
    showClick() {
      this.isShow = true;
    },
    closeClick() {
      this.isShow = false;
    },
    selectedClick() {
      this.isSelected = !this.isSelected;
    },
    reduceNum() {
      if (this.num > 1) {
        this.num--;
      }
    },
    addNum() {
      this.num++;
    }
  }
};
</script>

<style lang="stylus" scoped>
.sku-wrap
  font-family PingFangSC-Regular

  .sku-btn
    width 100%
    overflow hidden
    height 0.4rem
    background #fff
    position relative
    font-family STHeitiSC-Medium

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

    span
      display inline-block
      overflow hidden
      color #292929
      line-height 0.4rem
      font-size 0.13rem

    span.tag
      padding 0 0.1rem 0 0.12rem

    span.value
      text-overflow ellipsis
      -webkit-line-clamp 1
      white-space normal
      max-width 2rem
      overflow hidden
      display inline-block

  .sku-pop-layer
    position fixed
    left 0
    top 0
    width 100%
    height 100%
    background-color rgba(0, 0, 0, 0.6)
    z-index 1111

  .sku-pop
    position fixed
    z-index 1111
    width 100%
    bottom 0
    left 0
    transition all 0.45s ease

    .sku-content
      margin-top 0.25rem
      width 100%
      padding 0.12rem 0.15rem 0
      position relative
      background #fff

      .sku-info
        width 100%
        position relative
        min-height 1rem
        padding-bottom 0.1rem

        .pic
          width 1.2rem
          height 1.2rem
          border 1px solid #d8d8d8
          position absolute
          background #d8d8d8
          top -0.35rem
          left 0
          border-radius 0.02rem
          background-size cover

        .desc
          width 100%
          padding-left 1.3rem
          overflow hidden

          span
            display inline-block
            width 100%
            overflow hidden
            font-size 0

          span.price
            font-size 0.18rem
            color #c33
            line-height 0.26rem
            height 0.26rem
            font-family STHeitiSC-Medium

            i
              font-size 0.12rem

          span.stock
            width 100%
            overflow hidden
            font-size 0.12rem
            line-height 0.16rem
            color #646464
            height 0.23rem

          span.choosed
            font-size 0.12rem
            color #646464
            line-height 0.17rem
            text-overflow ellipsis
            -webkit-line-clamp 2
            overflow hidden
            white-space normal

      .spec-wrap
        max-height 2.35rem
        overflow scroll
        -webkit-overflow-scrolling touch

        .spec
          padding 0.15rem 0
          border-top 1px solid #dedede

          .title
            font-size 12px
            color #646464

          .options
            font-size 0

            .sku
              display inline-block
              background-color #fff
              padding 0 0.13rem
              line-height 0.27rem
              color #646464
              font-size 12px
              text-align center
              border 1px solid #646464
              border-radius 0.03rem
              margin 0.1rem 0.1rem 0 0

            .sku.selected
              background-color #c33
              color #fff
              border none
              position relative
              border 1px solid #c33

      .purchase-amount
        padding 0.13rem 0
        border-top 1px solid #dedede
        border-bottom 1px solid #dedede
        display flex
        justify-content space-between

        .text
          height 0.3rem

          .title
            display table-cell
            vertical-align middle
            font-size 12px
            color #646464
            line-height 0.3rem

        .amount
          font-size 0
          color #646464

          .btn-minus, .btn-plus
            padding 0
            margin 0
            display inline-block
            width 0.3rem
            height 0.3rem
            line-height 0.3rem
            font-size 16px
            text-align center
            color #646464
            background-color #e8e8e8
            border 0
            font-family inherit
            font-weight inherit
            resize none
            outline 0
            box-shadow none
            -webkit-appearance none

          .btn-minus
            border-top-right-radius 0.03rem
            border-bottom-right-radius 0.03rem

          .btn-plus
            border-top-left-radius 0.03rem
            border-bottom-left-radius 0.03rem

          .num
            display inline-block
            width 0.45rem
            height 0.3rem
            line-height 0.3rem
            font-size 12px
            text-align center

    .spec-confirm
      width 100%
      text-align center
      color #fff
      font-size 0

      span
        display inline-block
        font-size 0.16rem
        line-height 0.45rem
        background-color #c33

      span.half:first-child
        background-color #f28f25

      span.half
        width 50%

    .close
      display block
      width 0.26rem
      height 0.26rem
      top 0.3rem
      right 0.1rem
      position absolute

      &:after
        content ''
        width 0.16rem
        height 0.16rem
        position absolute
        left 0.05rem
        top 0.05rem
        background url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAbtJREFUOBGVU91O1FAQnpnTPgvRYLjREAzxCQAleGMIqCGy2+0uT+ClL4Bt988Q+QnRCwxIuOIaYow3GgmEZ2l7hn5NjunGXVjOzbQz3zfzzZw5vBl3Tn3RVqPRuKZ7nDjuPstJ34sh/pBZOkmSTw/G5SdJb9aS3UJhBgmOXPPP5MnzjXr98rZEm0n/KWu2Y9hfCMN3VwJwGNbO2PAbSvW40+lMjkpQyJ5hm++iEMjAlQocAQCruscki61W7a/zw8Zxb9qq3fc9ehEEwYWLlQrcT7NZ/yEsy0r28GO3O+X8SdJ/AjISV8mIDyioEnKbfzFiXlprPSX9Sj4vFfP54zDODk2AYBR1HyvRIZFSkWg+DNd/O1LVDrQwEBDJQIZIqKjGqt9DE6D/ooUDJl40IvNoAXOoEt33fy1EUe8RhljIflXI/gVgOdBUv2HAzWbtpyPDDijADoAMoCMDhOHhBnATuGr43PmnoKjyEIskzCu4TgeoWhRIMzpij163guAcsVJB+Q4y+13FrI4iA1zugM8Lmus21h8+brfbE3hMhs1brDScdx0UzDU9FpI1SS1H+BiXjOR4B57QHJ7zDaqgyGicofwYAAAAAElFTkSuQmCC') no-repeat 0 0
        background-size cover
</style>