<template>
  <vue-waterfall-easy :imgsArr="imgsArr" @scrollReachBottom="getData" :mobileGap="8" ssss>
    <div slot="waterfall-head">
      <!-- 热门活动 -->
      <HotField></HotField>
    </div>
    <div class="img-info" slot-scope="props">
      <div class="note-item" data-note-type="1">
        <p class="note-content">{{props.value.content}}</p>

        <div class="user-info">
          <div class="user-photo">
            <img class="user-logo" :src="props.value.userLogo" />
            <span class="user-name">{{props.value.username}}</span>
          </div>

          <div class="buttons">
            <i class="like-icon-base"></i>
            <span class="collection-num">{{props.value.visitNum}}</span>
          </div>
        </div>
      </div>
    </div>
  </vue-waterfall-easy>
</template>

<script>
import { get } from "utils/http";

import _ from "lodash";
import vueWaterfallEasy from "vue-waterfall-easy";

import HotField from "../../pages/community/HotField";

export default {
  data() {
    return {
      imgsArr: [],
      page: 0 // 当前加载的加载图片的次数
    };
  },

  components: {
    HotField,
    vueWaterfallEasy
  },

  methods: {
    async getData() {
      let result = await get({
        url: `/ymt/note/api/GetSocialDiscoverList?Page=${this
          .page++}&pageSize=10&AccessToken=&UserID=&Cookieid=&yid=`
      });
      this.page++;

      let info = result.Result.map(function(value, index) {
        return {
          src: value.NoteInfo.TagImage[0].Pic,
          noteId: value.NoteInfo.NoteId,
          content: value.NoteInfo.Content,
          addTime: value.NoteInfo.AddTime,
          username: value.UserInfo.UserName,
          userId: value.UserInfo.UserId,
          userLogo: value.UserInfo.UserLogo,
          visitNum: value.ExtInfo.VisitNum
        };
      });
      this.imgsArr = [...this.imgsArr, ...info];
    }
  },

  created() {
    this.getData();
  }
};
</script>

<style lang="stylus" scoped>
.note-item
  margin 0 0 0.06rem
  padding-bottom 0.06rem
  background-color #fff
  border 0.01rem solid #f1f1f1

  .note-img
    width 100%
    font-size 0
    position relative

    // background url('http://staticontent.ymatou.com/app/userlogo/mj.jpg') center center no-repeat // default-fb781a4e7d.png) center center no-repeat;
    // background-size contain
    // max-height 1rem
    // overflow hidden
    img
      width 100%
      height 100%
      opacity 0
      transition opacity 0.5s ease

  .note-content
    margin-top 0.1rem
    padding 0 0.04rem
    color #292929
    font-size 0.1rem
    transform scale(0.9)
    line-height 0.18rem
    display -webkit-box
    -webkit-box-orient vertical
    -webkit-line-clamp 2
    overflow hidden

  .user-info
    margin-top 0.04rem
    display flex
    flex-flow row nowrap
    justify-content space-between
    align-items flex-start

    .user-photo
      padding 0 0.1rem
      display flex
      flex-flow row nowrap
      justify-content flex-start
      align-items flex-start

      .user-logo
        float left
        display block
        margin-top 0.1rem
        width 0.22rem
        height 0.22rem
        -o-object-fit cover
        object-fit cover
        border-radius 50%
        border 0.02rem solid #e6e6e6

      .user-name
        display inline-block
        width 0.8rem
        padding-top 0.15rem
        color #666
        font-size 0.1rem
        transform scale(0.8)
        white-space nowrap
        word-break break-word
        overflow hidden
        text-overflow ellipsis
        word-wrap break-word
        word-break break-all

    .buttons
      display flex
      align-items center
      vertical-align middle
      height 0.3rem
      margin-right 0.1rem
      margin-top 0.07rem

      .like-icon-base
        background-position 0 0
        display inline-block
        vertical-align middle
        margin-right 0.07rem
        width 0.15rem
        height 0.1rem
        background url('https://m.ymatou.com/note/images//discovery/icon_see-49505d249c.png') center center no-repeat
        background-size cover

      .collection-num
        font-size 0.1rem
        transform scale(0.9)
        color #666
</style>