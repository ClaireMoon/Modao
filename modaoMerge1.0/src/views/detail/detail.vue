<template>
   <div class="container">
    <div class="content">
      <div class="header_relationship">
        <div class="header_title">
          <div class="back" @click="back">
            <van-icon name="arrow-left" size="1.25rem"/>
          </div>
          <p>公司详情页面</p>
          <div class="plus">
            <van-icon name="like-o" size="1.25rem"/>
            <van-icon name="thumb-circle-o" size="1.25rem"/>
          </div>
        </div>
      </div>
      <!-- <van-nav-bar title="标题" left-text="返回" left-arrow>
        <van-icon name="search" slot="right" />
      </van-nav-bar> -->
      <div class="nav">
        <van-row type="flex" justify="center">
          <van-col span="4">公司信息</van-col>
          <van-col span="4">老鸟</van-col>
          <van-col span="4">点评</van-col>
          <van-col span="4">问答</van-col>
          <van-col span="4">面试</van-col>
          <!-- <van-col span="4">面试</van-col> -->
        </van-row>
      </div>
      <div class="companyInfo">
        <div class="companyInfo_t">
          <div class="companyInfo_t_l">
            <h3>安阳市振远（集团）有限责任公司</h3>
            <span>安阳</span> . <span>房地产开发</span> . <span>1000-9999人</span>
          </div>
          <img src="../../../public/img/5.jpg" alt="">
        </div>
        <div class="companyInfo_c">
          <van-row type="flex" justify="space-around" gutter="20">
            <van-col span="10">
              <van-icon name="comment-o" size="1.35rem"/>
                我想去
              </van-col>
            <van-col span="10">
              <van-icon name="chart-o" size="1.35rem"/>
                工作过
            </van-col>
         </van-row>
        </div>
        <div class="companyInfo_b">
          <van-row type="flex" justify="space-around">
            <van-col span="12">
              <div class="cicle">100%</div>
              <div class="cicle_r">
                 <span>好评率</span>
                 <p>来自员工的真是点评</p>
              </div>
            </van-col>
            <van-col span="12">
             <div class="cicle">100%</div>
              <div class="cicle_r">
                 <span>好评率</span>
                 <p>来自员工的真是点评</p>
              </div>
            </van-col>
          </van-row>
        </div>
      </div>
      <div class="companyHost">
        <div class="companyHost_t">
          <div class="companyHost_t_l">
            <span>法人代表</span>
            <i>王鹏飞</i>
          </div>
          <img src="../../../public/img/6.jpg" alt="">
        </div>
        <div class="companyHost_b">
          <p>简介 安阳市贞元（ 集团 ）有限责任公司（ 简称“贞元集团” ）生于恒河，长于安阳，数千年的中华传统文化蕴育的新时代的弄潮儿。贞元集团始建于1995年...</p>
        </div>
      </div>
      <div class="companyAddres">
        <div class="companyAddres_t">
          <span>地址</span>
          <p>市殷都区中州路铁西商贸城南侧</p>
        </div>
        <ul class="companyAddres_c">
          <li>
            <span>成立时间</span>
            <p>1995-02-22</p>
          </li>
          <li>
            <span>注册资本</span>
            <p>838万元人民币</p>
          </li>
          <li>
            <span>融资</span>
            <p>1暂无</p>
          </li>
        </ul>
        <div class="companyAddres_b">
          <span>详细信息</span>
          <div class="more" @click="more">
            <van-icon name="arrow" size="1.25rem"/>
          </div>
        </div>
      </div>
      <div class="recommendBird">
        <h4 class="recommendBird_title">推荐老鸟</h4>
        <ul class="recommendBird_cont">
          <li>
            <div class="li_left">
              <img src="../../../public/img/7.png" alt="">
              <div class="li_center">
                <span>神仙</span>
                <p>南京群智房地产开发有限公司 CEO</p>
              </div>
            </div>
            <div class="li_right" @click="back">
              <van-icon name="comment-o" size="1.25rem"/>
            </div>
          </li>
          <li>
            <div class="li_left">
              <img src="../../../public/img/8.png" alt="">
              <div class="li_center">
                <span>神仙</span>
                <p>南京群智房地产开发有限公司 CEO</p>
              </div>
            </div>
            <div class="li_right" @click="back">
              <van-icon name="comment-o" size="1.25rem"/>
            </div>
          </li>
          <li>
            <div class="li_left">
              <img src="../../../public/img//5.jpg" alt="">
              <div class="li_center">
                <span>神仙</span>
                <p>南京群智房地产开发有限公司 CEO</p>
              </div>
            </div>
            <div class="li_right" @click="back">
              <van-icon name="comment-o" size="1.25rem"/>
            </div>
          </li>
          <li>
            <div class="li_left">
              <img src="../../../public/img/8.png" alt="">
              <div class="li_center">
                <span>神仙</span>
                <p>南京群智房地产开发有限公司 CEO</p>
              </div>
            </div>
            <div class="li_right" @click="back">
              <van-icon name="comment-o" size="1.25rem"/>
            </div>
          </li>
        </ul>
      </div>
      <div class="employeeComment"></div>
      <div class="companyQuestion">
        <h4 class="companyQuestion_title">公司问答</h4>
        <ul class="companyQuestion_cont">
          <li>
            <p class="companyQuestion_cont_left">安阳贞元集团融资最新消息！听说顶房子3980一平?</p>
            <span>1个问答</span>
          </li>
          <li>
            <p class="companyQuestion_cont_left">安阳贞元集团融资最新消息！听说顶房子3980一平?</p>
            <span>1个问答</span>
          </li>
          <li>
            <p class="companyQuestion_cont_left">安阳贞元集团融资最新消息！听说顶房子3980一平?</p>
            <span>1个问答</span>
          </li>
          <li>
            <p class="companyQuestion_cont_left">安阳贞元集团融资最新消息！听说顶房子3980一平?</p>
            <span>1个问答</span>
          </li>
        </ul>
      </div>
      <div class="interview"></div>
      <div class="detailFooter">
        <van-row type="flex" justify="space-between">
          <van-col span="10">
            <van-icon name="comment-o" size="1.35rem"/>
            点评
          </van-col>
          <span>|</span>
          <van-col span="10">
            <van-icon name="chart-o" size="1.35rem"/>
            提问
          </van-col>
        </van-row>
      </div>
    </div>
   </div>
