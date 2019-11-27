<template>
  <div>
    <LoadBanner></LoadBanner>
    <!-- 导航 -->
    <div id="load-waptopbar" class="communityloadwaptopbar">
      <div class="loadtopnav">
        <router-link tag="a" to="/home">
          <img src="../../assets/img/communitylogo.png" alt />
        </router-link>
        <div class="nav" id="load-nav-content">
          <router-link tag="a" to="/home">
            <span id="loadwaptopbar-home">首页</span>
          </router-link>
          <router-link tag="a" to="/community">
            <span id="loadwaptopbar-community">社区</span>
          </router-link>
        </div>
      </div>
    </div>
    <div class="note-detail-page">
      <a id="ScrollToDiscussA" style="display:none" href="#discussPannel"></a>

      <meta pagetype="shequ_note_detail" note_id="1001625884" />

      <section class="pv-header">
        <!-- 标题 -->

        <!-- 用户 -->

        <section class="user-pannel">
          <!--头像-->
          <img :src="info.userLogo" alt class="user-photo" />
          <!--信息-->
          <div class="user-detail">
            <div class="user-name-level">
              <span class="user-name">{{info.username}}</span>
              <span class="user-level user-level-l">
                V
                <i>6</i>
              </span>
            </div>
          </div>

          <!--关注-->
          <div class="user-focus" style="display: none;">
            <div
              class="btn-focus focused hide"
              data-focused="1"
              data-follow-user-id="484591"
              action_type="click"
              module_name="no_follow_user"
              note_id="1001625884"
              ref_user_id="484591"
              module_index="1"
              style="display: none;"
            >
              <!-- <i class="icon icon-fcheck14x14"></i> -->
              <span class="focus-text">已关注</span>
            </div>

            <div
              class="btn-focus unfocused"
              data-focused="0"
              data-follow-user-id="484591"
              action_type="click"
              module_name="follow_user"
              note_id="1001625884"
              ref_user_id="484591"
              module_index="1"
              style="display: none;"
            >
              <!-- <i class="icon icon-fadd14x14"></i> -->
              <span class="focus-text">关注</span>
            </div>
          </div>
        </section>
      </section>

      <!--笔记详情-->
      <section class="note-pannel" data-note-id="1001625884" data-note-type="1">
        <!--普通/视频文本-->
        <!--文本-->
        <div class="detail-text">
          <p>{{info.content}}</p>
        </div>

        <!--图片区域(普通)-->

        <div class="new-pic-box">
          <div class="img-wrapper">
            <img class :src="info.src" style="opacity: 1;" />
          </div>
        </div>
      </section>

      <!--关联信息-->
      <section class="involved-pannel" style="display: block;">
        <div class="invo-main">
          <!--买手信息-->
          <div
            class="seller-info"
            data-user-id="28182060"
            data-user-name="鉴呗运动户外专营店"
            data-user-type="1"
          >
            <div class="seller-photo"></div>
            <div class="seller-detail">
              <div class="seller-name">
                购自于洋码头买手:
                <span>{{SellerInfo.SellerLoginId}}</span>
              </div>
            </div>
          </div>

          <!--商品信息-->
          <div
            class="goods-info"
            data-product-id="p2571772"
            data-seller-id="28182060"
            data-seller-name="鉴呗运动户外专营店"
            action_type="click"
            module_name="ta_product"
            sproductid="p2571772"
            module_index
            note_id="1001625884"
          >
            <div class="goods-pic">
              <img class="lazy" :src="SellerInfo.Product.ProductPic" />
            </div>
            <div class="goods-detail">
              <div class="goods-name">{{SellerInfo.Product.ProductDes}}</div>
              <div class="goods-price">
                <div class="price">
                  <i>¥</i>
                  {{SellerInfo.Product.Price}}
                </div>
                <div class="involved-collect-btn collect-btn version-1" data-iscollect="false">收藏</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 关联的标签 -->

      <div class="publication">
        <div class="c-right">
          <span class="date">21小时前</span>
        </div>
      </div>

      <!--相关好货-->
      <section class="related-goods-pannel" style="display: block;">
        <div class="rg-title">
          <span>相似商品</span>
        </div>
        <div class="rg-list">
          <div class="scroll-wrapper">
            <ul>
              <li
                class="product"
                data-product-id="p2486482"
                data-seller-id="11654598"
                action_type="click"
                module_name="ref_product_list"
                sproductid="p2486482"
                module_index="1"
                note_id="1001625884"
                v-for="product in Products"
                :key="product.ProductId"
              >
                <div class="product-pic-body">
                  <img class="product-pic lazy" :src="product.ProductPic" />
                </div>
                <div class="product-tip">
                  <p class="product-title">{{product.ProductDes}}</p>
                  <span>
                    <em>¥</em>
                    {{product.Price}}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import LoadBanner from "components/home/LoadBanner";
import { get } from "utils/http";
import store from "../../../node_modules/store/dist/store.legacy";

