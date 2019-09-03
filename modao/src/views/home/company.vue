<template>
  <div class="container">
    <div class="header_company">
      <div class="header_title">
        <div class="back" @click="back">
          <van-icon name="arrow-left" size="1.25rem"/>
        </div>
        <p>看公司</p>
        <div class="search"> <!--@click="more"-->
          <van-icon name="search" size="1.25rem"/>
        </div>
      </div>
      <ul class="header_nav">
        <li>
          <span>地区</span>
          <div class="down"> <!--@click="more"-->
            <van-icon name="arrow-down" size="1.18rem"/>
          </div>
          <div class="fail"> <!--@click="more"-->
            <van-icon name="fail" size="1.25rem"/>
          </div>
        </li>
        <li>
          <span>地区</span>
          <div class="down"> <!--@click="more"-->
            <van-icon name="arrow-down" size="1.25rem"/>
          </div>
          <i>|</i>
        </li>
        <li>
          <span>地区</span>
          <div class="down"> <!--@click="more"-->
            <van-icon name="arrow-down" size="1.25rem"/>
          </div>
        </li>
      </ul>

    </div>
    <ul class="content_company">
      <li>
        <div class="contImg"><img src="../../../public/img/2.jpg" alt=""></div>
        <div class="contInfo">
          <div class="contInfo_t">
            <div class="contInfo_t_l">
              <p>广东利尔化学</p>
              <span class="score">5.0分</span>              
            </div>
            <span class="foucus"> + 关注</span>
          </div>
          <div class="contInfo_c">
            <span>广州</span>
            <div class="fail"> <!--@click="more"-->
              <van-icon name="fail" size=".8rem"/>
            </div>
            <span>制药（生物/化学）</span>
            <div class="fail"> <!--@click="more"-->
            <van-icon name="fail" size=".8rem"/>
            </div>
            <span>100-499人</span>
          </div>
          <p class="contInfo_b">30条信息</p>
        </div>
      </li>
      <li>
        <div class="contImg"><img src="../../../public/img/2.jpg" alt=""></div>
        <div class="contInfo">
          <div class="contInfo_t">
            <div class="contInfo_t_l">
              <p>广东利尔化学</p>
              <span class="score">5.0分</span>              
            </div>
            <span class="foucus"> + 关注</span>
          </div>
          <div class="contInfo_c">
            <span>广州</span>
            <div class="fail"> <!--@click="more"-->
              <van-icon name="fail" size=".8rem"/>
            </div>
            <span>制药（生物/化学）</span>
            <div class="fail"> <!--@click="more"-->
            <van-icon name="fail" size=".8rem"/>
            </div>
            <span>100-499人</span>
          </div>
          <p class="contInfo_b">30条信息</p>
        </div>
      </li>
      <li>
        <div class="contImg"><img src="../../../public/img/2.jpg" alt=""></div>
        <div class="contInfo">
          <div class="contInfo_t">
            <div class="contInfo_t_l">
              <p>广东利尔化学</p>
              <span class="score">5.0分</span>              
            </div>
            <span class="foucus"> + 关注</span>
          </div>
          <div class="contInfo_c">
            <span>广州</span>
            <div class="fail"> <!--@click="more"-->
              <van-icon name="fail" size=".8rem"/>
            </div>
            <span>制药（生物/化学）</span>
            <div class="fail"> <!--@click="more"-->
            <van-icon name="fail" size=".8rem"/>
            </div>
            <span>100-499人</span>
          </div>
          <p class="contInfo_b">30条信息</p>
        </div>
      </li>
      <li>
        <div class="contImg"><img src="../../../public/img/2.jpg" alt=""></div>
        <div class="contInfo">
          <div class="contInfo_t">
            <div class="contInfo_t_l">
              <p>广东利尔化学</p>
              <span class="score">5.0分</span>              
            </div>
            <span class="foucus"> + 关注</span>
          </div>
          <div class="contInfo_c">
            <span>广州</span>
            <div class="fail"> <!--@click="more"-->
              <van-icon name="fail" size=".8rem"/>
            </div>
            <span>制药（生物/化学）</span>
            <div class="fail"> <!--@click="more"-->
            <van-icon name="fail" size=".8rem"/>
            </div>
            <span>100-499人</span>
          </div>
          <p class="contInfo_b">30条信息</p>
        </div>
      </li>
      <li>
        <div class="contImg"><img src="../../../public/img/2.jpg" alt=""></div>
        <div class="contInfo">
          <div class="contInfo_t">
            <div class="contInfo_t_l">
              <p>广东利尔化学</p>
              <span class="score">5.0分</span>              
            </div>
            <span class="foucus"> + 关注</span>
          </div>
          <div class="contInfo_c">
            <span>广州</span>
            <div class="fail"> <!--@click="more"-->
              <van-icon name="fail" size=".8rem"/>
            </div>
            <span>制药（生物/化学）</span>
            <div class="fail"> <!--@click="more"-->
            <van-icon name="fail" size=".8rem"/>
            </div>
            <span>100-499人</span>
          </div>
          <p class="contInfo_b">30条信息</p>
        </div>
      </li>
      <li>
        <div class="contImg"><img src="../../../public/img/2.jpg" alt=""></div>
        <div class="contInfo">
          <div class="contInfo_t">
            <div class="contInfo_t_l">
              <p>广东利尔化学</p>
              <span class="score">5.0分</span>              
            </div>
            <span class="foucus"> + 关注</span>
          </div>
          <div class="contInfo_c">
            <span>广州</span>
            <div class="fail"> <!--@click="more"-->
              <van-icon name="fail" size=".8rem"/>
            </div>
            <span>制药（生物/化学）</span>
            <div class="fail"> <!--@click="more"-->
            <van-icon name="fail" size=".8rem"/>
            </div>
            <span>100-499人</span>
          </div>
          <p class="contInfo_b">30条信息</p>
        </div>
      </li>
      <li>
        <div class="contImg"><img src="../../../public/img/2.jpg" alt=""></div>
        <div class="contInfo">
          <div class="contInfo_t">
            <div class="contInfo_t_l">
              <p>广东利尔化学</p>
              <span class="score">5.0分</span>              
            </div>
            <span class="foucus"> + 关注</span>
          </div>
          <div class="contInfo_c">
            <span>广州</span>
            <div class="fail"> <!--@click="more"-->
              <van-icon name="fail" size=".8rem"/>
            </div>
            <span>制药（生物/化学）</span>
            <div class="fail"> <!--@click="more"-->
            <van-icon name="fail" size=".8rem"/>
            </div>
            <span>100-499人</span>
          </div>
          <p class="contInfo_b">30条信息</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import Vue from 'vue'  
