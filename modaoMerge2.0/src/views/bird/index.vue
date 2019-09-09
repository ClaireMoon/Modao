<template>
  <div class="container">
    <header class="header">老鸟</header>
    <div class="content">
      <div class="help">
        <div class="left">
          <p>600</p>
          在线老鸟
        </div>
        <div class="center">
          <p></p>
          <i>发布求助</i>
        </div>
        <div class="right">
          <p>600</p>
          今日解决问题
        </div>
      </div>
      <div class="more">
        <div class="title">
          <h6>推荐老鸟</h6>
          <a href="allBird">查看更多老鸟</a>
        </div>
        <span>找一个老鸟，改变你的职业生涯</span>
        <ul class="birds">
          <li>
            <div class="avatars"></div>
            <p>姓名</p>
            <span>苏宁易购</span>
            <span>营销策划经理</span>
          </li>
          <li>
            <div class="avatars"></div>
            <p>姓名</p>
            <span>苏宁易购</span>
            <span>营销策划经理</span>
          </li>
          <li>
            <div class="avatars"></div>
            <p>姓名</p>
            <span>苏宁易购</span>
            <span>营销策划经理</span>
          </li>
          <li>
            <div class="avatars"></div>
            <p>姓名</p>
            <span>苏宁易购</span>
            <span>营销策划经理</span>
          </li>
        </ul>
        <ul class="ranking">
          <li>
            <span>老鸟排行</span>
            <p>最受欢迎</p>
            <img />
          </li>
          <li>
            <span>老鸟排行</span>
            <p>最受欢迎</p>
            <img />
          </li>
          <li>
            <span>老鸟排行</span>
            <p>最受欢迎</p>
            <img />
          </li>
        </ul>
      </div>
      <div class="detail">
        <div class="title">
          <h6>求助问题</h6>
          <div class="right">
            <a href="##">推荐</a>
            <a href="##">最新</a>
            <a href="##">公司相关</a>
          </div>
        </div>
        <span class="fast">以下问题正在急切寻求帮助</span>
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          <prolist :prolist = "prolist"></prolist>
        </van-list>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { List } from 'vant'
import axios from 'axios'
import Prolist from '@/components/Prolist'

Vue.use(List)
export default {
  data () {
    return {
      prolist: [],
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
          this.prolist = [...this.prolist, ...res.data]
        }
      })
    }
  },
  components: {
    prolist: Prolist
  },
  mounted () {
    axios.get('https://www.daxunxun.com/douban').then(res => {
      console.log(res.data)
      this.prolist = res.data
    })
  }
}
</script>

<style lang="scss">
@import '@/lib/reset.scss';
.container{
  .content{
    width: 100%;
    line-height: .13rem;
    .help{
      @include rect(100%, 8.5rem);
      @include background-color(#E8E8E8);
      @include flexbox();
      align-items: center;
      justify-content: space-around;
      .left {
        font-size:.75rem;
        color:#5E5E5E;
      }
      .center {
        p {
          @include rect(3.13rem, 3.13rem);
          border-radius: 50%;
          background:#D5D5D5;
          margin:0 auto;
        }
        i {
          display:inline-block;
          background:#D9D9D9;
          @include rect(95px, 26px);
          text-align: center;
          border-radius: 15px;
          line-height:26px;
          font-size:14px;
          margin-top:24px;
          color:#939393;
        }
      }
      .right {
        font-size:12px;
        color:#5E5E5E;
      }
    }
    .more{
      @include rect(100%, 386px);
      background-color: rgba(248, 248, 248, 1);
      border: 0.06px solid rgba(255, 255, 255, 0);
      padding: 0 1.06rem;
      .title{
        height: 24px;
        h6{
          float: left;
          font-size: 1rem;
          color: rgba(94, 94, 94, 1);
        }
        a{
          float: right;
          color: rgba(94, 94, 94, 1);
          font-size: .75rem;
        }
      }
      span{
        color: rgba(94, 94, 94, 1);
        font-size: 0.75rem;
        text-align: center;
        font-family: SourceHanSansSC-regular;
      }
      .birds{
        @include rect(100%, 166px);
        @include flexbox();
        align-items: center;
        justify-content: space-around;
        li{
          width: 5rem;
          .avatars{
            @include rect(3.75rem, 3.75rem);
            border-radius: 50%;
            background-color: rgba(223, 223, 223, 1);
            margin: 0 auto;
          }
          p{
            text-align: center;
            margin: 10px 0;
            font-size: .88rem;
          }
          span{
            display: block;
          }
        }
      }
      .ranking{
        @include rect(100%, 150px);
        @include flexbox();
        align-items: center;
        justify-content: space-around;
        li{
          width: 100px;
          height: 120px;
          border-radius: 6px;
          background-color: rgba(215, 215, 215, 1);
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0);
          margin: 0 5px;
          span{
            display: block;
            padding-top: 30px;
          }
          p {
            font-size: 1rem;
          }
          img{
            @include rect(2.94rem,1.75rem1);
          }
        }
      }
    }
    .detail{
      @include rect(100%, 2.2rem);
      border: 0.06px solid rgba(255, 255, 255, 0);
      padding: 0 1.06rem;
      .title{
        height: 24px;
        h6{
          float: left;
          font-size: 1rem;
          color: rgba(94, 94, 94, 1);
        }
        .right{
          float: right;
          color: rgba(94, 94, 94, 1);
          font-size: .75rem;
          a{
            color: rgba(123, 123, 123, 1);
            font-size: 12px;
            margin: 0 2px;
          }
        }
      }
      .fast{
        color: rgba(94, 94, 94, 1);
        font-size: 0.75rem;
        font-family: SourceHanSansSC-regular;
      }
    }
  }
}
</style>
