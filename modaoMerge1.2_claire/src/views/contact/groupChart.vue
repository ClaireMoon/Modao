<template>
  <div class="container">
    <div class="content">
      <headers>
        <div slot="center">我的群聊</div>
      </headers>
      <p>暂时没有群聊哦</p>
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
  }
}
</script>
<style lang="scss" scoped>
@import '@/lib/reset.scss';
.container {
  overflow: auto;
  .content {
    p {
      margin-top: 16rem;
      text-align: center;
      font-size: 0.88rem;
      color: #666;
    }
  }
}
</style>
