<template>
  <div class="note-item" :data-note-id="note.NoteInfo.Noteid" data-note-type="1">
    <div
      class="note-img"
      action_type="click"
      module_name="note_list"
      sub_module_name="note"
      node_id
      ref_note_id="1001607593"
      module_index
    >
      <img
        class
        :data-src="note.NoteInfo.TagImage[0].Pic"
        :src="note.NoteInfo.TagImage[0].Pic"
        height="479.86046511627904px"
        style="opacity: 1;"
      />
      <div class="icons buy"></div>
    </div>

    <p
      class="note-content"
      action_type="click"
      module_name="note_list"
      sub_module_name="note"
      node_id
      ref_note_id="1001607593"
      module_index
    >{{note.NoteInfo.Content}}</p>

    <div
      class="user-info"
      data-user-type="0"
      data-user-id="27976794"
      action_type="click"
      module_name="note_list"
      sub_module_name="note_user"
      note_id="1001607593"
      ref_user_id="27976794"
      module_index
    >
      <div class="user-photo">
        <img class="user-logo" :src="note.UserInfo.UserLogo" />

        <span class="user-name">{{note.UserInfo.UserName}}</span>
      </div>
      <!-- 点赞点击         
            action_type="click" module_name="note_list" sub_module_name="love" note_id="1001607593" module_index
      like-icon-off-->
      <div class="buttons">
        <i class="like-icon-base"></i>
        <span class="collection-num">{{note.ExtInfo.VisitNum}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    note: {
      type: Object
    }
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
    font-size 0
    position relative
    background url('http://staticontent.ymatou.com/app/userlogo/mj.jpg') center center no-repeat // default-fb781a4e7d.png) center center no-repeat;
    background-size contain
    max-height 6.1333333333rem
    overflow hidden

    img
      width 100%
      height auto
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