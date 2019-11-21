<template>
  <div data-v-7457081b data-v-2c8e1059 class="image-text-wrap">
    <div data-v-7457081b class="m-title">
      <span data-v-7457081b>
        <i data-v-7457081b class="cro-fl"></i>详情
        <i data-v-7457081b class="cro-fr"></i>
      </span>
    </div>
    <div data-v-7457081b class="title">
      <span data-v-7457081b class="chinese">图文详情</span>
    </div>
    <div data-v-7457081b class="list" v-for="(item,index) in moduleList" :key="index">
      <div data-v-7457081b class="item" v-if="item.moduleType==3">
        <div data-v-7457081b class="name">
          <h2 data-v-7457081b>
            <span data-v-7457081b>商品参数</span>
          </h2>
          <!---->
        </div>
        <!---->
        <div data-v-7457081b class="keylist" v-for="(list,index) in item.propertyList" :key="index">
          <div data-v-7457081b class="keyitem">
            <span data-v-7457081b class="key">{{list.key}}</span>
            <span data-v-7457081b class="value">{{list.value}}</span>
          </div>
        </div>
        <!---->
      </div>
      <div data-v-7457081b class="item" v-if="item.moduleType==1">
        <div data-v-7457081b class="name">
          <h2 data-v-7457081b>
            <span data-v-7457081b>{{item.title}}</span>
          </h2>
        </div>
        <div data-v-7457081b class="text">{{item.text}}</div>

        <div data-v-7457081b class="pics" v-for="(pic,index) in item.picList" :key="index">
          <img data-v-7457081b :src="pic" style=" opacity: 1;" class="lazyload transition" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { get } from "utils/http";
export default {
  data() {
    return {
      moduleList: []
    };
  },
  props: {
    id: String
  },
  async mounted() {
    let result = await get({
      url: `ymt/item/api/getProductDescriptionInfo?productId=${this.id}`
    });
    this.moduleList = result.result.moduleList;
    console.log(this.moduleList);
  }
};
</script>

<style lang="stylus" scoped>
.image-text-wrap
  background-color #fff
  margin-top 0.1rem

  .m-title
    width 100%
    overflow hidden
    text-align center
    padding-bottom 0.1rem
    background-color #f1f1f1

    span
      display inline-block
      padding 0 0.15rem
      color #999
      font-size 0.12rem
      position relative

      &:before
        content ''
        position absolute
        top 50%
        width 0.35rem
        height 1px
        transform translateY(-50%)
        -webkit-transform translateY(-50%)
        right -0.35rem
        background-color hsla(0, 0%, 87%, 0.5)

      &:after
        left -0.35rem
        background-color #dedede
        content ''
        position absolute
        top 50%
        width 0.35rem
        height 1px
        transform translateY(-50%)
        -webkit-transform translateY(-50%)

      i
        position absolute
        display inline-block
        width 0.05rem
        height 0.05rem
        border-radius 50%
        background #dedede
        top 50%
        transform translateY(-50%)
        -webkit-transform translateY(-50%)
        z-index 11

      i.cro-fl
        left -2px

      i.cro-fr
        right -2px

  .title
    font-size 0.13rem
    color #292929
    margin-bottom 0.08rem
    padding 0.1rem 0 0.1rem 0.12rem
    border-bottom 1px solid hsla(0, 0%, 87%, 0.5)
    display inline-block
    font-family PingFangSC-Medium
    width 100%

  .list
    width 100%
    overflow hidden
    padding 0 0.12rem

    .item
      width 100%
      overflow hidden
      margin-bottom 0.05rem

      .name
        width 100%
        padding 0.2rem 0 0.15rem
        overflow hidden

        h2
          width 100%
          overflow hidden
          text-align center

          span
            display inline-block
            line-height 0.18rem
            font-size 0.14rem
            position relative
            padding 0 0.2rem
            color #646464
            font-family PingFangSC-Medium

            &:before
              content ''
              position absolute
              right -0.25rem
              top 0.09rem
              width 0.35rem
              height 1px
              background-color #e95656

            &:after
              content ''
              position absolute
              left -0.25rem
              top 0.09rem
              width 0.35rem
              height 1px
              background-color #e95656

      .keylist
        width 100%
        overflow hidden

        .keyitem
          width 100%
          overflow hidden
          display flex
          margin-bottom 0.1rem

          .key
            margin-left 0.2rem
            width 0.7rem
            overflow hidden
            font-size 0.12rem
            padding-right 0.1rem
            color #9b9b9b
            line-height 0.18rem

          .value
            flex 1
            overflow hidden
            font-size 0.12rem
            line-height 0.18rem
            word-break break-all
            color #383838

      .text
        word-break break-all
        color #292929
        font-size 0.12rem
        margin-bottom 0.1rem
        display inline-block
        width 100%

      .pics
        width 100%
        overflow hidden
        font-size 0

        img
          width 100%
          display inline-block
          border 0
</style>