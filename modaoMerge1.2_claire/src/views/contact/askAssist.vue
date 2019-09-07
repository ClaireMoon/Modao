<template>
  <div class="container">
    <div class="content">
      <headers>
        <div slot="center">求职招聘小助手</div>
        <div slot="right" @click="setting">设置</div>
      </headers>
      <div class="assInfo">
        <p class="time">昨天 14：41</p>
        <ul>
          <li>
            <p>第一步：定制职位偏好</p>
            <p>机会只青睐有准备的头脑，提前告诉我对职位的目标和期望,我会持续留意符合要求的职位，并及时推荐给你</p>
            <span>立即开始定制</span>
          </li>
          <li>
            <p>第二步：了解最新职位行情</p>
            <p>机会只青睐有准备的头脑，不然换工作也需要提前了解行情，先来看一看知名企业的热招职位吧</p>
            <span>立即查看</span>
          </li>
          <li>
            <p>第三步：走向好公司</p>
            <p>机会只青睐有准备的头脑，提前告诉我对职位的目标和期望,我会持续留意符合要求的职位，并及时推荐给你</p>
            <span>立即开始定制</span>
          </li>
        </ul>
      </div>
    </div>
  </div>  
</template>
<script>
import Vue from 'vue'
import { Icon } from 'vant'
import Header from '@/components/Header.vue'
Vue.use(Icon)

export default {
  components: {
    headers: Header
  },
  methods: {
    setting () {
      this.$router.push({ path: 'chart' })
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/lib/reset.scss';
.container {
  overflow: auto;
  .content{
    .assInfo {
      .time {
        width: 7rem;
        height: 1.63rem;
        background: #E9E9E9;
        font: .88rem/1.63rem "";
        margin: 0 auto;
        margin-bottom: 1rem;
      }
      ul {
        margin: 0 1rem;
        li {
          padding: 1rem 1rem;
          background: #E9E9E9;
          position: relative;
          margin: 1rem 0;
          p {
            font-size: 0.75rem;
          }
          p:nth-of-type(1) {
            color: #6E6E6E;
          }
          p:nth-of-type(2) {
            color: #A3A3A3;
          }
          span {
            position: absolute;
            right: 1rem;
            bottom: .5rem;
          }
        }
      }
    }
  }
}
</style>