</template>
<script>
import Vue from 'vue'
import { NavBar, Icon, Row, Col } from 'vant'
// import axios from 'axios'
Vue.use(NavBar)
Vue.use(Icon)
Vue.use(Row).use(Col)

export default {
  methods: {
    back () {
      // this.$router.push({ path: 'relationship'})
      this.$router.back()
    }
  }
}
</script>
<style lang="scss">
@import '@/lib/reset.scss';
.container {
  overflow: auto;
  .content{
    .header_relationship {
      padding: .4rem 1rem;
      background-color: #f4f4f4;
      .header_title {
        height: 100%;
        display: flex;
        justify-content: space-between;
        color: #666;
        align-items: center;
        margin-bottom: 1rem; // .back {   }
        p {
          font-size: 1rem;
          color: #9d9d9d;
        } // .search { }
        .plus {
          .van-icon {
            margin: 0 .5rem;
          }
        }
      }
    }
    .nav {
      text-align: center;
      font-size: .75rem;
      color: #797979;
      line-height: 2rem;
      border-top: .06rem solid #e6e6e6;
      border-bottom: .06rem solid #e6e6e6;
    }
    .companyInfo {
      margin: 0 1rem;
      border-bottom: .06rem solid #ddd;
      text-align: center;
      .companyInfo_t {
        display: flex;
        justify-content: space-between;
        .companyInfo_t_l {
          h3 {
            font-size: 1.23rem;
            color: #777;
            width: 15rem;
            font-weight: 200;
          }
          span {
            font-size: .75rem;
            color: #a6a6a6;
            margin: 1.3rem .3rem;
          }
        }
        img {
          width: 4.95rem;
          height: 4rem;
        }
      }
      .companyInfo_c {
        margin: 1rem 0;
        font-size: .88rem;
        color: #797979;
        .van-row {
          .van-col {
            background-color:#ececec;
            width: 9.94rem;
            line-height: 2.5rem;
            
          }
        }
      }
      .companyInfo_b {
        margin-bottom: 1rem;
        .van-row {
          .van-col {
            display: flex;
            .cicle {
              text-align: center;
              width: 2.63rem;
              line-height: 2.63rem;
              border: .06rem solid #bbb;
              border-radius: 50%;
              margin-right: .5rem;
            }
            .cicle_r {
              text-align: left;          
              span {
                font-size: .8rem;
                color: #646464;
              }
              p {
                font-size: .75rem;
                color: #b9b9b9;
              }

            }
          }
        }
      }
    }
    .companyHost {
      margin: 1rem 1rem;
      border-bottom: .06rem solid #ddd;
      .companyHost_t {
        display: flex;
        justify-content: space-between;
        margin-bottom: 1.5rem;
        .companyHost_t_l {
          display: flex;
          span {
            font-size: .88rem;
            color: #646464;
            margin-right: .5rem;
          }
          i {
            font-size: .88rem;
            color: #aaa;
          }
        }
        img {
          width: 1.25rem;
          height: 1.25rem;
          border-radius: 50%;
        }
      }
      .companyHost_b {
        font-size: .88rem;
        margin-bottom: 1rem;
        p {
          color: #b9b9b9;
        }
      }
    }
    .companyAddres {
      margin: 0 1rem;
      .companyAddres_t {
        display: flex;
        font-size: .88rem;
        span {
          font-size: .88rem;
          color: #101010;
        }
        p {
          color: #aaa9a9;
          margin: 0 .5rem;
        }
      }
      .companyAddres_c {
        display: flex;
        justify-content: space-between;
        margin: 1rem 0;
        border: .06rem solid #eaeaea;
        padding: 1rem 1rem;
        li {
          font-size: .75rem;
          span {
          color: #313131;
          }
          p {
            color: #aaa;
          }
        }
      }
      .companyAddres_b {
        display: flex;
        justify-content: space-between;
        margin: .5rem 0 2rem 0;
        span {
          font-size: .88rem;
          color: #959595;
        }
      }
    }
    .recommendBird {
      margin: 0 1rem;
      border-bottom: .06rem solid #ddd;
      .recommendBird_title {
        font-size: 1rem;
        color: rgb(98, 98, 98) 100%;
        font-weight: 200;
      }
      .recommendBird_cont {
        li {
          display: flex;
          justify-content: space-between;
          border-bottom: .06rem solid #ddd;
          align-items: center;
          height: 5rem;
          .li_left {
            display: flex;
            justify-content: space-between;
            img {
              width: 3.13rem;
              height: 3.13rem;
              border-radius: 50%;
              margin-right: 1rem;
            }
            
          }
        }
      }
    }
    .employeeComment {
      margin: 0 1rem;
      border-bottom: .06rem solid #ddd;
    }
    .companyQuestion {
      margin: 2rem 1rem 0 1rem;
      border-bottom: .06rem solid #ddd;
      .companyQuestion_title {
        font-size: 1rem;
        color: rgb(98, 98, 98) 100%;
        font-weight: 200;
        margin-bottom: 1rem;
      }
      .companyQuestion_cont {
        li {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: .06rem solid #ddd;
          height: 4rem;
          p {
            width: 13.5rem;
            color: #B0B0B0;
            font-size: .75rem;
          }
        }
      }
    }
    .interview {
      margin: 0 1rem;
      border-bottom: .06rem solid #ddd;
    }
    .detailFooter {
      text-align: center;
      font-size: .88rem;
      color: #666262;
      background-color: #bbb;
      width: 100%;
      line-height: 3.13rem;
    }
  }
}
</style>
