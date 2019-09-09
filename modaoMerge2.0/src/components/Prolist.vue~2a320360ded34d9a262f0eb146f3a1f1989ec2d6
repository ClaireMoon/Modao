<template>
  <ul class="prolist">
    <!-- 编程式跳转 使用js的跳转方式  -->
    <li class="proitem" v-for="item of prolist" :key="item.id">
      <div class="itemImg">
        <div class="left">
          <img :src="item.images.small" alt=""/>
          <p class="name">
            {{ item.title }}
          </p>
        </div>
        <span class="time">创建于{{ item.rating.average }}</span>
      </div>
      <div class="problem">
        <span v-for="itm of item.casts" :key="itm.id">
          {{ itm.name }} /
        </span>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    prolist: Array
  }
}
</script>

<style lang="scss">
@import '@/lib/reset.scss';

.prolist {
  .proitem{
    .itemImg{
      @include rect(100%, 70px);
      @include flexbox();
      align-items: center;
      justify-content: space-between;
      .left{
        @include rect(120px, 50px);
        @include flexbox();
        align-items: center;
        justify-content: space-between;
        img{
          @include rect(50px, 50px);
          @include border(1px, #ccc, solid);
          border-radius: 50%;
          background-color: rgba(213, 213, 213, 1);
          border: 1px solid rgba(255, 255, 255, 0);
        }
        .name{
          @include rect(42px, 21px);
          color: rgba(155, 155, 155, 1);
          font-size: 14px;
        }
      }
      .time{
        @include rect(50px, 15px);
        color: rgba(195, 195, 195, 1);
        font-size: 10px;
      }
    }
    .problem{
      display:block;
      @include rect(100%, 80px);
      border-radius: 6px;
      background-color: rgba(234, 234, 234, 1);
      border: 1px solid rgba(255, 255, 255, 0);
      line-height: 20px;
      padding: 10px 0 0 15px;
      font-size: .75rem;
    }
  }
}
</style>
