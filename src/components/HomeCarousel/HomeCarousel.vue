<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in homeCarousel" :key="index">
          <img :src="item.picUrl">
        </div>
      </div>
      <div class="swiper-pagination my-pagination-current"></div>
    </div>
    <div class="home_detail">
      <div>
        <i></i>
        <span>网易自营品牌</span>
      </div>
      <div>
        <i></i>
        <span>30天无忧退货</span>
      </div>
      <div>
        <i></i>
        <span>48小时快速退款</span>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import {mapState} from 'vuex'
  export default {
    mounted(){
      this.$store.dispatch('getHomeCarousel')
    },
    watch:{
      homeCarousel(){
        this.$nextTick(() => {
          new Swiper('.swiper-container', {
            loop: true,
            pagination: {
              el: '.swiper-pagination',
              currentClass : 'my-pagination-current'
            }
          })
        })
      }
    },
    computed:{
      ...mapState(['homeCarousel'])
    }
  }
</script>

<style lang="less">
  @import "../../../static/less/mixin";
  .swiper-container {
    width: 100%;
    height: 400px;
    margin-top:148px;
    .my-pagination-current{
      .swiper-pagination-bullet{
        width:30px;
        height:10px;
        background-color: red;
        &.swiper-pagination-bullet-active{
          background-color: aqua;
        }
      }
    }
    img{
      width:100%;
      height: 100%;
    }
  }
  .home_detail{
    width:100%;
    height:72px;
    display: flex;
    text-align: center;
    line-height: 72px;
    justify-content: space-around;
    background-color: white;
    margin-bottom: 20px;
    div{
      i{
        float:left;
        width:32px;
        height:32px;
        margin:20px 5px 0;
        display:inline-block;
        background-image: url("/static/img/icon/hook.png");
        background-size: cover;
        vertical-align: middle;
      }
      span{
        float:left;
        font-size: 14px;
      }
    }
  }
</style>
