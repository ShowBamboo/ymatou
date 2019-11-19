<template>
  <div class="detail-wrap">
    <!-- 广告 -->
    <LoadBanner></LoadBanner>
    <!-- 导航 -->
    <div id="load-waptopbar" class="detailloadwaptopbar">
      <div class="loadtopnav">
        <router-link tag="a" to="/home">
          <img src="../../assets/img/communitylogo.png" alt />
        </router-link>
        <div class="nav" id="load-nav-content">
          <router-link tag="a" to="/shoppingcart">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAABDBJREFUWAnNmMtPVHcUx2eGiRlJkSkQ2wKtVuqDxppKJ2pNcOGiaVx1xa4pCW8IETasmsjOSEJiAk0IISHddWNcuPIvECijSbWxVSxiCkVEoDzkNTB+vj/v3FzC3HEwcyee5Mw5v9c53985v8f9jb+uru62z+e7CPvi8fhLxK1QKHSlt7d3SnXZpgAgZnH6wuJ8ZO36+vpIfX39J9kGI39+p9OOjo68+fn5XwD5I/W/DgwMVDvbs6HvACSH7e3t+5eXlydRQyUlJQWdnZ1r2QCS8LELkBpYVzeJ0g+oEaIUJX1nKd+gnKd2D2gJm4ME4ErQxfgj1QcCgSOIqEufTFUz1/jHGPt5ampqwg3Qv/JGx08l+/v7hxGl0r2gxsbGk7FY7A/8tQRcHExY9Ydd2jNa3dfX9wCD/8NFSQH5/f5xy+PnGfXsYoyNIxy5sD8poHA4/FRjCeFhSa9pZmamBB/74ImkgLq6upaI0ix8xGswss/6Kbf8/JUUkBqJzj9wbnNzs3aAp4SfU3KAvO8KiOg8UafNzc1sROkb+cLnPVdAipA6QWVvhKe/AhTnUncHBNoxC8IXXkJpbW09wOTl40lPT89iqgiZlNHR0witrq5G8KErbAT2uQLi2shKhMBwzgAJBHQbuAPiuviP9hUrnOrrCbE0zsswfu5IukZIjZDSVtjW1hY2pQz/AMIPfwuoV9z092T+bYBM2sizJwu7paXlBBgK4GGuj9hbASV22vb2dsYB8c11jDOuXyAgfdcbCiaUZBJAjwmpDqyjydo5xT/Y2NgIB4NBpTQf4EZKt8pGMl5b+4Ak9frI+4iy7i/ZHuL8uS5dlBIQgx6rE9IGxNdjF45rqM4HTI7auYskXInxpi0hARGD78ODxcXFPYl0qVNKQDk5OWNyhiE7ZYA5iKEQY2eoX0AuUJbU90xCSreZI2SRcYtEUrxUWVk5V1VVtUWfvREO/eR6BdYzKSuUcpcxczDFx+CipqamD7OBKCUgC8CQ5NbWVrVV9lQkfQY5PTY0NHxJ/n8nSrlE7DfabiJNCpEB2owN1skuW7SZ1UybkUzKLqtOZa1Tvqn1DjS0y0iiwSnZWd9hXGfGIWd9hvSF0tLSQnbatuylBUgdrRftJVR9bpYRMY19Y4S1hm5mj3SSsW/11Zljly1di/Quj1H7HHIOfi/0tCPEY+40Z9JlZrbGrK4xq/F3mUFtbe1FxtVgZxq+yleF/n2xKS1A+muGNfQ3o8zbHkPPuJ2Pk/c9/RHBefY1kxnFjjnhkSNM7KyNBiWdba/cX6Cv/UcDRj+bnJz8ymkoHR0739MvAUZDzjDZIufYtACxRR8yyF60GF6F95wyxvzpdI4+zV0256xzonXW79BHR0efV1RU6OF4Gp4FYCO5j+7olEYhGo0+ikQieqGWa0LY+am7u3vCOfQ1FMOqWXI8tOIAAAAASUVORK5CYII="
              alt="购物车"
            />
          </router-link>
          <router-link tag="a" to="/home">
            <img
              src="data:image/png;base64,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"
              alt="首页"
            />
          </router-link>
          <router-link tag="a" to="/profile">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAABPVJREFUWAm9mGtoW2UYx5tLSzNa2g6dbRLsqA5UFMW6yr5YpjUqm34QVjeGitg2abvQdUhBEU39MF0N9EPtvVOng3lBmQ6lTtQP3l0rzqkfBAVrm8Q6V5i01qQXf8/hZJ5kPW9Oos0LL+/leZ7/83+f93qOrSCH1N7eXp1IJO5dWVnZYbPZrlhdXa0EZoEcof2V3W4/Tt/4yMhIIlt4WzYGwWDw0sXFxRA2LTh0qmwh9hPyx0ZHR19T6aXLLBPy+/03LS8vvwWAWwd5H6dvQuwU7d+obyAy1ejcQXuPQe8Fr9cbCIVCcd1OWVgiBJltTM8HOHfh+AyO/cPDw5+bIXd2drrm5+cPoB/SIznu8/l2NjY2LpvZJPszEgoEAp6lpaUJDCoh805ZWdl94XB4PgmgKpuamm5Ffpxcim0v03dApS8yeyYFpuBZdITM1yUlJbuskhHcsbGxDx0Ox15sV4jU/paWlhsz+VMSYqquB2i3AAL0QG9v71+ZANPlTO0J+l4k28A6mC5PbysJAbBXgMivEu7v042ttgsLC0P6oG7v6Oi4TGWXidDdYgxYVls33eHAwMCv9H3BAO0LCws70uXGtikhtqkdgC268idGoxzrGgaDu0plb0podnZ2E4YOABKsgz9UIFZkDC4qehwfVSp9U0JCRAwlzN3d3RmPB5UTkYGnneyUSypdU0L9/f0SFTldHbFYTDkqlQODzCt1CEUMfRdVTQnpxqel5GC87SLLLDuIdBLjG5VpJkJyd8mo7leBZJI1NzffgM615Hh5efm4Sl9JCMOXIfM3o2vQrwEVlqkM+6dFCNYrPT09f5oqIlAS4j0zBdhzOthLHP1ZryWiI/fXnTKwoqKiJ1RkRKYkJAqAhAA7AzEPW/Ykl+1m6beSiGo7dj267n42yi+Z7CxtZyHBJfsx4F7InSU/7na7D3N4rrmFW1tba9gIz6C/Swigf5q81coL0hIhAW1ra6vk2SpP05ulTZLn6tuUp3gfxSC8gfZm5D7K7ZQpL0r6fkC3mTvxMzE2S0pCzP9WDPfxBmqTZwcRcUYikYdx9iTZdD3hPIH8KE+PMES3gfEU2U2/RDQIqSHKNZMpIcjUA3oCkPPFxcXX9PX1nU8iCLFoNFovj3z6aoQcenKIyqH3Jbf76/qFqpl0dXWVzs3NjaC3W+soKAjxVurW6ynFmoQgcxdab5BjTqezYXBw8OcUqxwb7NIuBnFIzJnmIGtK28FGOIexIXXWypUYfUR1ipBvHxoamkrXybU9OTn5aW1t7SL2DWRfXV3dexMTEzNGvJRtT0ht8Xj8sCgwBTshk6JsNMy1zvo5BPYxfDlZX0eZ/mIjVgohQroP4S0YPEo45btqXVJFRYUfH9OQ2jI9PR0wOrmwhoQpwiiK30FGSK0aFf/vOu/1h4jQ8/iZ9Xg81fiXqfz3pJ6ZmbmHdjmsw+tNRhxXVVUdwY9cTZs4SrSnsvRfmDIED6JwltX/rgjWOxER+TQ6In4o9yT9aYRYO5fQIZ/Ax6wc70nj/1oyePmIFEL1SSyNENv8ajrkCJDtnrfEffgtsyJ/TTbKcSOONUJ0Xi4NmE5Jma/EtMlV8qP44zKukVIjRKkRcrlceSUkBAiC9kVDuVHaSUKl1M9xX/0unXlO2hcxs3RO/GqEuAwP8hBLPivyyoeF/Qj35XVsppN5dWzV2T/Y7//hq6F8rwAAAABJRU5ErkJggg=="
              alt="个人中心"
            />
          </router-link>
        </div>
      </div>
    </div>
    <!-- 主体 -->
    <div id="app">
      <div data-v-2c8e1059 class="detail-wrap">
        <!-- 图片 -->
        <div data-v-2c8e1059 class="swiper-wrap">
          <div class="product-pic-container swiper-container swiper-container-horizontal">
            <div data-v-09764895 class="product-pic-list swiper-wrapper">
              <div data-v-09764895 class="product-pic-wrapper swiper-slide swiper-slide-active">
                <img class="product-pic" :src="img" alt />
              </div>
              <div data-v-09764895 class="product-pic-wrapper swiper-slide swiper-slide-next">
                <img
                  class="product-pic"
                  src="http://pic1.ymatou.com/G02/shangou/M02/E8/44/CgvUBVvPW0SAedWrAARl23z8OFo832_1_1_n_w_o.jpg"
                />
              </div>
              <div data-v-09764895 class="product-pic-wrapper swiper-slide">
                <img
                  class="product-pic"
                  src="http://pic1.ymatou.com/G02/shangou/M04/E1/F9/CgvUA1vPW_OAcPI4AAagwE3Z35Q798_1_1_n_w_o.jpg"
                />
              </div>
            </div>
            <div class="swiper-pagination swiper-pagination-custom"></div>
          </div>
        </div>
        <!-- 商品信息 -->
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
        <!-- 物流运费 -->
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
        <!-- 加购购买 -->
        <div data-v-2c8e1059 class="operate-wrap notIphoneX" v-show="true">
          <div data-v-2c8e1059 class="left">
            <span
              data-v-2c8e1059
              module_index
              module_name="bar_bottom"
              sub_module_name="collect"
              sproductid="04f8bcd8-a103-40e0-8fa7-1e11bb19308f"
              sellerid="20927755"
              class="collection"
            >
              <i data-v-2c8e1059 class="icon icon-collect"></i>
              <i data-v-2c8e1059 class="text">收藏</i>
            </span>
          </div>
          <div data-v-2c8e1059 class="right">
            <span
              data-v-2c8e1059
              module_index
              module_name="bar_bottom"
              sub_module_name="add_to_shoppingcart"
              sproductid="04f8bcd8-a103-40e0-8fa7-1e11bb19308f"
              sellerid="20927755"
              class="addCart"
            >加入购物车</span>
            <span
              data-v-2c8e1059
              module_index
              module_name="bar_bottom"
              sub_module_name="go_buy"
              sproductid="04f8bcd8-a103-40e0-8fa7-1e11bb19308f"
              sellerid="20927755"
              class="buy"
            >立即购买</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoadBanner from "components/home/LoadBanner";

