<template>
  <div class="header_relationship">
    <div class="header_title">
        <div class="back" @click="back">
          <van-icon name="arrow-left" size="1.25rem"/>
        </div>
        <p>
          <slot name="center">通讯录</slot>
        </p>
        <div class="right">
          <slot name="right"></slot>
        </div>
      </div>
    </div>
</template>
<script>
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
.header_relationship {
  padding: .4rem 1rem;
  // background-color: #f4f4f4;
  .header_title {
    height: 100%;
    display: flex;
    justify-content: space-between;
    color: #cacaca;
    align-items: center;
    margin-bottom: 1rem; // .back {   }
    .right {
      font-size: .88rem;
    }
    p {
      font-size: 1rem;
      color: #9d9d9d;
    } // .search { }
    .van-popup--right {
      top: 13%;
      right: 5%;
    }
    .van-overlay {
      background: none;
    }
    .van-popup {
      background-color: #424242;
      ul {
        li {
          display: flex;
          justify-content: center;
          color: #fff;
          align-items: center;
          padding: .5rem 0;
          span {
            margin: 0 .5rem;
            font-size: .75rem;
          }
        }
      }
    }
  }
}
</style>

