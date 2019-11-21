<template>
  <div data-v-15a47ea6 data-v-2c8e1059 class="buyer-rate">
    <div data-v-15a47ea6 class="m-title">
      <span data-v-15a47ea6>
        <i data-v-15a47ea6 class="cro-fl"></i>评价
        <i data-v-15a47ea6 class="cro-fr"></i>
      </span>
    </div>
    <div data-v-15a47ea6 class="b-title">
      <span data-v-15a47ea6 class="name">买家评价</span>
      <span data-v-15a47ea6 class="rate">
        <i data-v-15a47ea6 class="full"></i>
        <i data-v-15a47ea6 class="full"></i>
        <i data-v-15a47ea6 class="full"></i>
        <i data-v-15a47ea6 class="full"></i>
        <i data-v-15a47ea6 class="full"></i>
      </span>
      <span data-v-15a47ea6 class="num">{{evaluation}}</span>
      <span
        data-v-15a47ea6
        module_index
        module_name="pingjia"
        sproductid="7145ae4d-aa22-4668-bc68-697379e76174"
        sellerid="1522753"
        class="more"
      >查看全部{{total}}条</span>
    </div>
    <div data-v-15a47ea6 class="tag-content">
      <div data-v-15a47ea6 class="tag-name">购买过该商品的用户认为</div>
      <!---->
    </div>
    <div data-v-15a47ea6 class="note-list">
      <div
        data-v-15a47ea6
        module_index
        module_name="pingjia"
        sub_module_name="single_pingjia"
        sproductid="7145ae4d-aa22-4668-bc68-697379e76174"
        sellerid="1522753"
        class="note-item"
        v-for="item in list"
        :key="item.id"
      >
        <div data-v-15a47ea6 class="content">
          <div data-v-15a47ea6 class="info">
            <div data-v-15a47ea6 class="buyer">
              <div data-v-15a47ea6 class="avg">
                <img data-v-15a47ea6 :src="item.posterAvatar" />
              </div>
              <div data-v-15a47ea6 class="name">{{item.posterName}}</div>
              <div data-v-15a47ea6 class="grade" :class="'lever'+item.posterLevel">123</div>
            </div>
            <div data-v-15a47ea6 class="desc">{{item.content}}</div>
          </div>
          <!-- <div
            data-v-15a47ea6
            class="pic lazyload transition"
            style="background-image: url('{{item.picList[0]}}');"
          >
            <span data-v-15a47ea6 class="tag-num">6张</span>
          </div>-->
          <img class="pic lazyload transition" :src="item.picList[0]" alt />
        </div>
      </div>

      <div
        data-v-15a47ea6
        module_index
        module_name="pingjia"
        sub_module_name="see_more"
        sproductid="7145ae4d-aa22-4668-bc68-697379e76174"
        sellerid="1522753"
        class="note-more"
      >
        <span data-v-15a47ea6>
          查看全部
          <br data-v-15a47ea6 />MORE
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { post } from "utils/http";

export default {
  props: {
    id: String
  },
  data() {
    return {
      list: [],
      evaluation: "",
      total: ""
    };
  },
  async mounted() {
    let result = await post({
      url: `ymt/item/api/getProductNote`,
      data: {
        id: this.id,
        pagesize: 1,
        isprod: 1
      }
    });
    this.list = result.list;
    this.evaluation = result.evaluation;
    this.total = result.total;
  }
};
</script>

