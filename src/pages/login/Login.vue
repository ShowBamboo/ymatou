<template>
  <div class="register-wrapper">
    <div class="title-bar">
      <span class="back" @click="backClick"></span>登录
    </div>
    <div
      class="register hui_panel"
      id="wrapper"
      hui-type="Panel"
      hui-formname="signup"
      _rendered="true"
      _initbehavior="true"
      ctrid="signup_1003556701"
    >
      <fieldset>
        <input
          type="text"
          name="tel"
          id="tel"
          hui-type="Control"
          hui-formname="Phone"
          value
          placeholder="输入手机号"
          _rendered="true"
          _initbehavior="true"
          ctrid="Phone_1003556703"
          class="hui_control"
        />
        <div class="imgcode-warp">
          <input
            type="text"
            name="imagecode"
            id="imagecode"
            hui-type="Control"
            hui-formname="ImgCodeString"
            value
            placeholder="输入图形验证码"
            _rendered="true"
            _initbehavior="true"
            ctrid="ImgCodeString_1003556704"
            class="hui_control"
          />
          <div class="btn-imgcode" id="btnImgCode"></div>
        </div>
        <div class="code-wrap">
          <div
            hui-type="Btncaptcha"
            hui-formname="ValidationCode"
            hui-timenum="60"
            id="ValidationCode_1003556704-1624173120"
            ctrid="ValidationCode_1003556704"
            class="hui_btncaptcha"
            _rendered="true"
            _initbehavior="true"
          >
            <div class="btncaptcha">
              <input type="text" name="code" placeholder="输入短信验证码" maxlength="6" />
              <button class="btn">获取验证码</button>
            </div>
          </div>
        </div>

        <div class="deal">
          登录即视为同意
          <a
            class="ymt-deal"
            href="http://staticontent.ymatou.com/forBuyerApp/doc/aboutYmatou_3.html"
          >《洋码头用户协议》</a>
        </div>

        <input
          type="submit"
          value="登录"
          class="submit"
          id="submit"
          module_index
          module_name="register"
          @click="loginClick"
        />
      </fieldset>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      verifyCode: ""
    };
  },
  methods: {
    loginClick() {
      let res = this.verifyCode.validate(
        document.getElementById("imagecode").value
      );
      if (res) {
        alert("验证正确");
      } else {
        alert("验证码错误");
      }
    },
    backClick() {
      this.$router.go(-1);
    }
  },
  mounted() {
    this.verifyCode = new GVerify("btnImgCode");
  }
};
</script>

<style lang="stylus" scoped>
.register-wrapper
  height 100%
  background-color #f1f1f1

  .title-bar
    height 0.44rem
    line-height 0.44rem
    font-size 17px
    color #646464
    text-align center
    background-color #fff
    position relative

    .back
      display block
      position absolute
      width 0.1rem
      height 0.1rem
      border-width 1px
      border-style solid
      border-color #9b9b9b #9b9b9b transparent transparent
      transform translate(0, -50%) rotate(-135deg)
      top 50%
      left 0.13rem

  .register
    width 2.84rem
    margin auto
    padding-top 0.29rem

    input
      width 100%
      height 0.36rem
      line-height 0.26rem
      padding 0.1rem 0 0.1rem 0.1rem
      border 0
      font-size 14px

    #tel
      margin-bottom 0.1rem

    .imgcode-warp
      width 100%
      position relative
      overflow hidden
      margin-bottom 0.1rem

      .btn-imgcode
        position absolute
        right 0
        top 0
        height 0.37rem

    .code-wrap
      position relative
      border-radius 0.03rem
      margin-bottom 0.1rem

      .btn
        position absolute
        right 0
        top 0
        width 1.02rem
        height 0.37rem
        line-height 0.37rem
        text-align center
        background-color #c33
        color #fff
        font-size 14px
        border-radius 0.03rem
        border 0

    .deal
      font-size 12px
      color #383838

      .ymt-deal
        color #c33

    .submit
      margin-top 0.65rem
      width 2.84rem
      height 0.38rem
      line-height 0.38rem
      text-align center
      padding 0
      border-style none
      border-radius 0.03rem
      background-color #c33
      color #fff
      font-size 15px
</style>