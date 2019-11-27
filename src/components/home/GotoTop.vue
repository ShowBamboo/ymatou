<template>
  <div class="goto-top" @click="gotoTop"></div>
</template>

<script>
export default {
  methods: {
    gotoTop() {
      window.scrollTo(0, 0);
    }
  }
};
</script>

<style lang="stylus" scoped>
.goto-top
  position fixed
  right 0.21rem
  bottom 0.72rem
  width 0.4rem
  height 0.4rem
  background-image url('https://s1.ymatou.com/homem/images/gototop-2ab3b79818.png')
  display none
  background-size contain
  background-position center center
  background-repeat no-repeat
</style>