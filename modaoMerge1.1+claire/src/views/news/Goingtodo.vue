<template>
  <div class="container">
    <div class="content">
      <!-- <router-view name="header"></router-view>       -->
      <headers>
        <div slot="center">待办事项</div>
        <div slot="right" @click="Setting">设置</div>
      </headers>
      <p class="willdo">待处理申请</p>
      <ul class="accept">
        <li>
          <div class="left">
            <img src="../../../public/img/2.jpg" alt="">
          </div>
          <div class="center">
              <p>好友请求：孙官清</p>
            </div>
          <div class="right">
            <van-icon name="cross" size="1.25rem"/>
            <van-icon name="success" size="1.25rem"/>              
          </div>
        </li><li>
          <div class="left">
            <img src="../../../public/img/5.jpg" alt="">
          </div>
          <div class="center">
              <p>好友请求：孙官清</p>
              <span>家辉生鲜出纳/财务助理</span>
            </div>
          <div class="right">
            <van-icon name="cross" size="1.25rem"/>
            <van-icon name="success" size="1.25rem"/>              
          </div>
        </li><li>
          <div class="left">
            <img src="../../../public/img/4.jpg" alt="">
          </div>
          <div class="center">
              <p>好友请求：袁学员</p>
              <span>合肥凌凯通信技术有限公司/财务助理</span>
            </div>
          <div class="right">
            <van-icon name="cross" size="1.25rem"/>
            <van-icon name="success" size="1.25rem"/>              
          </div>
        </li>
      </ul>
      <p class="willdo">你可能认识的人</p>
      <ul class="maybe">
        <li>
          <div class="left">
            <img src="../../../public/img/6.jpg" alt="">
          </div>
          <div class="center">
              <p>方燕</p>
              <p>宝宝树网站高级UI设计师</p>
              <p>同行</p>
            </div>
          <div class="right">
            <van-icon name="plus" size="1.25rem"/>好友              
          </div>
        </li><li>
          <div class="left">
            <img src="../../../public/img/7.png" alt="">
          </div>
          <div class="center">
              <p>李娜</p>
              <p>广联电子商务设计师</p>
              <p>同行</p>
            </div>
          <div class="right">
            <van-icon name="plus" size="1.25rem"/>好友                          
          </div>
        </li><li>
          <div class="left">
            <img src="../../../public/img/8.png" alt="">
          </div>
          <div class="center">
              <p>Jing-w</p>
              <p>作业帮教育有限公司UI设计师</p>
              <p>同行</p>
            </div>
          <div class="right">
            <van-icon name="plus" size="1.25rem"/>好友              
          </div>
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
    },
    Setting () {
      this.$router.push({ path: 'setting'})
    }
  },
  mounted () {
  }
}
</script>
<style lang="scss">
@import '@/lib/reset.scss';
.container {
  overflow: auto;
  .content{
    .willdo {
        font-size: 0.88rem;
        color: #666;
        text-indent: .5rem;
        background: rgba(242, 242, 242, 1);
        padding: .5rem 0;
      }
    .accept {
      li {
        display: flex;
        align-items: center; // 或者给.right设置align-self:center
        border-top: .06rem solid #E9E9E9;
        padding: 1rem 0;
        p {
          font-size: 0.88rem;
          color: #666;
          margin: .8rem 0;
        }
        span {
          font-size: 0.75rem;
          color: #666;
        }
        .left {
          flex: 1;
          margin-left: 1rem;
          img {
            width: 3.13rem;
            height: 3.13rem;
            border-radius: 50%;
          }
        }
        .center {
          margin-left: .5rem;
          flex: 4;
          width: 7rem;
        }
        .right {
          flex: 1;
          i {
            margin-right: .5rem;
          }
        }
      }
    }
    .maybe {
      background: rgba(242, 242, 242, 1);
      li {
        background:#fff;
        display: flex;
        align-items: center; // 或者给.right设置align-self:center
        border-top: .06rem solid #E9E9E9;
        padding: 1rem 0;
        p {
          color: #666;
          padding: .5rem 0;
        }
        p:nth-of-type(1) {
          font-size: 1rem;

        }
        p:nth-of-type(2) {
          font-size: 0.75rem;
        }
        .left {
          flex: 1;
          margin-left: 2rem;
          img {
            width: 3.75rem;
            height: 3.75rem;
            border-radius: 50%;
          }
        }
        .center {
          margin-left: .5rem;
          flex: 4;
          width: 7rem;
        }
        .right {
          flex: 1;
          border: .06rem solid #000;
          font-size: 0.75rem;
          i {
            margin-right: .5rem;
          }
        }
      }
    }
  }
}
</style>
