<template>
  <div class="shiWu_carousel">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in swiperContainer" :key="index">
          <img :src="item.picUrl">
        </div>
        <!--<div class="swiper-slide">-->
          <!--<img src="/static/img/shiWu/shiwubg2.jpg">-->
        <!--</div>-->
        <!--<div class="swiper-slide">-->
          <!--<img src="/static/img/shiWu/shiwubg3.jpg">-->
        <!--</div>-->
        <!--<div class="swiper-slide">-->
          <!--<img src="/static/img/shiWu/shiwubg3.jpg">-->
        <!--</div>-->
      </div>
    </div>
    <div class="shiWu_carousel_scroll">
      <ul ref="shiWuCarouselScrollUl">
        <li v-for="(item,index) in shiWuCarouselScroll" :key="index">
          <div :style="`background-image: url('${item.picUrl}');background-size: cover`">
            <span>{{item.articleCount}}</span>
          </div>
          <p>{{item.title}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import {mapState} from 'vuex'
  export default {
    mounted(){
      this.$store.dispatch('getSwiperContainer')
      this.$store.dispatch('getShiWuCarouselScroll')
//      this.$nextTick(() => {
//        new Swiper('.swiper-container', {
//          slidesPerView: 'auto',
//          centeredSlides: true,
//          loop:true,
//          spaceBetween: 10,
//        });
//      })
    },
    watch:{
      shiWuCarouselScroll(val){
        if(val.length){
          this.$nextTick(() => {
            this._initBScroll()
          })
        }
      },
      swiperContainer(val){
        if(val.length){
          this.$nextTick(() => {
            new Swiper('.swiper-container', {
              slidesPerView: 'auto',
//              centeredSlides: true,
              loop:true,
//              spaceBetween: 10,
              loopedSlides:val.length ,
            });
          })
        }
      }
    },
    methods:{
      _initBScroll(){
        const ul = this.$refs.shiWuCarouselScrollUl
        const count = this.shiWuCarouselScroll.length
        const ulWidth = (62 + 24) * count  + 24 + 'px'
        ul.style.width = ulWidth
        if(!this.scrollShiWuCarouselScroll){
          this.scrollShiWuCarouselScroll = new BScroll('.shiWu_carousel_scroll',{
            click:true,
            eventPassthrough: 'vertical',
            scrollX:true
          })
        }else{
          this.scrollShiWuCarouselScroll.refresh()
        }
      }
    },
    computed:{
      ...mapState(['swiperContainer','shiWuCarouselScroll'])
    }
  }
</script>

<style lang="less">
  @import "../../../static/less/mixin";
  .shiWu_carousel{
    width:100%;
    background-color: white;
    margin-top: 89px;
    .swiper-container{
      width:100%;
      height:433px;
      margin-top: 0;
      .swiper-wrapper{
        width: 90%;
        margin-left: 35px;
        .swiper-slide {
          text-align: center;
          background-color: white;
          padding: 24px 10px;
          box-sizing: border-box;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          img{
            width: 100%;
            height:100%;
            border-radius: 20px;
          }
        }
      }
    }
    .shiWu_carousel_scroll{
      width:100%;
      height:286px;
      background-color: white;
      padding: 38px 0;
      box-sizing: border-box;
      font-size: 24px;
      overflow: hidden;
      ul{
        float:left;
        white-space: nowrap;
        li{
          display: inline-block;
          width:164px;
          height:210px;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          margin-right: 24px;
          &:nth-of-type(1){
            margin-left: 24px;
          }
          div{
            width:164px;
            height:164px;
            text-align: center;
            border-radius: 5px;
            span{
              display: inline-block;
              width:150px;
              height:32px;
              text-align: right;
              line-height: 32px;
              color: white;
              background-image: url("/static/img/shiWu/shadow.png");
              background-repeat: no-repeat;
              background-size: cover;
            }
          }
          p{
            text-align: center;
            margin-top:20px;
          }
        }
      }
    }
  }
</style>
