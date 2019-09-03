<template>
  <div class="container">
    <header class="header">首页</header>
    <div class="content">
      <div class="banner">
        <van-swipe :autoplay="3000">
          <van-swipe-item v-for="(item, index) in bannerlist" :key="index">
            <img :src="item" alt="">
            <!-- <img v-lazy="image" /> -->
          </van-swipe-item>
        </van-swipe>
      </div>
      <!-- <van-search v-model="value" placeholder="请输入搜索关键词" show-action shape="round" @search="onSearch">
        <div slot="action" @click="onSearch">搜索</div>
      </van-search> -->
      <van-search placeholder="请输入搜索关键词" v-model="value" />
      <div class="nav">
        <span class="company">看公司</span>
        <span class="rltship">人脉</span>
        <span class="interview">面试</span>
        <span class="question">问答</span>
      </div>
      <ul class="recommend">
        <li>
          <div class="title">
            <div class="title_l">推荐</div>
            <div class="title_r">换一批</div>
          </div>
          <div class="cont">
            <div class="contInfo"></div>
            <div class="contImg"></div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { Swipe, SwipeItem, Search } from 'vant'
import axios from 'axios'

Vue.use(Swipe).use(SwipeItem)
Vue.use(Search)

export default {
  data () {
    return {
      bannerlist: []
    }
  },
  mounted () {
    axios.get('https://www.daxunxun.com/banner').then(res => { // 请求数据成功
    /**
     * ['/images/1.jpg']
     * ['https://www.daxunxun.com/images/1.jpg']
     */
      let arr = []
      res.data.map(item => {
        arr.push('https://www.daxunxun.com' + item)
      })
      // console.log(arr)
      this.bannerlist = arr
    }).catch(err => { // 请求失败
      console.log(err)
    })
  }
}
</script>
<style lang="scss">
@import '@/lib/reset.scss';
.container{
  .content{
    .banner { width: 100%; height: 1.8rem; overflow: hidden;
      .van-swipe { width: 100%; height: 100%;
        img { width: 100%; border: 1px solid #ccc; }
      }
    }
    .van-search__content{
      background: rgb(236, 236, 236);
      border-radius: .2rem;
    }
    .nav{
      display: flex;
      justify-content: space-around;
      padding: 0 .08rem;
      span{
        width: .5rem;
        height: .5rem;
        border-radius: 50%;
        background-color: rgb(143, 171, 255);
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    .recommend{
      li{
        .title{}
        .cont{
          .contInfo{}
          .contImg{}
        }
      }
    }
  }
}
</style>
