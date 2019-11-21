<template>
  <div class="banner">
    <van-swipe :autoplay="2000" indicator-color="#c33">
      <van-swipe-item>
        <img
          src="http://pic1.ymatou.com/G02/M06/DE/4C/CgzUDF3OS9uAQFB1AAHLBy1_jzE039_375_128_o.png"
          alt
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          src="http://pic1.ymatou.com/G01/M01/57/C4/CgzUB13MB-OAbx2FAAJH18ZGof4731_375_128_o.png"
          alt
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          src="http://pic1.ymatou.com/G01/M00/5D/18/CgzUCV3NOHGAd25eAAPqbqJGD2I375_375_128_o.png"
          alt
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          src="http://pic1.ymatou.com/G01/M01/5D/DF/CgzUCF3NUjqAejmKAANqovF1BC0297_375_128_o.png"
          alt
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          src="http://pic1.ymatou.com/G01/M00/57/A6/CgzUCV3MB0mAcR05AAGI3snW90U127_375_128_o.png"
          alt
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          src="http://pic1.ymatou.com/G01/M01/57/C0/CgzUB13MB3-AE918AAI4PU_Hd5I790_375_128_o.png"
          alt
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          src="http://pic1.ymatou.com/G01/M03/50/CD/CgzUCF3Kw7yAJS0FAAKQU7O4W5E238_375_128_o.png"
          alt
        />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem, Lazyload } from "vant";

Vue.use(Swipe)
  .use(SwipeItem)
  .use(Lazyload);
export default {};
</script>

<style lang="stylus" scoped>
.banner
  width 100%

  img
    width 100%
</style>