export default {
  data() {
    return {
      info: store.get("communityDetail"),
      noteId: this.$route.params.noteId || store.get("communityDetail").noteId,
      userId: this.$route.params.userId || store.get("communityDetail").userId,
      SellerInfo: {},
      Products: [],
      time: new Date().getDate()
    };
  },

  components: {
    LoadBanner
  },

  async mounted() {
    let result = await get({
      url: `/ymt/note/api/GetSellerInfoByNoteIdAsync?NoteId=${this.noteId}&UserId=${this.userId}&Channel=3`
    });
    this.SellerInfo = result.Result;

    let similarResult = await get({
      url: `/ymt/note/api/GetSimilarProductAndNoteAsync?Page=0&pageSize=10&NoteId=${this.noteId}&Channel=3&NoteType=1`
    });
    this.Products = similarResult.Result.Products;
  }
};
</script>

<style lang="stylus" scoped>
.communityloadwaptopbar
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
      align-items center
      margin-right 8px

      a
        padding 0 8px

        span
          display inline-block
          line-height 24px
          padding-top 7px
          font-size 12px
          color #646464
          text-shadow 0 0 black

          &.active
            color #383838
            border-bottom 2px solid red

.note-detail-page
  background #f1f1f1

  .pv-header
    background #ffffff
    padding-left 0.12rem
    padding-right 0.12rem

    .user-pannel
      height 0.6rem
      display flex
      flex-flow row nowrap
      justify-content flex-start
      align-items center

      .user-photo
        width 0.4rem
        height 0.4rem
        position relative
        border-radius 50%
        background-size cover
        background-repeat no-repeat
        background-position 50% 50%
        border 1px solid #e6e6e6

      .user-detail
        -ms-flex 1
        flex 1
        margin-left 0.08rem

        .user-name
          font-size 0.14rem
          color #383838
          margin-right 0.06rem

        .user-level-l
          font-size 0.12rem
          color #f28f25
          font-weight bold

          i
            font-weight normal
            font-style italic
            font-size 0.13rem
            margin-left -0.03rem

  .note-pannel
    background #ffffff
    padding-top 0.1rem

    .detail-text
      margin 0 0.12rem 0
      font-size 0.16rem

      p
        line-height 0.24rem
        letter-spacing 0.01rem
        color #383838
        word-break break-word
        white-space pre-wrap

    .new-pic-box
      padding 0 0.12rem

      .img-wrapper
        margin-top 0.2rem
        min-height 0.5rem
        width 100%

        img
          display block
          opacity 1
          width 100%

  .involved-pannel
    background #ffffff

    .invo-main
      border-radius 0.04rem
      margin 0 0.15rem
      padding-bottom 0.05rem

      .seller-info
        display flex
        flex-flow row nowrap
        justify-content flex-start
        align-items center
        padding-top 0.2rem

        .seller-detail
          -ms-flex 1
          flex 1
          margin-left 0.06rem
          color #646464
          font-size 0.12rem
          line-height 0.16rem

          .seller-name
            color #9b9b9b

            span
              margin-left 0rem
              color #3cb5ff

      .goods-info
        display flex
        flex-flow row nowrap
        justify-content flex-start
        align-items flex-start
        margin 0.1rem 0 0
        background #fff
        box-shadow 0rem 0.02rem 0.14rem 0.02rem rgba(199, 199, 199, 0.5)

        .goods-pic
          width 1.1rem
          height 1.1rem

          img
            width 100%
            height 100%

        .goods-detail
          -ms-flex 1
          flex 1
          padding 0.16rem 0.12rem 0.18rem

          .goods-name
            font-size 0.14rem
            font-weight 500
            line-height 0.21rem
            height 0.42rem
            color #383838
            white-space normal
            word-break break-word
            overflow hidden
            text-overflow ellipsis
            word-wrap break-word
            word-break break-all

          .goods-price
            margin-top 0.18rem
            display flex
            flex-flow row nowrap
            justify-content space-between
            align-items flex-start
            width 100%
            font-size 0.12rem
            font-weight 500
            color #646464
            line-height 0.15rem

            .price
              -ms-flex 1
              flex 1
              font-size 0.16rem
              color #c33

              i
                font-size 0.16rem

  .publication
    background #fff
    padding 0.12rem
    color #9b9b9b
    font-size 10px

    .c-right
      text-align right

  .related-goods-pannel
    display none
    background #ffffff
    margin-top 0.1rem

    .rg-title
      height 0.42rem
      line-height 0.42rem
      font-size 0.16rem
      font-weight 600
      letter-spacing 0.012rem
      color #383838
      position relative

      span
        padding-left 0.1rem

    .rg-list
      padding-bottom 0.14rem
      overflow hidden

      .scroll-wrapper
        overflow-x auto
        overflow-y hidden

        ul
          width 100%
          white-space nowrap
          font-size 0

          .product
            position relative
            display inline-block
            margin-left 0.05rem
            width 1.31rem
            vertical-align top

            .product-pic-body
              width 1.31rem
              height 1.31rem
              overflow hidden

              .product-pic
                width 1.31rem

            .product-tip
              text-align left

              .product-title
                font-size 0.12rem
                color #383838
                line-height 0.18rem
                display -webkit-box
                white-space normal
                word-break break-word
                overflow hidden
                text-overflow ellipsis
                -webkit-line-clamp 2
                -webkit-box-orient vertical
                word-wrap break-word
                word-break break-all
                margin 0.12rem 0 0.16rem

              span
                display block
                font-size 0.14rem
                height 0.14rem
                line-height 0.14rem
                color #c33

                em
                  font-size 0.14rem

          .product&:first-child
            margin-left 0.1rem

          .product&:last-child
            margin-right 0.1rem
</style>