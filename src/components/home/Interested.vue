<template>
  <div class="interested">
    <div class="bt-title">
      <van-divider
        :style="{ color: '#646464',borderColor: '#ccc', padding: '0 46px',fontSize:'16px' }"
      >
        <img src="https://s1.ymatou.com/homem/images/tag_heart-dc2c84d296.png" alt /> 猜你喜欢
      </van-divider>
    </div>
    <!-- 产品列表 -->
    <ul class="product-list">
      <InterestedItem
        v-for="(product,index) in likeProductInfo"
        :key="index"
        :product="product"
        :id="product.id"
      ></InterestedItem>
    </ul>
    <van-loading
      v-if="flag"
      size="24px"
      type="spinner"
      color="#1989fa"
      style="text-align:center"
    >臣妾做不到哇...</van-loading>
    <!-- 查看更多 -->
    <div v-if="!flag" class="btn-like-more" @click="loadMore" style="display: block;">加载更多</div>
  </div>
</template>

<script>
import { get } from "utils/http";

import InterestedItem from "./InterestedItem";

import Vue from "vue";
import { Divider, Loading } from "vant";

Vue.use(Divider).use(Loading);
export default {
  data() {
    return {
      likeProductInfo: [],
      tempMore: [],
      flag: false,
      page: 2
    };
  },

  components: {
    InterestedItem
  },
  methods: {
    async loadMore() {
      this.flag = !this.flag;

      let resultMore = await get({
        url: `/ymt/home/api/getLikeList?pageNub=${this.page++}&pageSize=20`
      });
      this.tempMore = resultMore.likeProductInfo;
      this.likeProductInfo = [
        ...this.likeProductInfo,
        ...resultMore.likeProductInfo
      ];
      this.flag = !this.flag;
    }
  },

  async mounted() {
    let result = await get({
      url: "/ymt/home/api/getLikeList?pageNub=1&pageSize=20"
    });
    this.likeProductInfo = result.likeProductInfo;
  }
};
</script>

<style lang="stylus" scoped>
.interested
  padding 0 0.21rem 0.13rem
  overflow hidden
  background #f5f5f5

  .bt-title
    img
      width 0.25rem
      height 0.16rem
      padding-right 0.06rem

  .product-list
    margin-top 0.27rem
    display flex
    flex-wrap wrap

  .btn-like-more
    font-size 0.13rem
    border 1px solid #dedede
    background #fff
    margin 0.13rem 0
    line-height 0.3rem
    color #9b9b9b
    width 100%
    text-align center
</style>