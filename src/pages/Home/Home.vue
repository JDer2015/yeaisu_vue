<template>
  <div class="home">
    <!--主页头部-->
    <HomeHeader/>

    <!--轮播图组件-->
    <HomeCarousel/>

    <!--品牌制造商直供-->
    <HomeBrand/>

    <!--新品首发组件-->
    <HomeNew/>

    <!--人气好物精选组件-->
    <HomeGood/>

    <!--限时秒杀组件-->
    <HomeSecKill/>

    <!--福利社组件-->
    <HomeWelfare/>

    <!--好物列表组件-->
    <HomeSpecial/>

    <!--首页底部组件-->
    <HomeFoot/>
  </div>
</template>

<script>


  import HomeHeader from '../../components/HomeHeader/HomeHeader.vue'
  import HomeCarousel from '../../components/HomeCarousel/HomeCarousel.vue'
  import HomeBrand from '../../components/HomeBrand/HomeBrand.vue'
  import HomeNew from '../../components/HomeNew/HomeNew.vue'
  import HomeGood from '../../components/HomeGood/HomeGood.vue'
  import HomeSecKill from '../../components/HomeSecKill/HomeSecKill.vue'
  import HomeWelfare from '../../components/HomeWelfare/HomeWelfare.vue'
  import HomeSpecial from '../../components/HomeSpecial/HomeSpecial.vue'
  import HomeFoot from '../../components/HomeFoot/HomeFoot.vue'

  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import {mapState} from 'vuex'
  export default {
    mounted(){
      this.$store.dispatch('getHomeCarousel')
    },
    watch:{
      carousel(){
        this.$nextTick(() => {
          new Swiper('.swiper-container', {
            loop: true,
            pagination: {
              el: '.swiper-pagination'
            }
          })
        })
      }
    },
    components:{
      HomeHeader,
      HomeCarousel,
      HomeBrand,
      HomeNew,
      HomeGood,
      HomeSecKill,
      HomeWelfare,
      HomeSpecial,
      HomeFoot,
      ...mapState(['homeCarousel'])
    }
  }
</script>

<style lang="less">
  .home{
    width:100%;
    height:100%;
    background-color: #f4f4f4;
  }
</style>
