<template>
  <div id="load-banner" class="loadbanner">
    <span class="loadbanner-bgcover">
      <img src="http://pic1.ymatou.com/G02/M06/47/B9/CgvUBVpv7eSAWJr4AAB3io7qxQM413_15_2_o.png" />
    </span>
    <span class="loadbanner-close" id="load-banner-close">
      <i class="loadbanner-close-btn">&nbsp;</i>
    </span>
    <div class="loadbanner-main">
      <a
        class="loadbanner-download-btn"
        id="loadbanner-download-btn"
        onclick
        module_index
        module_name="callapp"
      >&nbsp;</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
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
</style>