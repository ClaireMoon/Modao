<template>
  <div class="container">
    <header class="header">全部老鸟</header>
    <div class="content">
      <div class="sort">
        <div class="left">全部职位</div>
        <div class="center">价格</div>
        <div class="right">综合</div>
      </div>
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <oBirds :oBirds = "oBirds"></oBirds>
      </van-list>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { List } from 'vant'
import axios from 'axios'
import Obirds from '@/components/Obirds'

Vue.use(List)
export default {
  data () {
    return {
      oBirds: [],
      pageCode: 1,
      loading: false,
      finished: false
    }
  },
  methods: {
    onLoad () {
      this.loading = true
      axios.get('https://www.daxunxun.com/douban?count=20&start=' + this.pageCode * 20).then(res => {
        this.loading = false
        this.pageCode++
        if (res.data.length === 0) {
          this.finished = true
        } else {
          this.oBirds = [...this.oBirds, ...res.data]
        }
      })
    }
  },
  components: {
    oBirds: Obirds
  },
  mounted () {
    axios.get('https://www.daxunxun.com/douban').then(res => {
      console.log(res.data)
      this.oBirds = res.data
    })
    axios.get('https://www.daxunxun.com/banner').then(res => {
      // console.log(res.data)
      let arr = []
      res.data.map(item => {
        arr.push('https://www.daxunxun.com' + item)
      })
      console.log(arr)
      this.images = arr
    })
  }
}
</script>

<style lang="scss">
@import '@/lib/reset.scss';
.container{
  .content{
    padding-top: .5rem;
    .sort{
      @include rect(100%, 3.13rem);
      @include background-color(#F0F0F0);
      @include flexbox();
      align-items: center;
      justify-content: space-around;
      font-size: 0.88rem;
      @include color(#939393);
    }
  }
}
</style>
