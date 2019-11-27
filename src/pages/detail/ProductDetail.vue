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
        <ProductInfo></ProductInfo>
        <!-- 物流运费 -->
        <LogisticsFreightServer></LogisticsFreightServer>
        <!-- 选择规格 -->
        <div data-v-0a7494f4 data-v-2c8e1059 class="sku-wrap">
          <div class="sku-btn" @click="showClick">
            <span data-v-0a7494f4 class="tag">选择</span>
            <span data-v-0a7494f4 class="value">规格</span>
          </div>
          <div data-v-0a7494f4 class="sku-pop-layer" v-show="isShow"></div>
          <transition
            enter-active-class="animated slideInUp"
            leave-active-class="animated slideOutDown"
          >
            <div data-v-0a7494f4 class="sku-pop" v-show="isShow">
              <div data-v-0a7494f4 class="sku-content">
                <div data-v-0a7494f4 class="sku-info">
                  <img class="pic" :src="img" alt />
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
                    <input
                      data-v-0a7494f4
                      type="button"
                      value="-"
                      @click="reduceNum"
                      class="btn-minus"
                    />
                    <span data-v-0a7494f4 class="num">{{obj.num}}</span>
                    <input data-v-0a7494f4 type="button" value="+" @click="addNum" class="btn-plus" />
                  </div>
                </div>
              </div>
              <div data-v-0a7494f4 class="preorder-pop-layer preorder-pop-layer-active"></div>
              <div data-v-0a7494f4 class="spec-confirm">
                <span class="half" @click="addCart(obj)">加入购物车</span>
                <span class="half">立即购买</span>
              </div>
              <div data-v-0a7494f4 class="close" @click="closeClick"></div>
            </div>
          </transition>
        </div>
        <!-- 买家评价 -->
        <BuyerRate :id="id"></BuyerRate>
        <!-- 商家信息 -->
        <Seller></Seller>
        <div data-v-2c8e1059 class="zhengpin">
          <img data-v-2c8e1059 src="//s1.ymatou.com/itemm/static/img/zhengpin.855bfb9.png" />
        </div>
        <!-- 详情 -->
        <ImageText :id="id"></ImageText>
        <!-- 猜你喜欢 -->
        <Interested></Interested>
        <!-- 加购购买 -->
        <div data-v-2c8e1059 class="operate-wrap notIphoneX" v-show="true">
          <div data-v-2c8e1059 class="left">
            <span class="collection">
              <i data-v-2c8e1059 class="icon icon-collect"></i>
              <i data-v-2c8e1059 class="text">收藏</i>
            </span>
          </div>
          <div data-v-2c8e1059 class="right">
            <span class="addCart" @click="showClick">加入购物车</span>
            <span class="buy" @click="showClick">立即购买</span>
          </div>
        </div>
        <!-- 加购提示 -->
        <div class="outputlog" v-show="successShow">
          <strong class="text">哈尼，我在购物车等你哦~</strong>
        </div>
        <div class="outputlog" v-show="failShow">
          <strong class="text">小主快去登录，再来赎我！</strong>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoadBanner from "components/home/LoadBanner";
import ProductInfo from "./ProductInfo";
import LogisticsFreightServer from "./LogisticsFreightServer";
import SkuPop from "./SkuPop";
import BuyerRate from "./BuyerRate";
import ImageText from "./ImageText";
import Interested from "components/home/Interested";
import Seller from "./Seller";

import { ADDCART } from "store/modules/action-types";

import store from "../../../node_modules/store/dist/store.legacy";

export default {
  data() {
    return {
      id: this.$route.query.id || store.get("info").id,
      img: this.$route.params.img || store.get("info").img,
      isShow: false,
      isSelected: false,
      successShow: false,
      failShow: false,

      obj: store.get("info")
    };
  },

  components: {
    LoadBanner,
    ProductInfo,
    LogisticsFreightServer,
    SkuPop,
    BuyerRate,
    ImageText,
    Interested,
    Seller
  },

  mounted() {
    //图片拖拽
    var mySwiper = new Swiper(".swiper-container", {
      pagination: {
        el: ".swiper-pagination",
        type: "fraction"
      }
    });
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
      if (this.obj.num > 1) {
        this.obj.num--;
      }
    },
    addNum() {
      this.obj.num++;
    },
    addCart(obj) {
      let phoneNumber = store.get("phoneNumber");
      if (phoneNumber) {
        this.isShow = false;
        this.successShow = true;
        setTimeout(() => {
          this.successShow = false;
        }, 2000);

        this.$store.dispatch("cart/" + ADDCART, obj);
      } else {
        this.failShow = true;
        setTimeout(() => {
          this.failShow = false;
        }, 2000);
      }
    }
  },

  watch: {
    $route() {
      this.$router.go(0);
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

      .zhengpin
        width 100%
        margin 0.1rem 0
        overflow hidden
        font-size 0

        img
          width 100%
          display inline-block
          overflow hidden

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

.outputlog
  z-index 999999999
  position fixed
  width 40%
  height 10%
  left 30%
  top 40%
  word-break break-all
  text-align center

  .text
    padding 0.14rem 0.18rem
    font-size 0.16rem
    font-weight normal
    display inline-block
    background-color black
    color white
    opacity 0.75
    border-radius 10px
</style>