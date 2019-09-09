<template>
  <div class="container">
    <div class="content">
      <div class="header_relationship">
        <div class="header_title">
          <div class="contact" @click="contact">
            <van-icon name="friends-o" size="1.5rem"/>
          </div>
          <p>消息</p>
          <div class="add" @click="showPopup">
            <van-icon name="add-o" size="1.5rem"/>
          </div>
          <!-- <div class="show" v-show="show">好好士大夫撒</div> -->
          <van-popup v-model="show" position="right top" :style="{ height: '18%', width:'28%' }">
            <ul>
              <li>
                <van-icon name="comment-o" size="1.5rem"/>
                <span>发起群聊</span>
              </li>
              <li>
                <van-icon name="friends-o" size="1.5rem"/>
                <span>添加朋友</span>
              </li>
              <li>
                <van-icon name="scan" size="1.5rem"/>
                <span>扫一扫</span>
              </li>
            </ul>
          </van-popup>
        </div>
      </div>
      <van-search placeholder="请输入搜索关键词" v-model="value" />
      <div class="waiting">
        <div class="waiting_l" @click="Goingtodo">
          <img src="../../../public/img/1.jpg" alt="">
          <div class="waiting_cont">
            <span>待处理事项</span>
            <p>3个请求待处理。</p>
            <div class="img_box">
              <img src="../../../public/img/2.jpg" alt="">
              <img src="../../../public/img/1.jpg" alt="">
              <img src="../../../public/img/4.jpg" alt="">
            </div>
          </div>
        </div>
        <i>昨天</i>
      </div>
      <ul class="thingList">
        <li @click="GotoAssist">
          <img src="../../../public/img/5.jpg" alt="">
          <div class="thingList_cont">
            <span>看准小助手</span>
            <p>xxx你好，来到看准的第二天，我门特意...</p>
          </div>
        </li>
        <li @click="askAssist">
          <img src="../../../public/img/6.jpg" alt="">
          <div class="thingList_cont">
            <span>求职招聘小助手</span>
            <p>【消息卡片】</p>
          </div>
        </li>
        <li>
          <img src="../../../public/img/2.jpg" alt="">
          <div class="thingList_cont">
            <span>订阅信息</span>
            <p>老鸟发布动态了</p>
          </div>
        </li>
        <li>
          <img src="../../../public/img/4.jpg" alt="">
          <div class="thingList_cont">
            <span>看准小助手</span>
            <p>【消息卡片】</p>
          </div>
        </li>
      </ul>
    </div>
</div>
</template>
<script>
import Vue from 'vue'
import { Swipe, SwipeItem, Icon, Row, Col, Search, Popup } from 'vant'
// import Header from '@/components/Header.vue'

Vue.use(Icon)
Vue.use(Swipe).use(SwipeItem)
Vue.use(Row).use(Col)
Vue.use(Search)
Vue.use(Popup)

export default {
  components: {
    // headers: Header
  },
  data () {
    return {
      bannerlist: [],
      show: false
    }
  },
  methods: {
    contact () {
      // this.$router.push({ path: 'relationship'})
      this.$router.push({ path: 'contact' })
    },
    showPopup () {
      this.show = true
    },
    Goingtodo () {
      this.$router.push({ path: 'goingtodo' })
    },
    GotoAssist () {
      this.$router.push({ path: 'assist' })
    },
    askAssist () {
      this.$router.push({ path: 'askAssist' })
    }
  },
  mounted () {
  }
}
</script>
<style lang="scss" scoped>
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
        .van-popup--right {
          top: 13%;
          right: 5%;
        }
        .van-overlay {
          background: none;
        }
        .van-popup {
          background-color: #424242;
          ul {
            li {
              display: flex;
              justify-content: center;
              color: #fff;
              align-items: center;
              padding: .5rem 0;
              span {
                margin: 0 .5rem;
                font-size: .75rem;
              }
            }
          }
        }
      }
    }
    .van-search__content{
      background: rgb(236, 236, 236);
      border-radius: .2rem;
    }
    .waiting {
      padding-left: 1rem;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #eee;
      border-top: 1px solid #eee;
      background-color: #EEE;
      .waiting_l {
        display: flex;
        justify-content: space-around;
        img {
          width: 3.13rem;
          height: 3.13rem;
          border-radius: 50%;
        }
        .waiting_cont {
          // height: 8rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-size: .88rem;
          span {
            color: #666;
            margin: .5rem 0;
          }
          p {
            color: #B2B2B2;
            margin: 0 1rem;
          }
          .img_box {
            display: flex;
            justify-content: space-between;
            img {
              width: 1.88rem;
              height: 1.88rem;
              margin: .5rem .3rem;
            }
          }
        }
      }
      i {
        display: flex;
        align-items: center;
        color: #B0B0B0;
        font-size: .75rem;
        margin-right: .5rem;
      }
    }
    .thingList {
      padding-left: 1rem;
      li {
      padding: .5rem 0;
        border-bottom: 1px solid #d2d2d2;
        display: flex;
        justify-content: flex-start;
        width: 100%;
        img {
          width: 3.13rem;
          height: 3.13rem;
          border-radius: 50%;
          margin-right: 1rem;
        }
        .thingList_cont {
        }
      }
    }
  }
}
</style>