export default {
  data() {
    return {
      isCouponShow: false,
      islogisticsShow: false,
      isServerShow: false,
      isMaskShow: false,
      id: "",
      name: "",
      price: "",
      img: ""
    };
  },
  components: {
    LoadBanner
  },
  mounted() {
    let { id, name, price, img } = this.$route.query;
    this.name = name;
    this.price = price;
    this.img = img;

    //图片拖拽
    var mySwiper = new Swiper(".swiper-container", {
      pagination: {
        el: ".swiper-pagination",
        type: "fraction"
      }
    });
  },
  methods: {
    //领券
    couponClick() {
      this.isCouponShow = true;
    },
    closeClick() {
      this.isCouponShow = false;
    },
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
.detail-wrap
  // 广告
  .loadbanner
    width 100%
    position relative

    .loadbanner-bgcover
      img
        width 100%

    .loadbanner-close
      position absolute
      top 0
      left 0
      width 8%
      height 100%

  // 导航
  .detailloadwaptopbar
    width 100%
    background #fff
    border-bottom 1px solid #DEDEDE

    .loadtopnav
      width 100%
      height 40px
      display flex
      justify-content space-between

      a
        height 100%

        img
          height 100%

      .nav
        a
          display inline-block
          width 0.4rem
          height 0.4rem
          text-align center
          line-height 0.4rem

          img
            height 0.18rem

  // 主体
  #app
    .detail-wrap
      width 100%
      overflow hidden
      margin-bottom 0.5rem

      .swiper-wrap
        .product-pic-container
          width 100%
          height 3.65rem
          overflow hidden
          position relative
          background-color #fff

          .product-pic-list
            height 100%
            white-space nowrap
            font-size 0
            text-align center

            .product-pic-wrapper
              display inline-block
              height 100%

              .product-pic
                height 100%
                background-color #f1f1f1

          .swiper-pagination
            width 40px
            height 16px
            font-size 0.12rem
            color #fff
            background-color #252525
            border-radius 0.05rem
            padding 0 0.06rem
            text-align center
            position absolute
            bottom 0
            left auto !important
            right 0.08rem
            text-shadow 0 1px 1px rgba(56, 56, 56, 0.5)

            &:after
              content ''
              display block
              width 0
              height 0
              border-style solid
              border-width 0.05rem 0 0.05rem 0.06rem
              border-color transparent transparent transparent #000
              position absolute
              right -0.05rem
              top 50%
              transform translateY(-50%)
              -webkit-transform translateY(-50%)

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

      .operate-wrap
        position fixed
        bottom 0
        width 100%
        left 0
        height 0.45rem
        background-color #fff
        z-index 11

        .left
          width 40%
          height 0.45rem
          float left
          display flex
          display -webkit-flex
          border-top 1px solid #dedede

          span
            flex 1
            -webkit-flex 1
            text-align center
            font-size 0
            padding-top 0.06rem

            i.icon-collect
              background-image url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAA8lJREFUWAnFl8kvbFEQxquvJuYgiIUQMQ8JMS2IMQgLCwvxR1pYSMwRQ1iYQowxBokIghBDTO/51Xv35tKud9vTrRLd1zmn6vvuOXWqvvb8ejX5QTN+EFuhve8JsCHb29uyt7cnZ2dncnd3J6GhoRIXFydpaWmSl5cn4eHh7930//v7e9nY2JCDgwO5vLyUx8dHiYiIkMTERMnIyJCsrCzxeDxvfD32Izg+PpaJiQl1ZhVAkZGR8vDwIDc3NwI5yFRUVEhRUdGbQCsrKzI7O6uggERFRUlYWJjc3t4KxDBeora2VlJSUixfiwBvPTY2Ji8vL8q2rKxMEhISrIXsxOrqqiwuLuqa/Px8qamp0fnJyUlZX18XwzCkpKRECgsL9c1N5/Pzc5mfn9ddZU1DQ4NkZmbqtBI4OTmR3t5eCQkJkerqasnOzjZ9fb7Z2pGRESFoVVWVzk9PTyvZpqYmfUsfp78DW1tbMjU1Jc/Pz9Le3i7JycmiBLq7u+Xi4kIaGxv1nJwCmOMcR09Pj7W1HFVHR4duu7nG6ZudHh0dlfj4eOns7BRjd3dXwdPT012BE5jzbW1tlZiYGP3jmTE3RiKCxQuD7SXbMRLLHyOzu7q6/HGx1oK1v7//JydOT081YewJZ60M0ANYXE+wDa5JdHR0gKCcw4IJ9uutMPRaOS8NzAzXHWyDDOaOB9vABNugOrEVXK1gGVhggm2kpqYq7uHhYbDwxcQC2+BOchbLy8tBIwAWmIpNMaE4UBg2NzcDTgIMsMAEW/UAjYcuR02/uroKGAligwEWmJgSgAlNiLZLo6GPf7cRk9hggAUmZiminJwcyc3NVREyODioHeu7SND9iInAAQMs0ywCDCAWSIyjoyPp6+v7lp3gzYlFTGKDYTdLkJiDsGWraBZJSUna9ajbXzGKzcDAgNZ8wNELaA67+RBgEumFOkJAcFZtbW2fCg17QPMZ4dLf3y/X19cqcOrr6330IGs/JGAGmZubk4WFBdV2iBVEqRtDlCI6SLjS0lIpLy93dPuUAF47OzsyPj6uSVlZWSnFxcWOwZhYWlqSmZkZ3eq6ujpL+zk5/ZMAjmjGoaEhrd/Ia7aTu2w3ko1jQ+CgpFtaWlTz2dd89OyKAI40kOHhYSVDE2lublZdxxyVjTnOHaHJnFuJ5poAQPRwKtna2pp4vV4tKIyjdJ+enqSgoECVMnXerflFwAxKXvADxqyYHAf329T65jo3318iQGDqOvUC437Hxsbqs78fXyYAEPUCe/97Twddfvj8OHXpp8v+B9jE+Q3W5+tsXCx8gQAAAABJRU5ErkJggg==')
              background-size cover

            i.icon
              width 0.16rem
              height 0.16rem

            i.text
              padding-top 0.02rem
              font-size 0.12rem
              color #999

            i
              display inline-block
              width 100%

        .right
          width 60%
          float right
          display flex
          display -webkit-flex
          font-size 0

          span
            flex 1
            -webkit-flex 1
            color #fff
            font-size 0.15rem
            text-align center
            line-height 0.45rem

          span.addCart
            background-color rgba(242, 143, 37, 0.8)

          span.buy
            background-color #c33

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