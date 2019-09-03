<template>
  <div class="container">
    <header class="header">首页</header>
    <div class="content">
      <div class="banner">
        <van-swipe :autoplay="3000">
          <van-swipe-item v-for="(item, index) in bannerlist" :key="index">
            <img :src="item" alt="">
            <!-- <img v-lazy="image" /> -->
          </van-swipe-item>
        </van-swipe>
      </div>
      <!-- <van-search v-model="value" placeholder="请输入搜索关键词" show-action shape="round" @search="onSearch">
        <div slot="action" @click="onSearch">搜索</div>
      </van-search> -->
      <van-search placeholder="请输入搜索关键词" v-model="value" />
      <div class="nav">
        <router-link to="/company" tag="span" class="company">看公司</router-link>
        <router-link to="/relationship" tag="span" class="rltship">人脉</router-link>
        <router-link to="/interview" tag="span" class="interview">面试</router-link>
        <router-link to="/question" tag="span" class="question">问答</router-link>
      </div>
      <ul class="recommend">
        <!-- <li class="proitem" v-for="item of test" :key="item.id" @click="goDetail(item.id)"> -->
        <li @click="goDetail">
          <div class="title">
            <div class="title_l">推荐</div>
            <div class="title_r">换一批</div>
          </div>
          <div class="cont">
            <div class="contInfo">
              <h4>广东咏声文化传播有限公司</h4>
              <p>广州，影视/媒体</p>
              <div class="contInfo_label">
                <span>点评13</span><span>面经11</span><span>问答10</span>
              </div>
              <span>在影视/媒体行业排名1538</span>
            </div>
            <div class="contImg"></div>
          </div>
        </li>
        <li>
          <div class="title">
            <div class="title_l">推荐</div>
            <div class="title_r">换一批</div>
          </div>
          <div class="cont">
             <div class="contInfo">
              <h4>广东咏声文化传播有限公司</h4>
              <p>广州，影视/媒体</p>
              <div class="contInfo_label">
                <span>点评13</span><span>面经11</span><span>问答10</span>
              </div>
              <span>在影视/媒体行业排名1538</span>
            </div>

            <div class="contImg"></div>
          </div>
        </li>
      </ul>
      <div class="rank_box">
        <div class="rank">
          <div class="rank_title">推荐</div>
          <ul class="rank_cont">
            <li>
              <img src="../../../public/img/1.jpg" alt="">
              <p>员工心中最靠谱的</p>
              <div class="li_foot">
                <span>26207查看</span>
                <span>50家公司</span>
              </div>
            </li>
             <li>
              <img src="../../../public/img/1.jpg" alt="">
              <p>员工心中最靠谱的</p>
              <div class="li_foot">
                <span>26207查看</span>
                <span>50家公司</span>
              </div>
            </li>
             <li>
              <img src="../../../public/img/1.jpg" alt="">
              <p>员工心中最靠谱的</p>
              <div class="li_foot">
                <span>26207查看</span>
                <span>50家公司</span>
              </div>
            </li>
             <li>
              <img src="../../../public/img/1.jpg" alt="">
              <p>员工心中最靠谱的</p>
              <div class="li_foot">
                <span>26207查看</span>
                <span>50家公司</span>
              </div>
            </li>
          </ul>
          <div class="rank_footer">
            <span>查看全部排行榜</span>
            <div class="more"> <!--@click="more"-->
              <van-icon name="arrow" size="1.25rem"/>
            </div>
          </div>
        </div>
      </div>
      <div class="company">
        <h3>企业专题</h3>
        <ul class="company_ul">
          <li class="company_li">
            <div class="li_left">
              <p>双十一还没到，这些电商公司已经燥起来了！！</p>
              <div class="li_info_foot">
                <span>26207查看</span>
                <span>50家公司</span>
              </div>
            </div>
            <img src="../../../public/img/2.jpg" alt="">
          </li>
          <li class="company_li">
            <div class="li_left">
              <p>双十一还没到，这些电商公司已经燥起来了！！</p>
              <div class="li_info_foot">
                <span>26207查看</span>
                <span>50家公司</span>
              </div>
            </div>
            <img src="../../../public/img/2.jpg" alt="">
          </li>
          <li class="company_li">
            <div class="li_left">
              <p>双十一还没到，这些电商公司已经燥起来了！！</p>
              <div class="li_info_foot">
                <span>26207查看</span>
                <span>50家公司</span>
              </div>
            </div>
            <img src="../../../public/img/2.jpg" alt="">
          </li>
          <li class="company_li">
            <div class="li_left">
              <p>双十一还没到，这些电商公司已经燥起来了！！</p>
              <div class="li_info_foot">
                <span>26207查看</span>
                <span>50家公司</span>
              </div>
            </div>
            <img src="../../../public/img/2.jpg" alt="">
          </li>
        </ul>
        <div class="company_footer">
            <span>查看全部专题</span>
            <div class="more"> <!--@click="more"-->
              <van-icon name="arrow" size="1.25rem"/>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { Swipe, SwipeItem, Search, Icon } from 'vant'
