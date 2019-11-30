<template>
  <div class="shopcart">
    <div data-v-e282b9cc class="topbar">
      <div data-v-e282b9cc class="top-title">购物车({{list.length}})</div>
      <div data-v-e282b9cc class="top-home">
        <router-link to="/home" tag="a">
          <img
            data-v-e282b9cc
            src="data:image/png;base64,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"
          />
        </router-link>
      </div>
      <div data-v-e282b9cc class="top-user">
        <router-link to="/profile" tag="a">
          <img
            data-v-e282b9cc
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAABPVJREFUWAm9mGtoW2UYx5tLSzNa2g6dbRLsqA5UFMW6yr5YpjUqm34QVjeGitg2abvQdUhBEU39MF0N9EPtvVOng3lBmQ6lTtQP3l0rzqkfBAVrm8Q6V5i01qQXf8/hZJ5kPW9Oos0LL+/leZ7/83+f93qOrSCH1N7eXp1IJO5dWVnZYbPZrlhdXa0EZoEcof2V3W4/Tt/4yMhIIlt4WzYGwWDw0sXFxRA2LTh0qmwh9hPyx0ZHR19T6aXLLBPy+/03LS8vvwWAWwd5H6dvQuwU7d+obyAy1ejcQXuPQe8Fr9cbCIVCcd1OWVgiBJltTM8HOHfh+AyO/cPDw5+bIXd2drrm5+cPoB/SIznu8/l2NjY2LpvZJPszEgoEAp6lpaUJDCoh805ZWdl94XB4PgmgKpuamm5Ffpxcim0v03dApS8yeyYFpuBZdITM1yUlJbuskhHcsbGxDx0Ox15sV4jU/paWlhsz+VMSYqquB2i3AAL0QG9v71+ZANPlTO0J+l4k28A6mC5PbysJAbBXgMivEu7v042ttgsLC0P6oG7v6Oi4TGWXidDdYgxYVls33eHAwMCv9H3BAO0LCws70uXGtikhtqkdgC268idGoxzrGgaDu0plb0podnZ2E4YOABKsgz9UIFZkDC4qehwfVSp9U0JCRAwlzN3d3RmPB5UTkYGnneyUSypdU0L9/f0SFTldHbFYTDkqlQODzCt1CEUMfRdVTQnpxqel5GC87SLLLDuIdBLjG5VpJkJyd8mo7leBZJI1NzffgM615Hh5efm4Sl9JCMOXIfM3o2vQrwEVlqkM+6dFCNYrPT09f5oqIlAS4j0zBdhzOthLHP1ZryWiI/fXnTKwoqKiJ1RkRKYkJAqAhAA7AzEPW/Ykl+1m6beSiGo7dj267n42yi+Z7CxtZyHBJfsx4F7InSU/7na7D3N4rrmFW1tba9gIz6C/Swigf5q81coL0hIhAW1ra6vk2SpP05ulTZLn6tuUp3gfxSC8gfZm5D7K7ZQpL0r6fkC3mTvxMzE2S0pCzP9WDPfxBmqTZwcRcUYikYdx9iTZdD3hPIH8KE+PMES3gfEU2U2/RDQIqSHKNZMpIcjUA3oCkPPFxcXX9PX1nU8iCLFoNFovj3z6aoQcenKIyqH3Jbf76/qFqpl0dXWVzs3NjaC3W+soKAjxVurW6ynFmoQgcxdab5BjTqezYXBw8OcUqxwb7NIuBnFIzJnmIGtK28FGOIexIXXWypUYfUR1ipBvHxoamkrXybU9OTn5aW1t7SL2DWRfXV3dexMTEzNGvJRtT0ht8Xj8sCgwBTshk6JsNMy1zvo5BPYxfDlZX0eZ/mIjVgohQroP4S0YPEo45btqXVJFRYUfH9OQ2jI9PR0wOrmwhoQpwiiK30FGSK0aFf/vOu/1h4jQ8/iZ9Xg81fiXqfz3pJ6ZmbmHdjmsw+tNRhxXVVUdwY9cTZs4SrSnsvRfmDIED6JwltX/rgjWOxER+TQ6In4o9yT9aYRYO5fQIZ/Ax6wc70nj/1oyePmIFEL1SSyNENv8ajrkCJDtnrfEffgtsyJ/TTbKcSOONUJ0Xi4NmE5Jma/EtMlV8qP44zKukVIjRKkRcrlceSUkBAiC9kVDuVHaSUKl1M9xX/0unXlO2hcxs3RO/GqEuAwP8hBLPivyyoeF/Qj35XVsppN5dWzV2T/Y7//hq6F8rwAAAABJRU5ErkJggg=="
          />
        </router-link>
      </div>
    </div>

    <div data-v-e282b9cc class="notice">海外买手会根据现行国家政策要求，通过不同的物流方式分别发货，其实对你没有影响啦~放心买，买大块的~</div>

    <div data-v-e282b9cc class="seller-wrap" v-if="list.length > 0">
      <div data-v-031042ee data-v-e282b9cc class="seller" v-for="item in list" :key="item.id">
        <div data-v-031042ee class="seller-info">
          <div data-v-031042ee class="checkbox-box">
            <!-- <i data-v-031042ee class="switch" :class="{active:isActive}"></i> -->
          </div>
          <div data-v-031042ee class="info">
            <div data-v-031042ee class="head-img">
              <img class="img lazyload transition" :src="item.avatarUrl" alt />
              <!---->
            </div>
            <div data-v-031042ee class="desc">
              <span data-v-031042ee class="name">{{item.sellerName}}</span>
              <span data-v-031042ee class="country">
                <img data-v-031042ee :src="item.countryIconUrl" class="img" />
                {{item.countryName}}
              </span>
            </div>
          </div>
          <div data-v-031042ee class="spacing"></div>
        </div>
        <div data-v-031042ee class="promotion-wrap">
          <div data-v-1f07854a data-v-031042ee class="promotion">
            <div data-v-1f07854a class="product-list">
              <div data-v-4d071ed4 data-v-1f07854a class="product">
                <div data-v-4d071ed4 class="content">
                  <span data-v-4d071ed4 class="checkbox-box">
                    <i
                      data-v-4d071ed4
                      class="switch"
                      :class="{active:isActive}"
                      @click="singleChoosed($event,item.price,item.num)"
                    ></i>
                  </span>
                  <div
                    data-v-4d071ed4
                    class="prod-warp"
                    @click="gotoDetail(item.id,item.name,item.img)"
                  >
                    <div data-v-4d071ed4 class="prod-info">
                      <div data-v-4d071ed4 class="pic">
                        <img
                          data-v-4d071ed4
                          class="lazyload transition"
                          :src="item.img"
                          style="opacity: 1;"
                        />
                      </div>
                      <div data-v-4d071ed4 class="desc">
                        <div data-v-4d071ed4 class="name">
                          <i data-v-4d071ed4 class="tag-taxes">包邮包税</i>
                          <span data-v-4d071ed4>{{item.name}}</span>
                        </div>
                        <div data-v-4d071ed4 class="sku">规格分类:红吕护发素400g</div>
                        <!-- <div data-v-4d071ed4 class="preadd-desc"></div> -->
                        <div data-v-4d071ed4 class="serve">
                          <span data-v-4d071ed4 class="tag-py">拼邮</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-v-4d071ed4 class="operation">
                    <div data-v-4d071ed4 class="price">¥ {{item.price}}</div>

                    <div data-v-4d071ed4 class="amount">
                      <span class="mini" @click="mini($event,item.id,item.num,item.price)">一</span>
                      <span class="num">{{item.num}}</span>
                      <span class="plus" @click="plus($event,item.id,item.price)">+</span>
                    </div>
                    <div class="delete" @click="deleteClick(item.id)">
                      <i></i>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="mask" :class="{show:isShow}"></div>
                  <div class="dialog-wrapper" :class="{show:isShow}">
                    <div class="dialog-content">
                      <div class="content">
                        很抢手哦，下次不一定能遇到，
                        确认要删除吗？
                      </div>
                      <div data-v-184b9004 class="two-btn">
                        <span @click="cancelDelete">取消</span>
                        <span @click="sureDelete">删除</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div data-v-e282b9cc class="nodata" v-else>
      <div data-v-e282b9cc class="content">
        <img data-v-e282b9cc src="//s1.ymatou.com/shoppingcartm/static/img/nodata.f569491.png" />
        <span data-v-e282b9cc>你离开后的世界，空空如也</span>
      </div>
    </div>

    <Interested></Interested>

    <div data-v-e282b9cc class="operate-wrap">
      <div data-v-0c59cb10 data-v-e282b9cc class="operate notIphoneX">
        <div data-v-0c59cb10 class="btn-choose">
          <span data-v-0c59cb10 module_name="select_all" module_index class="checkbox-box">
            <i data-v-0c59cb10 class="switch" :class="{active:isActive}" @click="allChoosed"></i>
          </span>
          <span data-v-0c59cb10 class="text">全选</span>
        </div>
        <div data-v-0c59cb10 class="desc">
          <span data-v-0c59cb10 class="price">
            总价：
            <i data-v-0c59cb10>¥ {{totalPrice}}</i>
          </span>
          <span data-v-0c59cb10 class="carriage">( 不含运费)</span>
        </div>
        <div data-v-0c59cb10 class="btn-goorder" :class="{disabled:isDisabled}">去结算</div>
      </div>
    </div>
  </div>
