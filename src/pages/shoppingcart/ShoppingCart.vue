<template>
  <div class="shopcart">
    <div data-v-e282b9cc class="topbar">
      <div data-v-e282b9cc class="top-title">购物车</div>
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

    <div data-v-e282b9cc class="notice">海外买手会根据现行国家政策要求，通过不同的物流方式分别发货，其实对你没有影响啦~</div>

    <div data-v-e282b9cc class="seller-wrap">
      <div data-v-031042ee data-v-e282b9cc class="seller">
        <div data-v-031042ee class="promotion-wrap">
          <div data-v-1f07854a data-v-031042ee class="promotion">
            <div data-v-1f07854a class="product-list">
              <div data-v-4d071ed4 data-v-1f07854a class="product">
                <div data-v-4d071ed4 class="content">
                  <span data-v-4d071ed4 class="checkbox-box">
                    <i data-v-4d071ed4 class="switch"></i>
                  </span>
                  <div data-v-4d071ed4 class="prod-warp">
                    <div data-v-4d071ed4 class="prod-info">
                      <div data-v-4d071ed4 class="pic">
                        <img
                          data-v-4d071ed4
                          class="lazyload transition"
                          src="http://pic1.ymatou.com/G02/shangou/M06/8C/C4/CgvUBFoLwZKAJif7AAIvfupCe2E071_53_50_n_w_lb.jpg"
                          style="opacity: 1;"
                        />
                      </div>
                      <div data-v-4d071ed4 class="desc">
                        <div data-v-4d071ed4 class="name">
                          <i data-v-4d071ed4 class="tag-taxes">包邮包税</i>
                          <span data-v-4d071ed4>RYOE/吕 黑吕红吕绿吕棕吕紫吕防脱发洗发水护发素套装无硅油</span>
                        </div>
                        <div data-v-4d071ed4 class="sku">规格分类:红吕护发素400g</div>
                        <div data-v-4d071ed4 class="preadd-desc"></div>
                        <div data-v-4d071ed4 class="serve">
                          <span data-v-4d071ed4 class="tag-py">拼邮</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-v-4d071ed4 class="operation">
                    <div data-v-4d071ed4 class="price">¥ 45</div>

                    <div data-v-4d071ed4 class="amount">
                      <span data-v-4d071ed4 class="mini">一</span>
                      <span data-v-4d071ed4 class="num">3</span>
                      <span data-v-4d071ed4 class="plus">+</span>
                    </div>
                    <div
                      data-v-4d071ed4
                      module_name="delete_product"
                      module_index
                      sproductid="c03b73f6-9157-400d-8ca9-cc13bfcea1f4"
                      class="delete"
                    >
                      <i data-v-4d071ed4></i>
                    </div>
                  </div>
                </div>
                <div data-v-184b9004 data-v-4d071ed4>
                  <div data-v-184b9004 class="mask"></div>
                  <div data-v-184b9004 class="dialog-wrapper">
                    <div data-v-184b9004 class="dialog-content">
                      <div data-v-184b9004 class="content">
                        很抢手哦，下次不一定能遇到，
                        <br />确认要删除吗？
                      </div>
                      <div data-v-184b9004 class="two-btn">
                        <span data-v-184b9004>取消</span>
                        <span data-v-184b9004>删除</span>
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

    <div data-v-e282b9cc class="nodata" style="display:none">
      <div data-v-e282b9cc class="content">
        <img data-v-e282b9cc src="//s1.ymatou.com/shoppingcartm/static/img/nodata.f569491.png" />
        <span data-v-e282b9cc>购物车里还木有东西呢</span>
      </div>
    </div>

    <Interested></Interested>
    <div data-v-e282b9cc class="operate-wrap">
      <div data-v-0c59cb10 data-v-e282b9cc class="operate notIphoneX">
        <div data-v-0c59cb10 class="btn-choose">
          <span data-v-0c59cb10 module_name="select_all" module_index class="checkbox-box">
            <i data-v-0c59cb10 class="switch"></i>
          </span>
          <span data-v-0c59cb10 class="text">全选</span>
        </div>
        <div data-v-0c59cb10 class="desc">
          <span data-v-0c59cb10 class="price">
            总价：
            <i data-v-0c59cb10>¥ 0</i>
          </span>
          <span data-v-0c59cb10 class="carriage">( 不含运费)</span>
        </div>
        <div data-v-0c59cb10 class="btn-goorder disabled">去结算</div>
      </div>
    </div>
  </div>
</template>

<script>
import Interested from "components/home/Interested";

export default {
  components: {
    Interested
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
</style>