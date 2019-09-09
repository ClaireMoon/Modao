<template>
  <div class="container">
    <div class="header_relationship">
      <div class="header_title">
        <div class="back" @click="back">
          <van-icon name="arrow-left" size="1.25rem"/>
        </div>
        <p>机遇</p>
        <div class="plus"> <!--@click="more"-->
          <van-icon name="plus" size="1.25rem"/>
        </div>
      </div>
    </div>
    <div class="search">
      <van-search placeholder="搜索" v-model="value" @search="onSearch" />
    </div>
    <ul class="friend">
      <li class="friend_li">
        <div class="mine">
          <img src="../../../public/img/1.jpg" alt="">
          <p>我的好友</p>
        </div>
        <div class="more"> <!--@click="more"-->
          <van-icon name="arrow" size="1.25rem"/>
        </div>
      </li>
      <li class="friend_li">
        <div class="mine">
          <img src="../../../public/img/2.jpg" alt="">
          <p>人脉探索</p>
        </div>
        <div class="more"> <!--@click="more"-->
          <van-switch :value="checked" @input="onInput" size="1.25rem" active-color="#07c160" inactive-color="#9d9d9d"/>
          <i>8000+ </i>
          <van-icon name="arrow" size="1.25rem"/>
        </div>
      </li>
    </ul>
    <ul class="cont_ul">
      <li class="friend_li">
        <div class="mine">
          <img src="../../../public/img/2.jpg" alt="">
          <p>求职招聘</p>
        </div>
        <div class="more"> <!--@click="more"-->
          <p>高薪工作热招</p>
          <van-icon name="arrow" size="1.25rem"/>
        </div>
      </li>
      <li class="friend_li">
        <div class="mine">
          <img src="../../../public/img/1.jpg" alt="">
          <p>急速找人</p>
        </div>
        <div class="more"> <!--@click="more"-->
          <p>找合作，找人在，找投资</p>
          <van-icon name="arrow" size="1.25rem"/>
        </div>
      </li>
      <li class="friend_li">
        <div class="mine">
          <img src="../../../public/img/1.jpg" alt="">
          <p>麦课堂</p>
        </div>
        <div class="more"> <!--@click="more"-->
          <p>每天学习10分钟</p>
          <van-icon name="arrow" size="1.25rem"/>
        </div>
      </li>
      <li class="friend_li">
        <div class="mine">
          <img src="../../../public/img/1.jpg" alt="">
          <p>职场进阶</p>
        </div>
        <div class="more"> <!--@click="more"-->
          <p>直播精英分享</p>
          <van-icon name="arrow" size="1.25rem"/>
        </div>
      </li>
      <li class="friend_li">
        <div class="mine">
          <img src="../../../public/img/2.jpg" alt="">
          <p>我的好友</p>
        </div>
        <div class="more"> <!--@click="more"-->
          <van-icon name="arrow" size="1.25rem"/>
        </div>
      </li>
      <li class="friend_li">
        <div class="mine">
          <img src="../../../public/img/1.jpg" alt="">
          <p>麦课堂</p>
        </div>
        <div class="more"> <!--@click="more"-->
          <p>每天学习10分钟</p>
          <van-icon name="arrow" size="1.25rem"/>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import Vue from 'vue'
import { Icon, Search, Switch, Dialog } from 'vant'
Vue.use(Icon)
Vue.use(Search)
Vue.use(Switch)
Vue.use(Dialog)
export default {
  data () {
    return {
      checked: true
    }
  },
  methods: {
    onInput (checked) {
      Dialog.confirm ({
        title: '提醒',
        message: '是否切换开关？'
      }).then(() => {
        this.checked = checked
      })
    },
    back () {
      // this.$router.push({ path: 'relationship'})
      this.$router.back()
    },
    onSearch () {

    }
  }
}
</script>
<style lang="scss">
@import '@/lib/reset.scss';
.container {
  overflow: auto;
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
  .search {
    width: 100%;
    margin: .5rem 0;
  }
  // .friend {
  .friend_li {
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: #f9f9f9;
    padding: 1rem;
    border-bottom: 1px solid #f0f0f0;
    .mine {
      display: flex;
      justify-content: space-around;
      align-items: center;
      img {
        width: 3.13rem;
        height: 3.13rem;
        border-radius: 50%;
      }
      p {
        margin-left: 1rem;
        font-size: .88rem;
        color: #828282;
      }
    }
    .more {
      display: flex;
      align-items: center;
      color: #c8c8c8;
      font-size: .8rem;
      img {
        width: 3rem;
        height: 1.25rem;
        margin-right: 1rem;
      }
    }
  }
// }
  .cont_ul {
    margin-top: 1rem;
  }
}
</style>