<style lang="stylus" scoped>
.buyer-rate
  width 100%
  overflow hidden
  margin-top 0.1rem

  .m-title
    width 100%
    overflow hidden
    text-align center
    margin-bottom 0.1rem

    span
      display inline-block
      padding 0 0.15rem
      color #999
      font-size 0.12rem
      position relative

      &:before
        content ''
        position absolute
        top 50%
        width 0.35rem
        height 1px
        transform translateY(-50%)
        -webkit-transform translateY(-50%)
        right -0.35rem
        background-color hsla(0, 0%, 87%, 0.5)

      &:after
        left -0.35rem
        background-color #dedede
        content ''
        position absolute
        top 50%
        width 0.35rem
        height 1px
        transform translateY(-50%)
        -webkit-transform translateY(-50%)

      i
        position absolute
        display inline-block
        width 0.05rem
        height 0.05rem
        border-radius 50%
        background #dedede
        top 50%
        transform translateY(-50%)
        -webkit-transform translateY(-50%)
        z-index 11

      i.cro-fl
        left -2px

      i.cro-fr
        right -2px

  .b-title
    width 100%
    background-color #fff
    padding 0.1rem 0.12rem 0.08rem
    position relative
    overflow hidden
    font-size 0

    .name
      display inline-block
      font-size 0.13rem
      padding-right 0.05rem
      font-family STHeitiSC-Medium
      float left
      line-height 0.22rem

    .rate
      display inline-block
      float left
      margin 0 0.02rem
      margin-top 0.04rem

      i
        display inline-block
        width 0.12rem
        height 0.12rem
        margin-right 0.03rem

      i.full
        background-image url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABGdBTUEAALGPC/xhBQAAAm9JREFUSA2tVk1oE0EUnpltDA1WW9qsJ39QtNL2Jh4Ee+lB9NKKQksPCQWlF0EQf04e9ezNixRy0HYTWhSrCHrw7EW8BFQKRg8ioVYxkjCxu+P3MLtMdhZ2UlwI8+bN975v3r43s2Gsh6c+N3cHv3s9hDBuC94qFg9sS7nBlOIZIY4OeV7NJlbYgAgD8ptKqYxirG9bqVu2cVYZNAoFtyllDaT9HWLJc7lDbqn0LU3IKoNWu31NIyfOLG82r6eR03pqBj8WFgb/tFqf8Xr26IQI/J0dGDi4d2lpS/fH7dQMQH4jTk4kqMVu2Wik1sLIQFUqzuba2hHO+bgfBGcwLkIgcSNYCyD0AHovRSZTHZme3uCzs76eBa/Pz59mvj+pOJ+A2jjIjgOQ1UE92BKi7yFaxVjtc5x1joPzBaT7eyCxhkLkq3CEuIQIaR1lDyTOy2J4ZeUVd5zz/1mkLYS46JbLL6IioxZnle8/gdBO33+YG5FfyHvec3JEAjRBPc6hHo9h7lSki5w4uwTIQSK40NbRCQ7NbR9qWZDN5MvlZ3qM0d/03hjnj3SQla3Uapyc4gyBDtlHK1INRH2vTSMzWUCpwxHC0kDtEmOSBTgfteSNYLgJEmMSBVDgRHDElmDwf1eMsWII/CoWh9FFI3EkdQl8DzHexViPr2NTg/RhivsNAXxcjN2D9DVznBP7KpUCuuz2rlxuFL77HdGIsyUlXZRdjyGAXj4WImB/wKmcAemUu7z8LvQPlUo/4buC9ZNo6Tehn+HPQGR3DFMgCL4jqIbdXc2PjU3gyD+NB4Vz9P1b1/NOYROL8H0SSm2Ga+H4FwgBzaCgOy8CAAAAAElFTkSuQmCC')
        background-size contain
        background-position 50%
        background-repeat no-repeat

    .num
      display inline-block
      font-size 0.12rem
      margin-right 0.02rem
      line-height 0.22rem
      font-family STHeitiSC-Medium
      color #e95656
      float left

    .more
      display inline-block
      font-size 0.12rem
      color #999
      float right
      padding-right 0.1rem
      position relative
      line-height 0.22rem

      &:after
        right 0
        top 50%
        content ''
        display block
        position absolute
        width 0.06rem
        height 0.06rem
        border-width 1px
        border-style solid
        border-color #9b9b9b #9b9b9b transparent transparent
        transform translateY(-50%) rotate(45deg)
        -moz-transform translateY(-50%) rotate(45deg)
        -ms-transform translateY(-50%) rotate(45deg)
        -webkit-transform translateY(-50%) rotate(45deg)

  .tag-content
    padding 0.1rem 0.12rem 0
    overflow hidden
    background #fff

    .tag-name
      width 100%
      overflow hidden
      font-size 0.12rem
      color #999

  .note-list
    width 100%
    overflow hidden
    padding 0.15rem 0 0.15rem 0.12rem
    height 1.46rem
    white-space nowrap
    overflow-x auto
    background #fff
    font-size 0
    vertical-align middle
    -webkit-overflow-scrolling touch

    .note-item
      overflow hidden
      width 2.76rem
      height 1.16rem
      display inline-block
      box-shadow 0 1px 8px 0 rgba(0, 0, 0, 0.1)
      margin-right 0.1rem

      .content
        display flex
        overflow hidden
        font-size 0

        .info
          flex 1
          -webkit-flex 1
          padding 0.1rem
          overflow hidden

          .buyer
            width 100%
            overflow hidden
            display flex
            align-items center

            .avg
              width 0.25rem
              height 0.25rem
              overflow hidden
              border-radius 100%
              margin-right 0.05rem

              img
                width 100%
                height 100%
                display inline-block

            .name
              margin-right 0.05rem
              flex 1
              -webkit-flex 1
              line-height 0.25rem
              text-overflow ellipsis
              -webkit-line-clamp 1
              overflow hidden
              white-space normal
              font-size 0.12rem
              color #666

            .grade
              width 0.18rem
              height 0.12rem
              overflow hidden
              z-index -999px

            .grade.lever1
              background-image url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAYCAYAAACSuF9OAAAABGdBTUEAALGPC/xhBQAAAwFJREFUSA3tVs1rE1EQn3lba9Jm00ahSG8KrRVB0Sgq2oOX0qpQKpibHrwIIrXgTRD8E1Qq4l0RI4iirSII3kSwCrVSrejNFg+1xSRt87E7ztvkvd1Ns5u09NiFZGfe/Gb29+bj7QJsXuEZwHDzxlgpvbc5N2udJLQGiXB/fGTmeFDkpmoDpY9FM7/npxEoKm2EmDOj5m68NFGsxko9c6v7ChDdUDZhwMXW4R9jMk5ubmGIbHswM1voB4I4/wARnipsrbuoXsTU+2V2mmDfDvnjh+3MFrK91TiPflZjAcyW9ug7acvOzQ/atvWQgFIOmYoDEXysiDVvqwhVUGkvmiw649WVTHeOxFk+oXRAGMcLk7mybkwJFOc5J9e1nQWBxtoJxbZFXnKWltxAtQllYbGPiLZoHAq9EfPq9FRs5PsDjvNL21lobW5aO6HyLnFMByLoWhnt6dZ6ReD+OKXWeDqWY4mtro/CEB5SGM7gT7z8ZUHrNYSgkjFUPPbiS0XbVzbODG8eBzTGVy69yk1sa0KMD82O9AokFOtMjHO0rApNCD5CS6M9SSa1Q9nBUy61Jklzwx9UOiKtn5AzbQAvVDCelF66n2xTum1R3XLl7+7p8k2YHd7QMnZghqSRi6LLxuPblF3O9Mt1efH4ni5L/B9QrlLRSioM15diRtsnpQfdQwmZuOs1P+yfcub0O2XL3NvXwek/rNaZ0RNXdiVbuA1NgDM4/EHHclF+KZQQDr/Kc5qee1wGKH3OwPxKP2fIee0408XHhAejRbTJzRDV7x/pGEpIAgxvsxJtz/yZPNpIuYhuCubsNjSIug3dEKGWTuMN52JRgp3LoiGenT6lBpUrf/tRF3eaqXC22KAMYeprgR/6TAXmbr7Gk9Mu9bBylQS45w+CZSYin3WMEKFuyaSv8EybL1bAdEkMn+KaEG/gm/uO80VYpTREqDUSe8v5+LvKO2C6HByhbmjupYb6R/o1REh+C3F5fN8xYeVyGhrhgNoAn0ENE1I+m/fNDKw3A/8BRNgLYU/GGrQAAAAASUVORK5CYII=')
              background-size cover

            .grade.lever2
              background-image url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAYCAYAAACSuF9OAAAABGdBTUEAALGPC/xhBQAABABJREFUSA3tVk1sVFUUPue+mWFK3pQUjcLKGGjLQP0nYiDEAgZBa1woiVEWpCuJtDMm1YU/hA2JiShlggsjgQ0kAglxiQtjMCEQDMRqy8y0ogEtRkMjYWbakrbv+N3X3tvb15npho0JTdpz7nd+3nfPOffeEt3/qV8Brm++N1Y5tcMrDfe9zyQvCvPjJKKI6Zwi9bGfLf7sfmUeoXJv83si1GOdmPanskM5u3YU+b49VuobLrBQagbOp94dandcSA6veqA8EXwtJC8Q84+wjZDQBiJJMfGtWIyfbegq/m5ilFGs9LyzQvSQ+SXh160topT7htcj+Qrry3wu4kKlyaA3JKP481Tmzecas4PbmeUj7Qf8wakgeM2NmUfI7yr8wswF68SyXo6sWWrXjoLKvOwsidg77a4rudVPoU1vaSzVlNzLvC8I7cz/GD90Y4XRtZxHKDQKnTROCPAqlaltZu1KVMYSwibyqUy+37UHwdQuxMNEf1Jpyo4HsLXGD7ZrRteyOiEvfsp1Egk63LXWxw6nHwGhNQ4+pzrTuDwNOp/58USa3xkoa0wEY030kokLlLpgdC2rEkp1D1xFlN0tPrxND7AbODkR2KQhHmmXxuLsdWJmegwZjVUOpbeCVFrr6PFvjV3F89P69N+qhEITq9kqiTSFA+xEYiDrtku7JjP5ISeE5Mtn4kLBJwZTHu81upE1CcU9tnOknXF1vGKC5Fh7EsO62awhq7TLsc6o5fHSB6jOk3qJwfrG7y6eiHrVJJTcUxhE0E8mAEfVztHo7Zub0MYGY4ueLos7SjnX8gTO+YchxDzClHjbMVu1JiHtgdNg24adrRrPtYVHFGd3wXbZL+g8uXWNEshx5IhjNu8q5p1+tv9v18fodQklvIQlpAMmZSKskvDsKQFct116bsrBv2ewuTaQGWfyXvUzxbOGQFTWJZTs7r+Gtl02QdhlR+lgcxqle9Rg9dqFinBprHQUcgvIjCJXh58tfGtjqyh1CWl/DO/scDM9j2l8w+TBB+ZdhsamyWBuvgD5nXizhj3Fm/zM4HfGXksuSMiT2edAzwB+3aNatV0i+1TlUOtXEtBukDnPifjaxd2Dl2qRcHF7nbtgVL/T23IRO10XxVnFHos+F9rnzsHWT4mCHiQfw7yhKtwMfQnursUaw2m7hfv6Bt7CSzEVP9qQGbhhci9YIe2onNNmAtGuQjUyGOIlmoz2C68GoQ5sphWVXQagEcP98MyTs5FY/sKc/mFyajnnOXANrq4SidMycfcAkrkVnXMCjf/oeGUlvG6z8BVgv7KiEbTOB73lwFfj35kW4D/EYl5nw578dcq6KU2Weyijb140teS2L9IDH8Xvr/+3FfgP4zl5Ker3ytUAAAAASUVORK5CYII=')
              background-size cover

            .grade.lever3
              background-image url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAYCAYAAACSuF9OAAAABGdBTUEAALGPC/xhBQAABAlJREFUSA3tVl1oHFUUPmc21exmZm1MKbYVoYVuFkriQxSb0ogUKa0/FIVEfBH0JQhp0lB88O9JtE8lTdMfU1BQH7QJiEVNRZCqFKRgEVuDuoEWpCmUopbdSdLN7s7xuzt7795JZtOHQn3pwO4995zvnPnu+bm7RHeflTPAK5tvzzo/ku2ucPCaCD2MFz0kTL84RCfdfbmDjSIbQjLRnSzM/v07kyQVWJjnvKTXzv3nS3HOhUOZARJ5W9ucBL3SMjjztd7D/gKifETEDnCnQGYDCXUrOxMf9YZzAxprryAcPtz30wIznReiteqDIBv9Rb9H22PW5w2WyEutTn6vMXKsoxVkPsReQGSHNzzTm943sw3xaxh5df5w54Mab6+GUE05YRulIs/Yey3L4cfSkLfrPY48xS9dmNP7QqnYjzKlkIvp9FDurNZj/5uScRCnEhSr2arbQilCyL2/+SucYr4Oiifk042dIrLK4NiJHISFnlQ2kKoYTKjo0PsE86yW7TVCKDwlmz7AUTbfPJLN2A5KliB4SuvQhAtu6711n9DQBv1bXsozWcyPZrYjk49XzcyXk+s6zukY9hohFBqckzagXAoiZUNmkETebTBLyqX0TbxqD/rmXT0Qc6PZLg7oM2QMvhQkHNnLfZPR7NUCLiPkrm+dgpuvX4imjBCaP5LtAqkHtB1DFCmX0ieHpv9S68JY+0ZM21gglbNCskHpxOE37WlUOvtZRqg6bURfGpBQj4x33af3QUVuVS4NpXI5eAfkB5CZZqVEZsss8q+ceaLJgJYIywgpO4piyoaTNfkLhV3aD8Gf1vLS6TJ6LTj8IzBqUK4olYoF//f9X69elKNbXA2z11hCHm/6BoHyGogxrZatcLxzLbM8qvU482RdXi55Q7kTuH+edZPpTcC+oRHIWtYvl/brvb3GEuLB00Wk6ZQF3C0TvQku3tylGlPpq9OFa8LCNBRVc6eHcwfQm1MGFMg2I1tCLCFlT9jNKtJWuHZh663KlR/LZOWDds+KHxHxsotGwWzdd0ZLDQml1ie+RRpuGGhFnhOWnWYfUy4u04CfD64VRjZPqt/GOjaUUPpHjI7ptJEtoSEh7pteRGG+MFiR/ejK1WrfqFziUBEvTQLQo6bV+ELIj7bvQVvvqPozXXfXtX1i27XckJACONa0aYfqGnMZKn3C4U/VirszlR/PrKnKmKb8SOZ1lqB2MfIiOYnepYQVVj0rEmppdr9DPv4JofZ3/HS17P3zZ9w1J0DJQ4fMFkYyV/3SIqZV3kP/NYctIC96g3/8YEez5RUJqelAeT63HRqVS2PwP6cfQV8mljP41C5UvsTsjLPjZvCTEomn/e7IKhNb7pGPO1vuyMvuvuT/ysB/lrtxn8TF2y8AAAAASUVORK5CYII=')
              background-size cover

            .grade.lever4
              background-image url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAYCAYAAACSuF9OAAAABGdBTUEAALGPC/xhBQAAA85JREFUSA3tVt9vVFUQnjm70G67txQealOeIFgaizRQpNFAgg8SCsSAgRpChOiLhJDVhGf/BGPTFI2JDz6oSWswGhGBBKhPRkkTsGkJPxKfbMID2PTe3W27e+8wc3fn7Fl6u2L0sTfpzjcz35wzd+acuQVYfRpXABu7/7t3/pPuI2hgo/fB/QuyGo0MtOWjuTcjiI7z5te9Dx+MuLukVaHxVzP+X4/vIlAmDkTMexlvK74/WVKOK/3h7nNA9JHaTArea809+El1+qJ3Q+AvjRDQSYTUSbH7oy/1BuUnk0TQFPOMGVa+SqMAh34tIsIkAXTIH2+2KVgK9qo/Qb5luQBeS3tmwuX4Qekr9seJUMrcEZ8phQOaDO9FWWyfdGNizjOGcVenkA67umIpO+M9qgPCZTz1R97qDLgdfaIj4qx3bmZacITUL7Ly4D3M/TavmkpbITFkNzRf4swL6uSOJyYUwNx+IlpjeWjqX4Tbxf4u8XOVrimPq7PLwbcUu7Iuocpboj0HvNqLC6M93W6AYIqig2rjShSz65tqMewo+KUB9afAXBRMN/elEWm72tHQPydUIZsxDRJZLkV1VeI35yLioOUktCtCfE38THzU0td5RXB+araXK9QsWJ4Upp8voWzX+su8UlAJ4zdDqEuoMNrTz0l1qh+eaVfFHh0SyYl/ia9PlGMcoj0/bC9nvBduV7j1v3UtiwPltgH8aGkEe+nz/nWqRyE1bNfCp92buRI75KXItH5s49wDjTSF704sqM+Vdg65Rm7KGF/7E2LjOZIOiv4BhnErebP47WN+QrtKS3A69hHMQJR/m+dVVaU3YsA/3PUwnmNmzQ0vNz2jdpGJCXm4+YqPD+c5G7neclOkbWP+Z9s7YLH4CidVffBbRSJpZLApCB+eqdhoN/N2u/4apl28xBYvbb6u2SooMSHM/bzII/8H3uKdasAgjR9P5WfvHIhIRkw8Z4oyJqr+WBToz23cql9igusg6ORK2yHLh/0qn6Nv8OzU3y5N8LJYJeSHew6HFNbOUtrswTLleOGhOBDhIn+Hjim/keT2nOWLcKEaF2YzbW38SXLmXS162aFWV0tX6hqnO6c6hHSUkPZbHerbVbMvR/zWO2tWnF4pGeGsmBAOTS9xAb+3CxGd58PULjpvsKxdlpcAuDo7rJngd4sTwIoJCdfIbUt6Em5XEk1sPDL4E4PbrN9A4kBUf8OEWpuz13mxJ0quyedvV74w38vnbq3GmhUmtPUrSJLyvxC35zvX92/bhWDs+eHbtdDycseUu94qXq3A/12Bpwm8VdG50subAAAAAElFTkSuQmCC')
              background-size cover

            .grade.lever5
              background-image url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAYCAYAAACSuF9OAAAABGdBTUEAALGPC/xhBQAAAwFJREFUSA3tVs1rE1EQn3lba9Jm00ahSG8KrRVB0Sgq2oOX0qpQKpibHrwIIrXgTRD8E1Qq4l0RI4iirSII3kSwCrVSrejNFg+1xSRt87E7ztvkvd1Ns5u09NiFZGfe/Gb29+bj7QJsXuEZwHDzxlgpvbc5N2udJLQGiXB/fGTmeFDkpmoDpY9FM7/npxEoKm2EmDOj5m68NFGsxko9c6v7ChDdUDZhwMXW4R9jMk5ubmGIbHswM1voB4I4/wARnipsrbuoXsTU+2V2mmDfDvnjh+3MFrK91TiPflZjAcyW9ug7acvOzQ/atvWQgFIOmYoDEXysiDVvqwhVUGkvmiw649WVTHeOxFk+oXRAGMcLk7mybkwJFOc5J9e1nQWBxtoJxbZFXnKWltxAtQllYbGPiLZoHAq9EfPq9FRs5PsDjvNL21lobW5aO6HyLnFMByLoWhnt6dZ6ReD+OKXWeDqWY4mtro/CEB5SGM7gT7z8ZUHrNYSgkjFUPPbiS0XbVzbODG8eBzTGVy69yk1sa0KMD82O9AokFOtMjHO0rApNCD5CS6M9SSa1Q9nBUy61Jklzwx9UOiKtn5AzbQAvVDCelF66n2xTum1R3XLl7+7p8k2YHd7QMnZghqSRi6LLxuPblF3O9Mt1efH4ni5L/B9QrlLRSioM15diRtsnpQfdQwmZuOs1P+yfcub0O2XL3NvXwek/rNaZ0RNXdiVbuA1NgDM4/EHHclF+KZQQDr/Kc5qee1wGKH3OwPxKP2fIee0408XHhAejRbTJzRDV7x/pGEpIAgxvsxJtz/yZPNpIuYhuCubsNjSIug3dEKGWTuMN52JRgp3LoiGenT6lBpUrf/tRF3eaqXC22KAMYeprgR/6TAXmbr7Gk9Mu9bBylQS45w+CZSYin3WMEKFuyaSv8EybL1bAdEkMn+KaEG/gm/uO80VYpTREqDUSe8v5+LvKO2C6HByhbmjupYb6R/o1REh+C3F5fN8xYeVyGhrhgNoAn0ENE1I+m/fNDKw3A/8BRNgLYU/GGrQAAAAASUVORK5CYII=')
              background-size cover

            .grade.lever6
              background-image url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAYCAYAAACSuF9OAAAABGdBTUEAALGPC/xhBQAABBlJREFUSA3tVU1oXFUUPufemWkmmRdoF1XiTwklSUMaWhEXLahRLBbb2E1bLHZjoQ21bcyAXYklIK4UMqZFCIjiQrDJwp+FRigUs1EXhYYkZppYCNpGC4LB99KGzMw7nvMm9859M/lxYXHTCzPn/57vnnPuuwAP1voVwPXN/501yLXvIyidJqLnAVED0VWV0G9lzuUn3Cw1gIJcy3kieNM6Ibzr9c0OWtlh6GpXwh+/nUcCb0U97WVnuxwXoOGOVDBffI8o7I30CAsA+BcDakaEOzq56an6M5O/mRhlGEu1HiWAreYHhIetrYoJxm/vBYLt1hfx+yoXCOYLlwwYBvCdRw3NXtp7AgGLfPCHSoXCKTemBpCUEBHz1glpL33UscXKDsOVOeCIfHA94sqLA20nuEUnIx3CD5mm3Qcwe31haTnYQkAJ0ROEL7gxNYAiI8Fl48Sn0IuLpf1GdilXxgLiQ0x7b0xPGjsNH9EhhP0iSzWU1j14dKQkciFFPiu/XrElhZq1OiCdHDYOQrnkB11Z+HuX2rcxoA5HH6uO//v4y2x/bMU+5g5vY8/Mn419s4f4EK+w/RdnD1gVkNc79TP3u3JagP0ywG5gsRC+5MrV7cIQzho77/WN4V3q9c1czuxqOu7qYklcA6AaBgp3RjqizdEAA4wZH56BNdv198XWHVTk622WgivBB22v8Tzt46F5lGMXlFJfNPQe+xSxv2jchK5aITEkNdo5EplIdQuVRZ901SE4CQFi7eLqPFP2LM9PGMKXYRh+zICOMZin2dYtcpD7LJZDYtYEVHc2P8M9vm43RrJzdHdh/jmej7Sx1bSLoNnY5DYxeMUfvHe4dW/zgH9VscHhYLA1dsvWbhlH8Q2T4d4tG/DpdiwN7txe1zt5M1zndkW+UAEktynTlDqCR6eWxSbLz7WM8t4vRkKJ2whwJeL5b80KiUNKp2K3rUiFqEqE4A50rF0Sx8lshRDVhAtG7EhqVKgsAmwoc+X/dQFJNbht10wAhXTQH2hp54w2YXW7xBeRttkYAt/wFUo2Lzfz14p+gwqJI/e/MngIz3I2+XZEi8HGPoZGT4SLhue5SRne0BCh0/AJVGOGF2qRukqX11R5DniOkvy74Nhr2iU2PoR9LLknjzj+IBXmAX810iHOpTfV2w6IbkNA6Wx+jqvyk7up5averorefWTpEA09WS82+rBzM8MdkoOJrAlex55rBeHN2hCQOKrybTMxEeV25d23yzVSGi5y4qhtnPzh4K7/oz/QOuQvL82tfIdk1/cbsjPfunHC/ztAqdQIzwJ/emIrdgNdi7xVKqH2yIyJnkF08u8UM428zy2Nursxe+O8G2N4buf9W0T9ain3+eMlhDauWAhJNZE5M/XH/cv4YOf/oQL/AOa8fv1xHm4tAAAAAElFTkSuQmCC')
              background-size cover

          .desc
            margin-top 0.1rem
            width 100%
            line-height 0.18rem
            font-size 0.12rem
            text-overflow ellipsis
            -webkit-line-clamp 3
            overflow hidden
            white-space normal
            color #292929

        .pic
          width 1.16rem
          height 1.16rem
          overflow hidden
          background-image url('https://s1.ymatou.com/itemm/static/img/placeholder.bb77734.png')
          background-size cover
          position relative
          background-position 50%
          background-repeat no-repeat

          .tag-num
            display inline-block
            position absolute
            right 0.1rem
            bottom 0.1rem
            border-radius 3px
            background-color rgba(0, 0, 0, 0.5)
            color #fff
            padding 0 0.05rem
            font-size 0.1rem

    .note-more
      margin 0
      overflow hidden
      width 1.16rem
      height 1.16rem
      display inline-block
      box-shadow 0 1px 8px 0 rgba(0, 0, 0, 0.1)
      margin-right 0.1rem
      font-size 0.12rem
      text-align center
      vertical-align top

      span
        color #666
        display inline-block
        padding-top 0.35rem
        line-height 0.2rem
        font-size 0.12rem
</style>