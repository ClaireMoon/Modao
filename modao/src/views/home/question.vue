<template>
  <div class="container">
    <div class="content">
      <div class="header_relationship">
        <div class="header_title">
          <div class="back" @click="back">
            <van-icon name="arrow-left" size="1.25rem"/>
          </div>
          <p>问答</p>
          <div class="plus"></div>
        </div>
      </div>
      <div class="banner">
        <van-swipe :autoplay="3000">
          <van-swipe-item v-for="(item, index) in bannerlist" :key="index">
            <img :src="item" alt="">
            <!-- <img v-lazy="image" /> -->
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="nav">
        <van-row style="line-height:2rem;">
          <van-col span="6">精选</van-col>
          <van-col span="6">干货</van-col>
          <van-col span="6">狗血</van-col>
          <van-col span="6">唠嗑</van-col>
        </van-row>
        <van-row style="background:#f4f4f4; height:.56rem;">
          <van-col span="6" style="background:#d9d9d9; height: .56rem;"></van-col>
          <van-col span="6"></van-col>
          <van-col span="6"></van-col>
          <van-col span="6"></van-col>
        </van-row>
      </div>
      <ul class="info">
        <li class="info_li">
          <h4>面试中如何回答“为什么从上一家公司离职”？</h4>
          <p>首先我们要先了解面试官想要从这道问题了解到什么：</p>
          <p>1.面试官视图从中了解到你的求职动机，愿望以及其他事情.面试官视图从中了解到你的求职动机，愿望以及其他事情.面试官视图从中了解到你的求职动机，愿望以及其他事情</p>
          <img src="../../../public/img/4.jpg" alt="">
          <div class="info_li_foot">
            <img src="../../../public/img/6.jpg" alt="">
            <span>恰是惊鸿</span>
            <div class="li_foot_r">
              <span>1.7W查看</span>
              <span>76个回答</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
</div>
</template>
<script>
import Vue from 'vue'
import { Swipe, SwipeItem, Icon, Row, Col } from 'vant'
import axios from 'axios'

Vue.use(Icon)
Vue.use(Swipe).use(SwipeItem)
Vue.use(Row).use(Col)

export default {
  methods: {
    back () {
      // this.$router.push({ path: 'relationship'})
      this.$router.back()
    }
  },
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
.container {
  overflow: auto;
  .content{
    .header_relationship {
      padding: .4rem 1rem;
      background-color: #f4f4f4;
      .header_title {
        height: 100%;
        display: flex;
        justify-content: space-between;
        color: #cacaca;
        align-items: center;
        margin-bottom: 1rem; // .back {   }
        p {
          font-size: 1rem;
          color: #9d9d9d;
        } // .search { }
      }
    }
    .banner { width: 100%; height: 12.25rem; overflow: hidden;
      .van-swipe { width: 100%; height: 100%;
        img { width: 100%; border: 1px solid #ccc; }
      }
    }
    .nav {
      text-align: center;
      font-size: .88rem;
      color: #848484;
    }
    .info {
      .info_li {
        h4 {}
        p {}
        img {
          width: 23.44rem;
          height: 12.5rem;
        }
        .info_li_foot {
          img {}
          span {}
          .li_foot_r {
            span {}
          }
        }
      }
    }
  }
}
</style>