import axios from 'axios'

Vue.use(Swipe).use(SwipeItem)
Vue.use(Search)
Vue.use(Icon)

export default {
  data () {
    return {
      bannerlist: []
    }
  },
  methods: {
    goDetail () {
      this.$router.push({ path: 'detail/' })
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
    })
  }
}
</script>
<style lang="scss">
@import '@/lib/reset.scss';
.container{
  .content{
    .banner { width: 100%; height: 12.25rem; overflow: hidden;
      .van-swipe { width: 100%; height: 100%;
        img { width: 100%; border: 1px solid #ccc; }
      }
    }
    .van-search__content{
      background: rgb(236, 236, 236);
      border-radius: .2rem;
    }
    .nav{
      display: flex;
      justify-content: space-around;
      margin: 2.0rem 2.0rem;
      font-size: .88rem;
      span{
        width: 3.75rem;
        height: 3.75rem;
        border-radius: 50%;
        background-color: rgb(143, 171, 255);
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    .recommend{
      li{
        padding: 1rem;
        height: 11.88rem;
        background-color:#FBFBFB;
        .title{
          display: flex;
          justify-content: space-between;
          .title_l{ font-size: 1.25rem; }
          .title_r{ font-size: .75rem;}
          margin-bottom: 1rem;
        }
        .cont{
          display: flex;
          justify-content: space-between;
          .contInfo{
            font-size: .75rem;
            width: 12.0rem;
            h4{
              font-size: 1rem;
              color: #828282;
              margin: .5rem 0;
            }
            p{
              margin: 1rem 0;
              color: #828282;
            }
            .contInfo_label{
              margin:.5rem 0;
              display: flex;
              justify-content: space-around;
              color: #828282; // span{}
            }
            span{
              color: #828282;
            }
          }
          .contImg{
            width: 6.88rem;
            background-color: #f99;
          }
        }
        margin: .5rem 1rem;
      }
    }
    .rank_box{
      .rank{
        height: 29.38rem;
        background-color:#FBFBFB;
        margin: 0 auto;
        overflow: hidden;
        margin: .5rem 1rem;
        .rank_title{
          font-size: 1.25rem;
          margin: 1rem 0 0 1rem;
        }
        .rank_cont{
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
          li{
            width: 9.38rem;
            // height: 6.56rem;
            margin: 1rem 1rem;
            img{
              width: 9.38rem;
              height: 6.56rem;
            }
            p{
              text-align: center;
              font-size: .88rem;
              color: #5E5E5E;
            }
            .li_foot{
              display: flex;
              justify-content: space-around;
              span{
                font-size: .75rem;
                color: #ACAAAA;
              }
            }
          }
        }
        .rank_footer{
          display: flex;
          justify-content: space-between;
          padding: 2.5rem 1rem 0 1rem;
          color: #686767;
          span{font-size: .88rem;} // .more{}
        }
      }
    }
    .company{
      margin-bottom: 1rem;
      h3{
        font-size: 1.25rem;
        color: #868686;
        margin: 1rem 0 1rem 1rem;
      }
      .company_ul{
        padding: 0 1rem;
        .company_li{
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid #BBB;
          padding: 1rem 0;
          .li_left{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            p{
              font-size: .81rem;
              margin: 0 1rem;
              color: #8c8c8c;
            }
            .li_info_foot{
              display: flex;
              justify-content: space-between;
              span{
                font-size: .75rem;
                color: #ACAAAA;
              }
            }
          }
          img{
            width: 8.38rem;
            height: 5.81rem;
            margin: 0 1rem;
          }
        }
      }
      .company_footer{
        display: flex;
          justify-content: space-between;
          padding: 2.5rem 1rem 0 1rem;
          color: #686767;
          span{font-size: .88rem;}
          .more{ padding-bottom: 1rem;}
      }
    }
  }
}
</style>
