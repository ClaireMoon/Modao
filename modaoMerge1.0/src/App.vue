<template>
  <div id="app">
    <router-view></router-view>
    <router-view name="footer"></router-view>
  </div>
</template>
<script>
export default {
  
}
</script>

<style lang="scss">
@import '@/lib/reset.scss';
html, body, #app {
  @include rect(100%, 100%);
}
#app {
  // font-family: 'Avenir', Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
  @include flexbox();
  @include flex-direction(column);
  .container {
    // -webkit-box-flex: 1; -ms-flex: 1; flex: 1; width: .1px;
    @include flex();
    @include rect(100%, auto); // 因为flex(),垂直方向默认宽度为.1px
    @include flexbox();
    @include flex-direction(column);
    .header {
      @include rect(100%,.44rem);
      @include background-color(rgb(59, 89, 243));
      @include font-weight(500);
      @include flexbox();
      @include justify-content(); // 水平居中
      @include align-items(); // 垂直居中
      @include color(#fff);
      @include font-weight(600);
      @include font-size(16px);
    }
    .content {
      @include flex(); // 因为flex()，垂直方向垂直宽度为1px
      @include rect(100%,100%);
      // @include margin(.15rem);
    }
  }
  .footer {
    @include rect(100%,.55rem);
    @include background-color(#e0e0e0);
    ul{
      @include rect(100%, 100%);
      @include flexbox();
      li{
        @include flex();
        @include flexbox();
        @include flex-direction(column);
        @include justify-content();
        @include align-items();
        &.router-link-active{
          @include color(rgb(55, 16, 213));
          @include font-weight(800);
      }
      }
      span{
        @include font-size(.24rem);
      }
      p{
        @include font-size(.12rem);
      }
    }
  }
}
</style>
