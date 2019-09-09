<template>
  <ul class="oBirds">
    <router-link tag="li" :to="'/birdDetails/' + item.id" v-for="item of oBirds" @click="goDetail(item.id)" :key="item.id">
      <div class="avatar">
        <img :src="item.images.small" alt="" />
      </div>
      <div class="summary">
        <div class="top">
          <div class="nickname">{{ item.title }}</div>
          <span class="position" v-for="itm of item.casts" :key="itm.id">{{ itm.name }} /</span>
        </div>
        <div class="Specialty">擅长：职业方向选择</div>
        <div class="bottom">
          <span class="tariff">￥30</span>
          <span class="solve">帮助过{{ item.rating.average }}人</span>
        </div>
      </div>
    </router-link>
  </ul>
</template>

<script>
export default {
  props: {
    oBirds: Array
  },
  methods: {
    goDetail (id) {
      /**
       * 编程式跳转就是使用js跳转
       * this.$router
       *  类似于数组，每push一个，新添加了一个元素，每replace一个，替换了数组当前元素
       *  .back()
       *  .push() 追加一个新的路由
       *  .replace() 替换当前的路由
       */
      // console.log(this)
      // this.$router.push('/birdDetails/' + id) // string
      // this.$router.push({
      //   name: 'detail',
      //   params: {
      //     id
      //   }
      // })
      this.$router.push({ path: '/birdDetails/' + id })
    }
  }
}
</script>

<style lang="scss">
@import '@/lib/reset.scss';

.oBirds{
      li{
        @include rect(100%, 6.5rem);
        @include flexbox();
        align-items: center;
        justify-content: flex-start;
        border-bottom: 0.06rem solid #BBBBBB;
        .avatar{
          img{
            @include rect(3.13rem, 3.13rem);
            border-radius: 50%;
            @include background-color(#DFDFDF);
            margin: .88rem 0.88rem;
          }
        }
        .summary{
          .top{
            @include flexbox();
            align-items: center;
            justify-content: space-around;
            .nickname{
              font-size: .88rem;
              @include color(#939393);
              line-height:1.31rem;
            }
            .position{
              font-size: .63rem;
              @include color(#BDBDBD);
              line-height:0.94rem;
            }
          }
          .Specialty{
            font-size: .75rem;
            @include color(#ACACAC);
            line-height:1.31rem;
            padding-left: .4rem;
          }
          .bottom{
            .tariff{
              font-size: .63rem;
              @include color(#A4A4A4);
              line-height:0.94rem;
              padding-left: .4rem;
            }
            .solve{
              font-size: .63rem;
              @include color(#A4A4A4);
              line-height:0.94rem;
              margin-left: 1rem;
            }
          }
        }
      }
    }
</style>
