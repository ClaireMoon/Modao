<template>
  <div class="container">
    <div class="content">
      <!-- <router-view name="header"></router-view>       -->
      <headers></headers>
      <van-search placeholder="搜索人名.公司.职位" v-model="value" />
      <ul class="contactList">
        <li class="contactList_li" @click="groupChart">
          <van-icon name="friends-o" size="1.5rem"/>
          <span>我的群聊</span>
        </li>
        <li class="contactList_li">D</li>
        <li class="contactList_li" @click="subject">
          <img src="../../../public/img/2.jpg" alt="">
          <span>订阅信息</span>
        </li>
        <li class="contactList_li">K</li>
        <li class="contactList_li" @click="assist">
          <img src="../../../public/img/4.jpg" alt="">
          <span>看准小助手</span>
        </li>
        <li class="contactList_li">Q</li>
        <li class="contactList_li"  @click="askAssist">
          <img src="../../../public/img/5.jpg" alt="">
          <span>求职招聘小助手</span>
        </li>
      </ul>
    </div>
</div>
</template>
<script>
import Vue from 'vue'
import { Swipe, SwipeItem, Icon, Row, Col, Search, List } from 'vant'
import Header from '@/components/Header.vue'

Vue.use(Icon)
Vue.use(Swipe).use(SwipeItem)
Vue.use(Row).use(Col)
Vue.use(Search)
Vue.use(List)

export default {
  components: {
    headers: Header
  },
  data () {
    return {
      bannerlist: []
    }
  },
  methods: {
    contact () {
      // this.$router.push({ path: 'relationship'})
      this.$router.back()
    },
    groupChart () {
      this.$router.push({ path: 'groupChart' })
    },
    assist () {
      this.$router.push({ path: 'assist' })
    },
    askAssist () {
      this.$router.push({ path: 'askAssist' })
    },
    subject () {
      this.$router.push({ path: 'subject' })
    }
  }
}
</script>
<style lang="scss">
@import '@/lib/reset.scss';
.container {
  overflow: auto;
  .content{
    .van-search__content{
      background: rgb(236, 236, 236);
      border-radius: .2rem;
    }
    .contactList {
      background-color: #eee;
      .contactList_li {
       display: flex;
       justify-content: flex-start;
       padding: 0 1.5rem;
       height: 2.5rem;
       align-items: center;
       img {
         width: 1.69rem;
         height: 1.69rem;
         border-radius: 50%;
       }
       span {
        margin-left: 1rem;
      }
     }
     li:nth-child(even) {
      background: #fff;
     }
   }
  }
}
</style>
