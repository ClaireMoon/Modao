<template>
  <div class="container">
    <div class="content">
      <!-- <router-view name="header"></router-view>       -->
      <headers></headers>
      <van-search placeholder="搜索人名.公司.职位" v-model="value" />
      <ul class="contactList">
        <li class="contactList_li">
          <van-icon name="friends-o" size="1.5rem"/>
          <span>我的群聊</span>
        </li>
        <li class="contactList_li">D</li>
        <li class="contactList_li">
          <img src="../../../public/img/2.jpg" alt="">
          <span>订阅信息</span>
        </li>
        <li class="contactList_li">K</li>
        <li class="contactList_li">
          <img src="../../../public/img/4.jpg" alt="">          
          <span>看准小助手</span>
        </li>
        <li class="contactList_li">Q</li>
        <li class="contactList_li">
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
import axios from 'axios'
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
    }),
    console.log(list)
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