</template>

<script>
import Interested from "components/home/Interested";

import { PLUS, MINI, DELETE } from "store/modules/action-types";

export default {
  data() {
    return {
      isActive: false,
      totalPrice: 0,
      isDisabled: true,
      isShow: false,
      deleteId: 0
    };
  },

  components: {
    Interested
  },

  computed: {
    list() {
      return this.$store.state.cart.list;
    }
  },

  methods: {
    singleChoosed(ev, price, num) {
      if (ev.target.className.indexOf("active") != -1) {
        ev.target.className = "switch";

        this.totalPrice =
          Math.round((this.totalPrice - price * num) * 100) / 100;
      } else {
        ev.target.className = "switch active";
        this.totalPrice =
          Math.round((this.totalPrice + price * num) * 100) / 100;
      }
      if (this.totalPrice === 0) {
        this.isDisabled = true;
      } else {
        this.isDisabled = false;
      }
    },

    allChoosed() {
      this.isActive = !this.isActive;
      if (this.isActive === true) {
        this.totalPrice = this.$store.state.cart.list.reduce((sum, value) => {
          return (sum += value.price * value.num);
        }, 0);
      } else {
        this.totalPrice = 0;
      }
      if (this.totalPrice === 0) {
        this.isDisabled = true;
      } else {
        this.isDisabled = false;
      }
    },

    mini(ev, id, num, price) {
      if (num > 1) {
        this.$store.dispatch("cart/" + MINI, id);
        if (
          ev.path[3].children[0].childNodes[0].className.indexOf("active") != -1
        ) {
          this.totalPrice = Math.round((this.totalPrice - price) * 100) / 100;
        }
      }
    },

    plus(ev, id, price) {
      this.$store.dispatch("cart/" + PLUS, id);
      if (
        ev.path[3].children[0].childNodes[0].className.indexOf("active") != -1
      ) {
        this.totalPrice = Math.round((this.totalPrice + price) * 100) / 100;
      }
    },

    deleteClick(id) {
      this.isShow = true;
      this.deleteId = id;
    },

    cancelDelete() {
      this.isShow = false;
    },

    sureDelete() {
      this.isShow = false;
      this.$store.dispatch("cart/" + DELETE, this.deleteId);
    },

    gotoDetail(id, name, img) {
      this.$router.push({
        name: "productdetail",
        query: {
          id
        },
        params: {
          name,
          img
        }
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
.shopcart
  width 100%
  overflow hidden
  padding-bottom 0.5rem

  .topbar
    background #fff
    width 100%
    position relative

    .top-title
      width 100%
      color #515151
      font-size 0.17rem
      text-align center
      line-height 0.4rem
      display inline-block

    .top-home
      position absolute
      width 0.4rem
      height 0.4rem
      right 0.4rem
      top 0

      img
        display inline-block
        height 0.17rem
        margin-top 0.13rem
        margin-left 0.1rem

    .top-user
      position absolute
      width 0.4rem
      height 0.4rem
      top 0
      right 0

      img
        display inline-block
        width 0.16rem
        height 0.17rem
        margin-top 0.13rem
        margin-left 0.12rem

  .nodata
    width 100%
    overflow hidden

    .content
      padding 2rem 0 2.8rem
      width 100%
      overflow hidden
      text-align center

      img
        display inline-block
        height 0.8rem

      span
        padding-top 0.1rem
        width 100%
        display inline-block
        color #646464
        font-size 0.14rem

  .operate-wrap
    .operate
      border-top 1px solid #f1f1f1
      z-index 11
      display flex

      .btn-choose
        width 0.8rem
        overflow hidden
        display flex

        .checkbox-box
          padding 0.12rem 0.06rem 0.1rem 0.1rem
          display inline-block
          overflow hidden

          .switch
            display inline-block
            width 0.2rem
            height 0.2rem
            border-radius 50%
            border 1px solid #9b9b9b
            background-color #fff
            position relative
            vertical-align middle

          .active
            background-color #c33
            border none

            &:before
              content ''
              display block
              width 0.09rem
              height 0.04rem
              border-width 1px
              border-style solid
              border-color transparent transparent #fff #fff
              position absolute
              left 50%
              top 38%
              transform translate(-50%, -50%) rotate(-45deg)
              -webkit-transform translate(-50%, -50%) rotate(-45deg)

        .text
          display inline-block
          line-height 0.23rem
          padding-top 0.15rem
          font-size 0.15rem
          color #646464

      .desc
        padding 0.08rem 0.1rem 0.06rem
        text-align right
        overflow hidden
        flex 1

        span
          display inline-block
          width 100%

        span.price
          line-height 0.2rem
          font-size 0.15rem
          color #383838
          float right

          i
            display inline-block
            line-height 0.2rem
            color #c33

        span.carriage
          float right
          font-size 0.12rem
          color #646464

      .btn-goorder
        width 1.12rem
        line-height 0.5rem
        background-color #c33
        text-align center
        color #fff

      .disabled
        background-color #9b9b9b

    .notIphoneX
      position fixed
      bottom 0
      width 100%
      left 0
      height 0.49rem
      background-color #fff

  .notice
    width 100%
    padding 0.1rem
    overflow hidden
    font-size 0.12rem
    line-height 0.18rem
    color #9b9b9b

  .seller-wrap
    overflow hidden

    .seller
      width 100%
      overflow hidden
      min-height 1.6rem
      margin-bottom 0.1rem
      position relative
      background #fff

      .seller-info
        width 100%
        overflow hidden
        padding 0.05rem 0
        height 0.5rem
        border-bottom 1px solid #dedede
        justify-content space-between
        display flex
        -webkit-justify-content space-between

        .checkbox-box
          padding-left 0.1rem
          padding-top 0.09rem
          width 0.42rem

          .switch
            display inline-block
            width 0.22rem
            height 0.22rem
            border-radius 50%
            border 1px solid #9b9b9b
            background-color #fff
            position relative
            vertical-align middle

          .active
            background-color #c33
            border none

            &:before
              content ''
              display block
              width 0.09rem
              height 0.04rem
              border-width 1px
              border-style solid
              border-color transparent transparent #fff #fff
              position absolute
              left 50%
              top 38%
              transform translate(-50%, -50%) rotate(-45deg)
              -webkit-transform translate(-50%, -50%) rotate(-45deg)

        .info
          display flex
          flex 1

          .head-img
            width 0.5rem
            height 0.4rem

            .img
              display inline-block
              width 0.4rem
              height 0.4rem
              border-radius 50%
              overflow hidden
              background-size cover
              background-repeat no-repeat
              border 1px solid #dedede

          .desc
            position relative
            height 0.4rem

            span
              display inline-block
              overflow hidden
              font-size 0
              float left

            span.name
              padding-top 0.05rem
              font-size 0.12rem
              color #646464
              line-height 0.17rem
              position relative
              padding-right 0.1rem
              min-width 1rem
              max-width 0.7rem
              text-overflow ellipsis
              -webkit-line-clamp 1
              overflow hidden
              white-space normal

            span.country
              position absolute
              left 0
              bottom 0.04rem
              padding 0 0 0 0.15rem
              font-size 0.12rem
              color #646464
              line-height 0.14rem
              vertical-align center
              text-overflow ellipsis
              -webkit-line-clamp 1
              overflow hidden
              white-space normal

              .img
                position absolute
                left 0
                top 0.01rem
                display inline-block
                width 0.12rem
                height 0.12rem
                border-radius 50%

      .promotion-wrap
        .promotion
          width 100%
          overflow hidden
          position relative
          border-bottom 1px solid #dedede

          .product-list
            .product
              width 100%
              overflow hidden
              padding 0.14rem 0 0.1rem

              .content
                width 100%
                overflow hidden
                display flex

                .checkbox-box
                  padding-left 0.1rem
                  padding-top 0.1rem
                  width 0.42rem
                  height 0.7rem
                  overflow hidden
                  display inline-block

                  .switch
                    display inline-block
                    width 0.22rem
                    height 0.22rem
                    border-radius 50%
                    border 1px solid #9b9b9b
                    background-color #fff
                    position relative
                    vertical-align middle

                  .active
                    background-color #c33
                    border none

                    &:before
                      content ''
                      display block
                      width 0.09rem
                      height 0.04rem
                      border-width 1px
                      border-style solid
                      border-color transparent transparent #fff #fff
                      position absolute
                      left 50%
                      top 38%
                      transform translate(-50%, -50%) rotate(-45deg)
                      -webkit-transform translate(-50%, -50%) rotate(-45deg)

                .prod-warp
                  overflow hidden
                  flex 1

                  .prod-info
                    width 100%
                    overflow hidden
                    display flex

                    .pic
                      width 0.7rem
                      margin-right 0.1rem
                      overflow hidden

                      img
                        height 0.7rem
                        width 0.7rem

                    .desc
                      flex 1
                      overflow hidden
                      padding-right 0.05rem

                      .name
                        width 100%
                        height 0.28rem
                        line-height 0.14rem
                        text-overflow ellipsis
                        -webkit-line-clamp 2
                        overflow hidden
                        white-space normal
                        font-size 0.12rem
                        color #383838

                        i
                          display inline-block
                          position relative
                          top -1px
                          margin 1px 0

                        i.tag-taxes
                          vertical-align middle
                          font-size 0.12rem
                          border 1px solid #c33
                          padding 0.01rem 0.02rem
                          margin-right 0.03rem
                          color #c33
                          line-height 0.1rem
                          border-radius 3px

                      .sku
                        margin 0.06rem 0
                        overflow hidden
                        min-height 0.12rem
                        font-size 0.12rem
                        color #9b9b9b

                      .preadd-desc
                        margin 0.06rem 0
                        min-height 0.12rem
                        font-size 0.12rem
                        color #c33
                        text-overflow ellipsis
                        -webkit-line-clamp 2
                        overflow hidden
                        white-space normal

                      .serve
                        width 100%
                        overflow hidden
                        font-size 0.12rem

                        span
                          display inline-block
                          line-height 0.12rem
                          padding-left 0.15rem
                          position relative
                          color #646464

                        span.tag-py
                          background-image url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAdVJREFUeNpiZICCfzk6CkCqHogDgFiAgTzwAYg3AHEj05QrD0ACjFDDDYDUfgoMxmaRI9CSC4xQl5+nouHIlhgyQYOF2oYzQM2sZ4KGOfGAk5eBQUgKwZfRwKc6gAmf6xknXwZjmCGMXlkMjF3HGBjz58MtYyxfDRGLacHqCxaiXP3kBpj6//YpJFWAfKDnBPEN1KL/l/Zh1cpEUvCc3MjA8O4ZxDdAXzE6xEDEQYbjsACUiv5jCxoMcPs0A4OqKV77/09Kgqgj6AOQImSFIPbTm5hiUN8wfP8M4YNoYnyA7pP/ubqQcAcaiCwGinQGz0yw4WDXkxsHjHnzGBgbd5KVGTB9AHQp2GWg8EZO78QALD7B7gNzfxTD/8/Ox4g8YgGmBaCIAya5/2s7EWIgPtBl/+vdEZaC4mX7dITLgXxs8YDVB2AXH1iCKQFLplhSC/E+wBdhyBmLSIC1qABHsooJSgHHGFwOL5P+Y/MdKT74j5ZrwRaCIh4kB4obaNlErA8+YJSoIAOgEQguxIB8RlCBBhJHcj3IIYzQQhBXpQPKB6CyN4GBNmABKIgaob6gNvgArvyhtb8jlS2BVfoPwJEMqv1BFTTISxRa9AFqhiHUTAaAAAMAsOi0UGoVLXUAAAAASUVORK5CYII=')
                          background-size contain
                          background-repeat no-repeat

                .operation
                  width 0.8rem
                  overflow hidden
                  padding-right 0.1rem
                  text-align right

                  .price
                    width 100%
                    text-align right
                    line-height 0.14rem
                    color #c33
                    font-size 0.14rem

                  .tag-price
                    width auto
                    margin-top 0.05rem
                    border-radius 0.03rem
                    color #fff
                    font-size 0.12rem
                    padding 0.01rem 0.03rem
                    line-height 0.14rem
                    text-align center
                    display inline-block
                    background-color #f6934d

                  .amount
                    width 0.9rem
                    position relative
                    right 0.15rem
                    margin-top 0.1rem
                    vertical-align middle
                    font-size 0

                    span
                      display inline-block

                    span.mini
                      font-size 0.12rem
                      border-top-left-radius 0.02rem
                      border-bottom-left-radius 0.02rem
                      width 0.2rem
                      display inline-block
                      border 1px solid #cecece
                      line-height 0.2rem
                      text-align center
                      color #cdcdcd
                      vertical-align top

                    span.num
                      width 0.3rem
                      line-height 0.2rem
                      color #383838
                      font-size 0.12rem
                      vertical-align middle
                      border-top 1px solid #cecece
                      border-bottom 1px solid #cecece
                      text-align center

                    span.plus
                      border-top-right-radius 0.02rem
                      border-bottom-right-radius 0.02rem
                      width 0.2rem
                      display inline-block
                      border 1px solid #cecece
                      line-height 0.2rem
                      font-size 0.16rem
                      text-align center
                      color #cdcdcd
                      vertical-align top

                  .delete
                    width 0.2rem
                    height 0.2rem
                    position relative
                    display inline-block
                    margin 0.1rem 0 0

                    i
                      width 0.14rem
                      height 0.15rem
                      position absolute
                      left 50%
                      top 50%
                      margin-top -0.07rem
                      margin-left -0.07rem
                      background-image url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAeCAYAAAA/xX6fAAAAAXNSR0IArs4c6QAAArpJREFUSA3dlj1oU1EUx33JI2kWBXEwCFKSgjhI28Wl4KJ2CEVbHLRQMMlLJgcHK1QRXEX8GHTLpyCICgaXKOoiOkgHh6pdNFBFDUVcOkgLyYu/W7yX++4LaMlLBi/cnHPP/d/zP+fcjxdr219apVIZarfbFzqdzinLsvYiLX0JNkydL9ju2bZ9JZPJrOvzpm6bBnPcarUeYpuiuzj+Kgh0zJ8ARrBdBjuGnNbnTV1FKxZWq9URFm2XoFAodMB13QokP7A5YL7LOV2C2wOuhG0X+mn0D3KerNfS6fQnGegmYaFQyGC4hsOdEhikxPdP/J3L5XJ3rFKpNENEjzBsMPEM0rUgyfC1g36UHg2Hw9M2BAuCgFIccRzntdCDbsVi8RA8Lzl8Cxbl/CUIyO560ESGv3nGbZvMLlLSm0RwyQD0Y3jWTiQStxuNxjcyHIb4Kixv0G8ExDZPIgfxdx5/n5PJZE1dC+o8zuRbJh7k8/mTQRCyXeIwztBH8bkkfIbEj96IxtXHQes+QrL0vCRBE3Z72lSG5XJ5in29xf2Z5I38KMkp1X1RCS7yrLRxn/cR61P6GcpXl3ZT+jLUS8riCfow90e8kaqBmWQgumoENiawGCaUsYviIwSjMuyC79nkI9Qz7Nl7Fwc+Qkrzn2dIFQabISetr/fQt4cDPzQDL2m/M/Q9bca1WCSAVbb1vXGlXmHzHC6ev3esXeX7umhgPUMfoZ4hfzlqoEX3NN7QYx4Dg2w2u4zYbdrNsTo0RLh5OiEM7JTiS31vJbEixLAiyCjLuJzsRVJy4Xu/8BmLxVakL08EfPVfADwM6C6yhtyQwK1I1g2xfpZ+Av05W6C+LOYeOgCeAJyDYA65FR6FlevwtRyJRHJqAsWToZio1+vRZrN5nNKOcuKiOvhfdQjXIVuKx+OPU6mUp0q/AcxRJUgmF2YrAAAAAElFTkSuQmCC')
                      background-size contain
                      background-repeat no-repeat

              .mask
                position fixed
                z-index 99
                top 0
                right 0
                bottom 0
                left 0
                display none
                background rgba(56, 56, 56, 0.2)

              .mask.show
                display block
                transform scale(1)

              .dialog-wrapper
                max-height 80%
                z-index 1110
                position fixed
                width 3rem
                border-radius 0.05rem
                top 50%
                left 50%
                text-align center
                transform-origin 0 0
                -webkit-transform-origin 0 0
                transition all 0.25s ease-in-out
                -webkit-transition all 0.25s ease-in-out
                padding 0
                opacity 0
                transform scale(0) translate(-50%, -50%)
                -webkit-transform scale(0) translate(-50%, -50%)

                .dialog-content
                  background #fff
                  position relative
                  color #646464
                  border-radius 0.1rem
                  text-align center

                  .content
                    padding 0.2rem 0.36rem
                    color #646464
                    font-size 15px
                    text-align center

                  .two-btn
                    width 100%
                    padding 0.05rem 0
                    border-top 1px solid #dedede
                    white-space normal
                    overflow hidden

                    span
                      display inline-block
                      width 50%
                      overflow hidden
                      line-height 0.4rem
                      float left
                      font-size 15px
                      color #646464
                      position relative

                      &:first-child:after
                        content ''
                        position absolute
                        width 1px
                        right 0
                        top 0.05rem
                        height 0.3rem
                        background #dedede

              .dialog-wrapper.show
                opacity 1
                transform scale(1) translate(-50%, -50%)
</style>