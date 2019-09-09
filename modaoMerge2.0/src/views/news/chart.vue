<template>
  <div class="container">
    <div class="content">
      <headers>
        <div slot="center">聊天详情</div>
      </headers>
      <div class="box">
        <van-cell-group>
          <van-switch-cell v-model="checked" title="置顶该消息" active-color="#07c160" inactive-color="#9d9d9d"/>
          <van-switch-cell v-model="checked_1" title="新消息通知" active-color="#07c160" inactive-color="#9d9d9d"/>
        </van-cell-group>
      </div>
      <van-cell-group>
          <van-switch-cell v-model="checked_2" title="加入黑名单" active-color="#07c160" inactive-color="#9d9d9d"/>
          <van-switch-cell v-model="checked_3" title="新消息通知" active-color="#07c160" inactive-color="#9d9d9d"/>
          <van-cell title="举报">
            <van-icon name="arrow" size="1.38rem" />
          </van-cell>
          <van-cell>
            <van-icon name="add-o" size="1.38rem" @click="contact">发起群聊</van-icon>
          </van-cell>
      </van-cell-group>
    </div>
  </div>
</template>
<script>
import Header from '@/components/Header.vue'
import Vue from 'vue'
import { Icon, SwitchCell, Cell, Radio } from 'vant'
Vue.use(Icon)
Vue.use(SwitchCell)
Vue.use(Cell)
Vue.use(Radio)

export default {
  components: {
    headers: Header
  },
  data () {
    return {
      checked: true,
      checked_1: false,
      checked_2: false,
      checked_3: false
    }
  },
  methods: {
    contact () {
      this.$router.push({ path: 'contact' })
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/lib/reset.scss';
.container {
  overflow: auto;
  .content{
    .box {
      padding: 1rem 0;
      background-color: #F2F2F2;
    }
    .van-cell__value--alone {
      text-align: center;
    }
  }
}
</style>
