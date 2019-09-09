<template>
  <div class="container">
    <div class="content">
      <headers>
        <div slot="center">看准小助手</div>
        <div slot="right" @click="chart">设置</div>
      </headers>
      <div class="assInfo">
        <div class="firstInfo">
          <img src="../../../public/img/8.png" alt="">
          <p>xxx小姐/先生，欢迎你~我是你的专属小助手，汇集看准14851248位职场精英的力量，助你实现自己的职业梦想。
            <i class="tringle"></i>
          </p>
        </div>
        <ul class="moreInfo">
          <li>
            <p class="time">昨天 14：51</p>
            <div class="firstInfo">
              <img src="../../../public/img/5.jpg" alt="">
              <!-- <div class="infoBox">             -->
                <p>xxx小姐/先生，欢迎你~我是你的专属小助手，汇集看准14851248位职场精英的力量，助你实现自己的职业梦想。
                  <i class="tringle"></i>
                </p>
            </div>
          </li>
          <li>
            <p class="time">昨天 16：21</p>
            <div class="firstInfo">
              <img src="../../../public/img/4.jpg" alt="">
              <!-- <div class="infoBox">             -->
                <p>xxx小姐/先生，欢迎你~我是你的专属小助手，汇集看准14851248位职场精英的力量，助你实现自己的职业梦想。
                  <i class="tringle"></i>
                </p>
            </div>
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
    chart () {
      this.$router.push({ path: 'chart' })
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/lib/reset.scss';
.container {
  overflow: auto;
  .content {
    .assInfo {
      img {
        width: 1.88rem;
        height: 1.88rem;
        border-radius: 50%;
        margin: 0 1rem;
      }
      p {
          position: relative;
          width: 13.75rem;
          height: 5.5rem;
          font-size: 0.75rem;
          color: #101010;
          border: .06rem solid #bbb;
          background: #E9E9E9;
          border-radius: .31rem;
          padding: .5rem .5rem;
        }
      .tringle {
        position: absolute;
        left: -.5rem;
        top: 1rem;
        width: 0rem;
        height: 0rem;
        border-right: .5rem solid #E9E9E9;
        border-top: .5rem solid #fff;
        border-bottom: .5rem solid #fff;
      }
      .time {
        width: 7rem;
        height: 1.63rem;
        background: #E9E9E9;
        font: .88rem/.63rem "";
        // font-size: 0.88rem;
        margin: 2rem auto;
      }
      .firstInfo {
        display: flex;        
      }
    }
  }
}

</style>