import { Icon } from 'vant'
Vue.use(Icon)
export default {
  methods: {
    back () {
      // this.$router.push({ path: 'relationship'})
      this.$router.back();
    }
  }
}
</script>
<style lang="scss">
@import '@/lib/reset.scss';
.container {
  .header_company {
    padding: .4rem 1rem;
    border-bottom: 1px solid #bbb;
    .header_title {
      display: flex;
      justify-content: space-between;
      color: #cacaca;
      margin-bottom: 1rem; // .back {   }
      p {
        font-size: 1rem;
        color: #9d9d9d;
      } // .search { }
    }
    .header_nav {
      display: flex;
      justify-content: space-around;
      li {
        color: #cacaca;
        display: flex;
        justify-content: space-around;
        span {
          font-size: .94rem;
        }
        .down {
          margin: 0 .5rem 0 .3rem;
        } // .fail {}
      }
    }
  }
  .content_company {
    padding: 0 1rem;
    overflow: auto;
    li {
      display: flex;
      // justify-content: space-between;
      border-bottom: 1px solid #bbb;
      align-items: center;
      .contImg {
        width: 4.38rem;
        height: 3.13rem;
        margin-right: 1.2rem;
        img {
          width: 4.38rem;
          height: 3.13rem;
        }
      }
      .contInfo {
        flex: 1;
        margin: 2rem 0 1rem 0;
        .contInfo_t {
          display: flex;
          justify-content: space-between;
          .contInfo_t_l {
            display: flex;
            p {
              font-size: .88rem;
              color: #757575;
            }
            .score {
              width: 3.38rem;
              height: 1.25rem;
              margin-left: 1rem;
              font-size: .75rem;
              color: #7b7b7b;
              border: #7b7b7b 1px solid;
              border-radius: .81rem;
              text-align: center;
            }
          }
          .foucus {
            font-size: .75rem;
            color: #7b7b7b;
            width: 3.38rem;
            height: 1.25rem;
            border: #7b7b7b 1px solid;
            border-radius: .81rem;
            text-align: center;
          }          
        }
        .contInfo_c {
          display: flex;
          justify-content: flex-start;
          font-size: .75rem;
          color: #a6a6a6;
          margin-top: .5rem;
          .fail {
            margin: 0 .1rem;
          }
        }
        .contInfo_b {
          font-size: .75rem;
          color: #bababa;
          margin-top: .3rem;
        }
      }
    }
  }
}
</style>
