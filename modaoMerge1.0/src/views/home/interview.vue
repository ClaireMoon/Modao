<template>
  <div class="container">
    <div class="header_relationship">
      <div class="header_title">
        <div class="back" @click="back">
          <van-icon name="arrow-left" size="1.25rem"/>
        </div>
        <p>面试准备</p>
        <div class="plus"></div>
      </div>
    </div>
    <div class="information">
      <h4>长知识</h4>
      <ul class="friend">
        <li class="friend_li">
          <div class="mine">
            <img src="../../../public/img/1.jpg" alt="">
            <div class="mine_info">
              <h4>简历提升</h4>
              <p>百投百中的简历秘笈</p>
            </div>
          </div>
          <div class="more"> <!--@click="more"-->
            <van-icon name="arrow" size="1.25rem"/>
          </div>
        </li>
        <li class="friend_li">
          <div class="mine">
            <img src="../../../public/img/2.jpg" alt="">
            <div class="mine_info">
              <h4>面试准备</h4>
              <p>逢试必过的套路秘籍</p>
            </div>
          </div>
          <div class="more"> <!--@click="more"-->
            <van-icon name="arrow" size="1.25rem"/>
          </div>
        </li>
        <li class="friend_li">
          <div class="mine">
            <img src="../../../public/img/2.jpg" alt="">
            <div class="mine_info">
              <h4>职业成长</h4>
              <p>产品运营快速入门指南</p>
            </div>
          </div>
          <div class="more"> <!--@click="more"-->
            <van-icon name="arrow" size="1.25rem"/>
          </div>
        </li>
        <li class="friend_li">
          <div class="mine">
            <img src="../../../public/img/2.jpg" alt="">
            <div class="mine_info">
              <h4>综合经验</h4>
              <p>不可不知的求职内幕</p>
            </div>
          </div>
          <div class="more"> <!--@click="more"-->
            <van-icon name="arrow" size="1.25rem"/>
          </div>
        </li>
      </ul>
    </div>
    <div class="problems">
      <h4>刷真题</h4>
      <ul class="cont_ul">
        <li class="friend_li">
          <div class="mine">
            <img src="../../../public/img/2.jpg" alt="">
            <div class="mine_info">
              <h4>通用类</h4>
            </div>
          </div>
          <div class="more"> <!--@click="more"-->
            <van-icon name="arrow" size="1.25rem"/>
          </div>
        </li>
        <li class="friend_li">
          <div class="mine">
            <img src="../../../public/img/1.jpg" alt="">
            <div class="mine_info">
              <h4>急速找人</h4>
            </div>
          </div>
          <div class="more"> <!--@click="more"-->
            <van-icon name="arrow" size="1.25rem"/>
          </div>
        </li>
        <li class="friend_li">
          <div class="mine">
            <img src="../../../public/img/1.jpg" alt="">
             <div class="mine_info">
              <h4>运营类</h4>
            </div>
          </div>
          <div class="more"> <!--@click="more"-->
            <van-icon name="arrow" size="1.25rem"/>
          </div>
        </li>
        <li class="friend_li">
          <div class="mine">
            <img src="../../../public/img/1.jpg" alt="">
             <div class="mine_info">
              <h4>技术类</h4>
            </div>
          </div>
          <div class="more"> <!--@click="more"-->
            <van-icon name="arrow" size="1.25rem"/>
          </div>
        </li>
        <li class="friend_li">
          <div class="mine">
            <img src="../../../public/img/2.jpg" alt="">
             <div class="mine_info">
              <h4>射击类</h4>
            </div>
          </div>
          <div class="more"> <!--@click="more"-->
            <van-icon name="arrow" size="1.25rem"/>
          </div>
        </li>
        <li class="friend_li">
          <div class="mine">
            <img src="../../../public/img/1.jpg" alt="">
             <div class="mine_info">
              <h4>行测类</h4>
            </div>
          </div>
          <div class="more"> <!--@click="more"-->
            <van-icon name="arrow" size="1.25rem"/>
          </div>
        </li>
        <li class="friend_li">
          <div class="mine">
            <img src="../../../public/img/1.jpg" alt="">
             <div class="mine_info">
              <h4>职业测评</h4>
            </div>
          </div>
          <div class="more"> <!--@click="more"-->
            <van-icon name="arrow" size="1.25rem"/>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { Icon, Search } from 'vant'
Vue.use(Icon)
Vue.use(Search)
export default {
  methods: {
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
  h4 {
    text-indent: 1rem;
    font-size: 1.13rem;
    color: #777;
    line-height: 2rem;
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
      .mine_info {
        h4 {
          font-size: .88rem;
          color: #666;
        }
        p {
          margin-left: 1rem;
          font-size: .88rem;
          color: #828282;
        }
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
  .information {
  }
  .problems {
    h4 {
      line-height: 3rem;
    }
  }
}
</style>
