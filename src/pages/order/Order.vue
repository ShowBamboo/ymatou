<template>
  <div class="settle-container">
    <div class="adress-div-btn">
      <address class="address-wrap address-wrap-btn2">
        <h2>
          <span>
            添加收件人信息
            <i>+</i>
          </span>
        </h2>
        <span class="arrow"></span>
      </address>
    </div>
    <div class="buyer-list-wrapp">
      <div class="buyer-item hui_panel" v-for="(item,index) in list" :key="item.id">
        <div class="buyer-item-hd">
          <img :src="item.avatarUrl" alt class="spot-goods-flag lazyload" />
          <strong>{{item.sellerName}}</strong>
        </div>

        <div class="buyer-item-bd">
          <dl class="order-list">
            <dt class="order-hd">订单{{index+1}}</dt>
            <dd class="order-bd hui_panel">
              <ul class="pro-list">
                <!--遍历商品-->
                <li class="hui_panel">
                  <div class="pic">
                    <img :src="item.img" alt class="pic-carrier lazyload" />
                  </div>
                  <div class="info">
                    <h4>
                      <span class="freight-discount">包邮包税</span>
                      {{item.name}}
                    </h4>
                    <div class="attr">
                      <strong>¥{{item.price}}</strong>
                      <div class="num">x{{item.num}}</div>
                    </div>
                  </div>
                </li>
              </ul>
            </dd>
          </dl>
        </div>
        <div class="settle-count">
          <div>
            共{{item.num}}件商品，总金额：
            <span class="price price-num">
              ¥
              <strong>{{(item.num*item.price).toFixed(1)}}</strong>
            </span>
          </div>
        </div>
      </div>
      <div class="detailed"></div>
    </div>
    <div class="detailed">
      <div class="totalNum Ditem">
        <span class="tnTtitle">商品总件数：</span>
        <span>{{sum}}件</span>
      </div>

      <div class="DtotalPW Ditem">
        <span class="tnTtitle">商品总额：</span>
        <span>¥ {{total.toFixed(1)}}</span>
      </div>

      <div class="DtotalPrice Ditem settleTools">
        <span class="tnTtitle">应付合计：</span>
        <span class="DpriceNum">
          ¥
          <i class="DPpirce">{{total.toFixed(1)}}</i>
        </span>
      </div>
    </div>
    <div class="declare">
      <a>我已授权委托洋码头申报海关购买海外商品</a>
    </div>
    <div class="settle-tools" id="settleTools">
      <div class="text">
        <strong>
          应付金额: ¥
          <i class="totalAllPriceStr">{{total.toFixed(1)}}</i>
        </strong>
      </div>
      <div class="btn" type="button" id="buyBtn" onclick module_index module_name="confirm">确认订单</div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    list() {
      return this.$store.state.order.list;
    },
    sum() {
      return this.$store.state.order.list.reduce((sum, value) => {
        return (sum += value.num);
      }, 0);
    },
    total() {
      return this.$store.state.order.list.reduce((total, value) => {
        return (total += value.num * value.price);
      }, 0);
    }
  }
};
</script>

