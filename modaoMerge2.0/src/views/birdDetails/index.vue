<template>
  <div class="container">
    <div class="apex">
      <div class="top">
        <p @click="back">&lt;</p>
        <p>分享</p>
      </div>
      <div class="center">
        <h3>
          <p>{{ title }}</p>
          <i>中移互联·资深产品经理</i>
          <u>广州</u>
        </h3>
        <h4>
          <p></p>
          4分钟前
        </h4>
      </div>
      <div class="bottom">
        <i>实名已认证</i>
        <b>劳动合同已认证</b>
      </div>
    </div>
    <div class="content">
      <h3>我擅长的</h3>
      <ul>
        <li>
          <p>帮内推</p>
        </li>
        <li>
          <p>面试指导</p>
        </li>
        <li>
          <p>进阶指导</p>
        </li>
        <li>
          <p>情上提高</p>
        </li>
        <li>
          <p>公司包打听</p>
        </li>
        <li>
          <p>职场困惑解答</p>
        </li>
      </ul>
      <h4>老鸟故事</h4>
      <h5>
        看准官方认证，全平台最资深咨询专家。五年产品经历
        经验，某国企资深产品经理，熟知国企运作，乐意解答
        各种职场问题，请先把简历截图发我，谢谢！
      </h5>
    </div>
    <div class="day">
      <h3>
        <div class="left">
          <i></i>
          <p>
            中移动互联
            <span>资深产品经理</span>
          </p>
        </div>
        <b>2016年-至今</b>
      </h3>
      <h3>
        <div class="left">
          <i></i>
          <p>
            中山大学
            <span>软件工程</span>
          </p>
        </div>
        <b>2011-2014</b>
      </h3>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      title: ''
    }
  },
  methods: {
    back () {
      this.$router.back()
    }
  },
  mounted () {
    console.log(this)
    // const id = this.$route.params.id
    const { $route: { params: { id } } } = this
    axios.get('https://www.daxunxun.com/detail?id=' + id).then(res => {
      console.log(res.data[0])
      this.title = res.data[0].title
    })
  }
}
</script>

<style lang="scss" scoped>
@import '@/lib/reset.scss';
h3, h4, h5, b {
  font-weight: 100%;
}
.container {
  overflow: auto;
  .apex {
    @include rect(100%, 206px);
    background:#E8E8E8;
    color:#959595;
    .top {
      @include flexbox();
      justify-content: space-between;
      padding:6px 15px 0 15px;
      margin-bottom:26px;
      p{
        font-size: .8rem
      }
    }
    .center {
      @include flexbox();
      justify-content: space-between;
      padding:0 20px;
      h3 {

        p{
          font-size:18px;
        }
        i {
          display:block;
          margin-top:10px;
          font-size:14px;
        }
        u {
          font-size:10px;
        }
      }
      h4 {
        font-size: 0.63rem;
        text-align: center;
        p {
          @include rect(50px, 50px);
          background:#D7D7D7;
          border-radius:50%;
          font-size:10px;
          margin-bottom:12px;
        }
      }
    }
    .bottom {
      font-size:12px;
      margin-left:20px;
      margin-top:43px;
      b {
        margin-left:27px;
      }
    }
  }
  .content {
    color:#959595;
    padding:0 20px;
    border-bottom:1px #bbb solid;
    h3 {
      font-size:14px;
      line-height: 40px;
    }
    ul {
      display:flex;
      flex-wrap: wrap;
      li {
        background:#E8E8E8;
        border-radius:10px;
        padding:0 10px;
        margin:0 18px 15px 0;
      }
    }
    h4 {
      margin-top:22px;
      font-size:14px;
      line-height: 36px;
    }
    h5 {
      font-size:13px;
      margin-bottom:18px;
    }
  }
  .day {
    border-bottom:1px #bbb solid;
    h3 {
    @include flexbox();
    justify-content: space-between;
    align-items: center;
    margin:20px 0;
    padding:0 20px;
      .left {
        @include flexbox();
        align-items: center;
        i {
          display:block;
          @include rect(30px, 30px);
          background:#EAEAEA;
          border-radius:50%;
          margin-right:5px;
        }
        p {
          @include flexbox();
          flex-direction:column;
          font-size:12px;
          color:#959595;
          span {
            color:#A6A6A6;
          }
        }
      }
      b {
        color:#A6A6A6;
        font-size:10px;
      }
    }
  }
  .advisory {
    padding: 0 1rem;
    h3 {
      font-size:14px;
      color:#959595;
      line-height:50px;
    }
    ul {
      li {
        margin-bottom:20px;
        .top {
          @include flexbox();
          justify-content: space-between;
          color:#a6a6a6;
          margin-bottom:20px;
          h4 {
            @include flexbox();
            align-items: center;
            font-size:12px;
            p {
              @include rect(30px, 30px);
              @include background-color(#EAEAEA);
              border-radius:50%;
              margin-right:5px;
            }
          }
          span {
            font-size:10px;
          }
        }
        .list {
          @include rect(100%, 9.38rem);
          background:#ECECEC;
          padding:0 20px;
          color:#959595;
          h5 {
            font-size:12px;
            padding:20px 0;
          }
          span {
            font-size:10px;
            margin:7px 0;
          }
        }
      }
    }
  }
}
</style>
