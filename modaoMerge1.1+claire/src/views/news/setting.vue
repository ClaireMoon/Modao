<template>
  <div class="container">
    <div class="content">
      <!-- <router-view name="header"></router-view>       -->
      <headers>
        <div slot="center">防打扰设置</div>
      </headers>
      <p class="title">哪些人申请好友时提醒我</p>
      <van-radio-group v-model="radio">
        <van-cell-group>
          <van-cell title="所有人" clickable @click="radio = '1'">
            <van-radio slot="right-icon" name="1" checked-color="#07c160" />
          </van-cell>
          <van-cell title="我的人脉（同事.校友.同乡等）" clickable @click="radio = '2'">
            <van-radio slot="right-icon" name="2" checked-color="#07c160"/>
          </van-cell>
          <van-cell title="我的好友点评过的人" clickable @click="radio = '3'">
            <van-radio slot="right-icon" name="3" checked-color="#07c160"/>
          </van-cell>
        </van-cell-group>
      </van-radio-group>
      <p class="title">不接受以下用户添加我为好友（多选）</p>
      <van-checkbox-group v-model="result">
        <van-cell-group>
          <van-cell v-for="(item, index) in list" clickable :key="item" :title="`${item}`"
            @click="toggle(index)" >
            <van-checkbox :name="item" ref="checkboxes" slot="right-icon" checked-color="#07c160"/>
          </van-cell>
        </van-cell-group>
      </van-checkbox-group>
    </div>
</div>
</template>
<script>
import Vue from 'vue'
import { Swipe, SwipeItem, Icon, Row, Col, Search, List, RadioGroup, Radio, Cell, CellGroup, CheckboxGroup, Checkbox } from 'vant'
import axios from 'axios'
import Header from '@/components/Header.vue'

Vue.use(Icon)
Vue.use(Swipe).use(SwipeItem)
Vue.use(Row).use(Col)
Vue.use(Search)
Vue.use(List)
Vue.use(RadioGroup)
Vue.use(Radio)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(CheckboxGroup)
Vue.use(Checkbox)

export default {
  components: {
    headers: Header
  },
  data () {
    return {
      bannerlist: [],
      radio: '',
      result: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
      list: ['非“文化传媒”行业的', '猎头', '销售.理财.保险', '影响力下于10的', '未认证用户', '不允许通过手机号搜索到我', '认证']
    }
  },
  methods: {
    toggle(index) {
      this.$refs.checkboxes[index].toggle();
    },
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
    .title {
      font-size: 0.88rem;
      color: #666;
      text-indent: .5rem;
      background: rgba(242, 242, 242, 1);
      padding: 1rem 0;
    }
    .setting_cont {
      li {
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>
