<template>
  <div class="community-wrap">
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
            <span id="loadwaptopbar-community" class="active">社区</span>
          </router-link>
        </div>
      </div>
    </div>
    <!-- 主体 -->
    <div class="scroll-wrap">
      <div class="discovery-page">
        <!-- 热门活动 -->
        <HotField></HotField>
        <!-- 瀑布流笔记 -->
        <NoteField></NoteField>
      </div>
    </div>
  </div>
</template>

<script>
import HotField from "./HotField";
import NoteField from "components/community/NoteField";

import BScroll from "better-scroll";

export default {
  components: {
    HotField,
    NoteField
  }
};
</script>

<style lang="stylus" scoped>
.community-wrap
  height 100%

  // 导航
  .communityloadwaptopbar
    width 100%
    background #fff
    border-bottom 1px solid #DEDEDE
    position fixed
    top 0
    left 0
    z-index 100

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
        margin-right 0.08rem

        a
          padding 0 0.08rem

          span
            display inline-block
            line-height 0.24rem
            padding-top 0.07rem
            font-size 0.12rem
            color #646464
            text-shadow 0 0 black

            &.active
              color #383838
              border-bottom 2px solid red

  // 主体
  .scroll-wrap
    height calc(100% - 50px)

    .discovery-page
      width 100%
</style>