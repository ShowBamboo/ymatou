<template>
  <div class="home-wrap">
    <!-- 广告 -->
    <LoadBanner></LoadBanner>
    <!-- 导航 -->
    <div id="load-waptopbar" class="loadwaptopbar">
      <div class="loadtopnav">
        <div class="nav" id="load-nav-content">
          <router-link tag="a" to="/home">
            <span id="loadwaptopbar-home" class="active">首页</span>
          </router-link>
          <router-link tag="a" to="/community">
            <span id="loadwaptopbar-community">社区</span>
          </router-link>
        </div>
        <div class="icon-list">
          <router-link tag="a" to="/shoppingcart">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAABDBJREFUWAnNmMtPVHcUx2eGiRlJkSkQ2wKtVuqDxppKJ2pNcOGiaVx1xa4pCW8IETasmsjOSEJiAk0IISHddWNcuPIvECijSbWxVSxiCkVEoDzkNTB+vj/v3FzC3HEwcyee5Mw5v9c53985v8f9jb+uru62z+e7CPvi8fhLxK1QKHSlt7d3SnXZpgAgZnH6wuJ8ZO36+vpIfX39J9kGI39+p9OOjo68+fn5XwD5I/W/DgwMVDvbs6HvACSH7e3t+5eXlydRQyUlJQWdnZ1r2QCS8LELkBpYVzeJ0g+oEaIUJX1nKd+gnKd2D2gJm4ME4ErQxfgj1QcCgSOIqEufTFUz1/jHGPt5ampqwg3Qv/JGx08l+/v7hxGl0r2gxsbGk7FY7A/8tQRcHExY9Ydd2jNa3dfX9wCD/8NFSQH5/f5xy+PnGfXsYoyNIxy5sD8poHA4/FRjCeFhSa9pZmamBB/74ImkgLq6upaI0ix8xGswss/6Kbf8/JUUkBqJzj9wbnNzs3aAp4SfU3KAvO8KiOg8UafNzc1sROkb+cLnPVdAipA6QWVvhKe/AhTnUncHBNoxC8IXXkJpbW09wOTl40lPT89iqgiZlNHR0witrq5G8KErbAT2uQLi2shKhMBwzgAJBHQbuAPiuviP9hUrnOrrCbE0zsswfu5IukZIjZDSVtjW1hY2pQz/AMIPfwuoV9z092T+bYBM2sizJwu7paXlBBgK4GGuj9hbASV22vb2dsYB8c11jDOuXyAgfdcbCiaUZBJAjwmpDqyjydo5xT/Y2NgIB4NBpTQf4EZKt8pGMl5b+4Ak9frI+4iy7i/ZHuL8uS5dlBIQgx6rE9IGxNdjF45rqM4HTI7auYskXInxpi0hARGD78ODxcXFPYl0qVNKQDk5OWNyhiE7ZYA5iKEQY2eoX0AuUJbU90xCSreZI2SRcYtEUrxUWVk5V1VVtUWfvREO/eR6BdYzKSuUcpcxczDFx+CipqamD7OBKCUgC8CQ5NbWVrVV9lQkfQY5PTY0NHxJ/n8nSrlE7DfabiJNCpEB2owN1skuW7SZ1UybkUzKLqtOZa1Tvqn1DjS0y0iiwSnZWd9hXGfGIWd9hvSF0tLSQnbatuylBUgdrRftJVR9bpYRMY19Y4S1hm5mj3SSsW/11Zljly1di/Quj1H7HHIOfi/0tCPEY+40Z9JlZrbGrK4xq/F3mUFtbe1FxtVgZxq+yleF/n2xKS1A+muGNfQ3o8zbHkPPuJ2Pk/c9/RHBefY1kxnFjjnhkSNM7KyNBiWdba/cX6Cv/UcDRj+bnJz8ymkoHR0739MvAUZDzjDZIufYtACxRR8yyF60GF6F95wyxvzpdI4+zV0256xzonXW79BHR0efV1RU6OF4Gp4FYCO5j+7olEYhGo0+ikQieqGWa0LY+am7u3vCOfQ1FMOqWXI8tOIAAAAASUVORK5CYII="
              alt="购物车"
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
    <div class="ymatou-wrapper">
      <!-- 轮播图 -->
      <Banner></Banner>
      <!-- 限时抢 -->
      <Xsq></Xsq>
      <!-- 小编精选 -->
      <Xbjx></Xbjx>
      <!-- 猜你喜欢 -->
      <Interested></Interested>
    </div>
    <!-- 底部 -->
    <div class="footer">
      <div class="text">
        <a class="download-suohuoapp" onclick>客户端</a> |
        <a href="//m.ymatou.com/home/ymt-about" onclick>关于洋码头</a> |
        <a href="//m.ymatou.com/home/ymt-media" onclick>媒体报道</a>
      </div>
      <div class="desc">上海洋码头网络技术有限公司 版权所有</div>
    </div>
    <!-- 返回顶部 -->
    <GotoTop class="goto-top"></GotoTop>
  </div>
</template>

<script>
import Banner from "./Banner";
import Xsq from "./Xsq";
import Xbjx from "./Xbjx";
import Interested from "components/home/Interested";
import GotoTop from "components/home/GotoTop";
import LoadBanner from "components/home/LoadBanner";

export default {
  components: {
    Banner,
    Xsq,
    Xbjx,
    Interested,
    GotoTop,
    LoadBanner
  },

  mounted() {
    // 吸顶效果
    window.onscroll = function() {
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;

      let AdHeight = $(".loadbanner").height();
      let NavHeight = $(".loadwaptopbar").height();
      if (scrollTop >= AdHeight) {
        $(".loadwaptopbar").css({
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 100
        });
        $(".banner").css({
          marginTop: NavHeight
        });
      } else {
        $(".loadwaptopbar").css({
          position: "static",
          top: 0,
          left: 0,
          zIndex: 100
        });
        $(".banner").css({
          marginTop: 0
        });
      }
      //返回顶部显示隐藏
      if (scrollTop >= 1295) {
        $(".goto-top").css("display", "block");
      } else {
        $(".goto-top").css("display", "none");
      }
    };
    // 返回顶部
    $(".goto-top").on("tap", function() {
      window.scrollTo(0, 0);
    });
  }
};
</script>

<style lang="stylus" scoped>
.home-wrap
  // 导航
  .loadwaptopbar
    width 100%
    background #fff
    border-bottom 1px solid #DEDEDE

    .loadtopnav
      width 100%
      height 0.4rem
      display flex
      justify-content space-between

      .nav
        align-items center

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

      .icon-list
        a
          display inline-block
          width 0.4rem
          height 0.4rem
          text-align center
          line-height 0.4rem

          img
            height 0.18rem

  // 主体
  .ymatou-wrapper
    width 100%
    overflow hidden

  // 底部
  .footer
    width 100%
    overflow hidden
    background #f5f5f5
    padding-bottom 0.65rem

    .text
      font-size 0.14rem
      color #646464
      text-align center

      a
        color #646464
        display inline-block
        padding 0.06rem 0.04rem

    .desc
      text-align center
      color #9b9b9b
      font-size 0.12rem
</style>