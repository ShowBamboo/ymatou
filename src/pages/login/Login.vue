<template>
  <div class="register-wrapper">
    <div class="title-bar">
      <span class="back" @click="backClick"></span>登录
    </div>
    <div class="register hui_panel" id="wrapper">
      <fieldset>
        <input
          type="text"
          name="tel"
          id="tel"
          placeholder="输入手机号"
          class="hui_control"
          v-model="phoneNumber"
        />
        <div class="imgcode-warp">
          <input
            type="text"
            name="imagecode"
            id="imagecode"
            v-model="imgCode"
            placeholder="输入图形验证码"
            class="hui_control"
          />
          <div class="btn-imgcode" id="btnImgCode"></div>
        </div>
        <div class="code-wrap">
          <div id="ValidationCode_1003556704-1624173120" class="hui_btncaptcha">
            <div class="btncaptcha">
              <input type="text" name="code" placeholder="输入短信验证码" maxlength="6" v-model="msgCode" />
              <div class="btn" @click="codeClick" v-html="text" :class="{disabled:isDisabled}"></div>
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

        <input type="submit" value="登录" class="submit" id="submit" @click="loginClick" />
      </fieldset>
    </div>
  </div>
</template>

<script>
import { post } from "utils/http";
import store from "../../../node_modules/store/dist/store.legacy";

export default {
  data() {
    return {
      verifyCode: "",
      phoneNumber: "",
      imgCode: "",
      msgCode: "",
      code: "",
      text: "获取验证码",
      isDisabled: false
    };
  },

  methods: {
    async codeClick(ev) {
      let re = /^1[3456789]\d{9}$/;
      let res = this.verifyCode.validate(this.imgCode);
      if (!re.test(this.phoneNumber)) {
        alert("请填写正确的手机号！");
        this.phoneNumber = "";
      }
      if (!res) {
        alert("请填写正确的验证码！");
        this.msgCode = "";
      }
      if (re.test(this.phoneNumber) && res) {
        //倒计时效果
        let count = 60;
        this.isDisabled = true;
        this.text = `${count}s`;
        let timer = setInterval(() => {
          if (count === 0) {
            clearInterval(timer);
            this.isDisabled = false;
            this.text = "获取验证码";
          } else {
            this.text = `${--count}s`;
          }
        }, 1000);

        let result = await post({
          url: "/test/users/login",
          data: {
            mobile: this.phoneNumber
          }
        });
        this.code = result.data.code;
      }
    },
    loginClick() {
      if (!this.phoneNumber || !this.imgCode || !this.msgCode) {
        alert("请填写完整信息");
      } else {
        if (this.msgCode == this.code) {
          store.set("phoneNumber", this.phoneNumber);

          this.$router.push({
            path: "/profile",
            query: {
              phoneNumber: this.phoneNumber
            }
          });
        } else {
          alert("短信验证码错误！");
        }
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
.disabled
  pointer-events none

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