<style lang="stylus" scoped>
.settle-container
  width 100%
  margin 0 auto
  overflow hidden
  display block
  transition transform 0.3s ease-in-out

  .adress-div-btn
    .address-wrap
      background #fff
      color #646464
      min-height 0.77rem
      padding 0.15rem 0.45rem 0.15rem 0.1rem
      position relative
      word-break break-all

      &:after
        content ' '
        width 100%
        position absolute
        bottom 0
        left 0
        height 0.04rem
        background-image url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIgAAAAICAMAAAAV1Ee4AAAAWlBMVEX/pcOl4P/x8fHt8PLx8PGm4P6w4/3h7fTn7/Px7e/y6ez03ub+qMWo4f6r4f225Py95frY6/X7uc/8tMz9r8n9q8fH5/jO6ffz5erz4+j21eD3ztz4x9f5wNO0jMdfAAAAfUlEQVQ4y5XTRxKAIBBEUcaAAQElmL3/Nd3PUFR1H+DX27SiynzbsJlFgQsTbww9FVaDaOG4YEeUDksgRI+8MWfUkWbeGB2BECcdCXXkkzdaTSDEDrwxRdSxGOHwBEL6jTe6oNAZ0VgJgZQdH+y4Cw4UcjR8L+x4RGOvXPQHoYcGbOt8CXQAAAAASUVORK5CYII=')
        background-size 0.68rem 0.04rem
        background-repeat-y no-repeat

      h2
        text-align center
        line-height 0.5rem
        padding-left 0.35rem
        font-size 100%
        font-weight 400

        span
          display inline-block
          padding 0 0.2rem
          font-size 15px
          color #383838
          position relative

          i
            font-size 24px
            position absolute
            left 0
            top 0
            color #c33

      .arrow
        position absolute
        right 0.13rem
        top 50%
        width 0.1rem
        height 0.1rem
        border-width 1px
        border-style solid
        border-color #9b9b9b #9b9b9b transparent transparent
        color #9B9B9B
        transform translate(0, -50%) rotate(45deg)

  .buyer-list-wrapp
    .buyer-item
      background #fff

      .buyer-item-hd
        padding 0 0.12rem
        height 0.4rem
        line-height 0.4rem

        .spot-goods-flag
          width 0.22rem
          height 0.22rem
          line-height 0.22rem
          text-align center
          border-radius 50%
          display inline-block
          font-size 0.12rem
          vertical-align middle
          margin-right 0.04rem
          background-repeat no-repeat
          background-size cover

        strong
          font-size 12px
          color #646464

      .buyer-item-bd
        margin 0 0.12rem 0.1rem

        .order-list
          .order-hd
            font-size 11px
            width 100%
            display inline-block
            color #646464
            letter-spacing 0.003rem
            padding 0.1rem 0 0 0.1rem
            background #f8f8f8

          .order-bd
            background #f8f8f8
            margin-bottom 0.1rem

            .pro-list
              li
                overflow hidden
                margin 0 0 0 0.1rem
                padding 0.1rem 0.12rem 0.1rem 0
                border-bottom 0.005rem solid #dedede

              .pic
                width 0.7rem
                height 0.7rem
                float left

                .pic-carrier
                  display inline-block
                  background-size cover
                  background-repeat no-repeat
                  background-position center
                  width 100%
                  height 100%

              .info
                padding-left 0.86rem
                position relative
                padding-right 0.5rem

                h4
                  font-size 12px
                  color #383838
                  line-height 0.17rem
                  margin-bottom 0.045rem
                  padding-left 0.005rem
                  -webkit-line-clamp 2
                  display -webkit-box

                  .freight-discount
                    border-radius 0.03rem
                    border 1px solid #c33
                    color #c33
                    font-size 0.12rem
                    line-height 0.11rem
                    padding 0.01rem 0.03rem
                    position relative
                    top -0.005rem
                    margin-bottom 1px

                .attr
                  position absolute
                  text-align right
                  right 0
                  top 0
                  color #c4c4c4
                  font-size 0.12rem
                  font-weight 400

                  strong
                    color #383838
                    font-size 14px

                  .num
                    font-size 0.12rem
                    color #646464
                    text-align right
                    margin-top 0.1rem

      .settle-count
        background #fff
        text-align right
        padding 0.12rem 0.1rem 0.1rem
        font-size 12px

        .price
          color #F23340
          display inline-block
          min-width 0.5rem
          margin-right 0.1rem

          strong
            font-size 16px

.detailed
  margin-top 0.1rem
  background #fff
  padding 0 0.1rem

  .totalNum
    line-height 0.44rem
    font-size 0.12rem
    font-weight 400
    border-bottom 1px solid #eee
    display flex
    justify-content space-between
    color #646464
    padding 0 0.1rem

  .DtotalPW
    line-height 0.28rem
    display flex
    justify-content space-between
    font-size 0.12rem
    color #646464
    padding 0 0.1rem
    padding-top 0.08rem

  .DtotalPrice
    line-height 0.44rem
    font-weight 700
    border-top 1px solid #eee
    display flex
    justify-content space-between
    font-size 0.12rem
    color #646464
    padding 0 0.1rem

    .tnTtitle
      color #383838

    .DpriceNum
      color #F23340

      i
        font-style normal

.declare
  margin 0.2rem 0 0.89rem
  text-align center
  display inline-block
  width 100%

  a
    font-size 12px
    color #9b9b9b
    text-decoration none
    border-bottom 1px solid #9b9b9b

.settle-tools
  position fixed
  left 0
  bottom 0
  height 0.57rem
  width 100%
  z-index 99
  background #fff
  text-align right
  border-top none
  box-shadow 0 0 2px 0 #dedede

  .text
    color #646464
    font-size 12px
    margin-right 0.12rem
    padding 0.2rem 1.12rem 0.2rem 0.1rem
    line-height 0.15rem
    font-weight 400

    strong
      color #F23340
      font-weight 400

      i
        font-size 16px
        font-style normal

  .btn
    position absolute
    top 0
    right 0
    width 1.07rem
    height 0.6rem
    line-height 0.58rem
    text-align center
    color #fff
    background-color #F23340
    font-size 17px
    float right
</style>