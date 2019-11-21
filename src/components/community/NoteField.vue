<template>
  <section class="note-field">
    <div class="waterfall note-waterfall">
      <div class="fall-item even" ref="even">
        <NoteItem v-for="(note , index) in evenNote" :key="index" :note="note"></NoteItem>
      </div>
      <div class="fall-item odd" ref="odd">
        <NoteItem v-for="note in oddNote" :key="note.NoteInfo.Noteid" :note="note"></NoteItem>
      </div>
    </div>
  </section>
</template>

<script>
import { get } from "utils/http";

import _ from "lodash";
import BScroll from "better-scroll";

import NoteItem from "./NoteItem";

export default {
  data() {
    return {
      oddNote: [],
      evenNote: []
    };
  },

  components: {
    NoteItem
  },

  async mounted() {
    let result = await get({
      url:
        "/ymt/note/api/GetSocialDiscoverList?Page=0&pageSize=10&AccessToken=&UserID=&Cookieid=&yid="
    });

    for (let i = 0; i < result.Result.length; i++) {
      if (i % 2 == 0) {
        this.evenNote.push(result.Result[i]);
      } else {
        this.oddNote.push(result.Result[i]);
      }
    }

    let bScroll = new BScroll(".scroll-wrap", {
      pullUpLoad: true,
      click: true,
      probeType: 2
    });

    //上拉加载更多
    let page = 1;
    bScroll.on("pullingUp", async () => {
      let resultMore = await get({
        url: `/ymt/note/api/GetSocialDiscoverList?Page=${page++}&pageSize=10&AccessToken=&UserID=&Cookieid=&yid=`
      });

      for (let i = 0; i < resultMore.Result.length; i++) {
        setTimeout(() => {
          console.log(
            this.$refs.even.offsetHeight,
            this.$refs.odd.offsetHeight
          );

          if (this.$refs.even.offsetHeight < this.$refs.odd.offsetHeight) {
            console.log(1);

            this.evenNote.push(resultMore.Result[i]);
          } else {
            console.log(2);

            this.oddNote.push(resultMore.Result[i]);
          }
        }, 0);
      }
      // setTimeout(() => {
      //   bScroll.refresh();
      // }, 300);

      await this.$nextTick();
      bScroll.refresh();
      bScroll.finishPullUp();
    });
  }
};
</script>

<style lang="stylus" scoped>
.note-field
  .waterfall
    width 100%
    display flex
    flex-flow row nowrap
    background #e8e8e8
    padding 0.1rem 0.04rem

    .fall-item
      width 50%
      height max-content

      &:first-child
        padding-right 0.04rem
</style>