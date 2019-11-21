<template>
  <div class="profile-wrap">
    <div class="person-bar">
      <div class="back"></div>
      <div class="top-title">个人中心</div>
      <router-link to="/shoppingcart">
        <div class="top-shopcart">
          <i class="img"></i>
        </div>
      </router-link>
      <router-link to="/home">
        <div class="top-home">
          <i class="img"></i>
        </div>
      </router-link>
    </div>
    <div class="p-container">
      <div class="p-header">
        <div class="info">
          <span
            class="avatar"
            style="background-image: url(http://s1.ymatou.com/homem/images/share_personal-9287711f0c.png)"
          ></span>
          <span class="name tologin">请登录</span>
        </div>
      </div>
      <div class="p-content">
        <ul class="p-items">
          <li class="item">
            <a class="tologin" module_name="my_discount" module_index>
              <div class="p-title">我的订单</div>
              <span class="a-right"></span>
            </a>
          </li>
          <li class="item">
            <a class="tologin" module_name="my_orders" module_index>
              <div class="p-title">我的优惠券</div>
              <span class="a-right"></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
.profile-wrap
  .person-bar
    background #fff
    width 100%
    position relative
    display block

    .top-title
      width 100%
      color #515151
      font-size 0.17rem
      text-align center
      line-height 0.4rem
      display inline-block

    .top-shopcart
      position absolute
      width 0.4rem
      height 0.4rem
      right 0.4rem
      top 0

      .img
        display inline-block
        width 0.16rem
        height 0.16rem
        margin-top 0.13rem
        margin-left 0.12rem
        background url('https://s1.ymatou.com/myorderm/images/shopcarticon-0876af36d4.png') no-repeat
        background-size contain

    .top-home
      position absolute
      width 0.4rem
      height 0.4rem
      top 0
      right 0

      .img
        display inline-block
        width 0.16rem
        height 0.15rem
        margin-top 0.14rem
        margin-left 0.1rem
        background url('https://s1.ymatou.com/myorderm/images/gohome-9efcb7cb30.png') no-repeat
        background-size contain

  .p-container
    .p-header
      color #fff
      width 10rem
      height 1.08rem
      background url('https://s1.ymatou.com/myorderm/images/person-bg-c26f0f5750.png') no-repeat
      background-size 3.7rem 1.08rem
      padding-top 0.25rem

      .info
        margin-left 0.3rem
        display flex
        align-items center

        .avatar
          width 0.6rem
          height 0.6rem
          border-radius 100%
          background-size cover
          display inline-block

        .name
          font-size 16px
          padding-left 0.1rem
          display inline-block

    .p-content
      width 100%
      margin-top 0.11rem

      .p-items
        color #515151
        background #fff
        padding 0 0 0 0.15rem

        .item
          background #fff
          height 0.43rem
          border-bottom 0.005rem solid #dedede

          a
            height 0.43rem
            display flex
            justify-content space-between
            align-items center

            .p-title
              display flex
              -webkit-display flex
              align-items center
              text-indent 0.15rem
              font-size 0.14rem
              color #292929

            .a-right
              width 0.09rem
              height 0.17rem
              background url('https://s1.ymatou.com/myorderm/images/p_arrowright-23118a5433.png') no-repeat
              background-size cover
              margin-right 0.11rem
</style>