<template>
  <div class="shiWu">
    <Header/>
    <ShiWuCarousel/>
      <!--为你推荐-->
    <ShiWuHeader :headerName="recommendHeadName"/>
    <ShiWuRecommend v-for="(item,index) in shiWuRecommend" :key="index" :shiWuRecommend="shiWuRecommend"/>
    <!--<ShiWuRecommend/>-->
    <!--十点一刻-->
    <ShiWuHeader :headerName="shiDianHeadName"/>
    <ShiWuShiDian :shiWuShiDian="shiWuShiDian"/>
    <!--严选甄品-->
    <ShiWuHeader :headerName="yanXuanHeadName"/>
    <ShiWuZhenPin :shiWuZhenPin="shiWuZhenPin"/>
    <!--严选LOOK-->
    <ShiWuHeader :headerName="lookHeadName"/>
    <ShiWuLook :shiWuLook="shiWuLook"/>
    <!--跟多精彩-->
    <ShiWuMore :shiWuMore="shiWuMore"/>
  </div>
</template>

<script>
import Header from '../../components/Header/Header.vue'
import ShiWuHeader from '../../components/ShiWuHeader/ShiWuHeader.vue'
import ShiWuCarousel from '../../components/ShiWuCarousel/ShiWuCarousel.vue'
import ShiWuRecommend from '../../components/ShiWuRecommend/ShiWuRecommend.vue'
import ShiWuShiDian from '../../components/ShiWuShiDian/ShiWuShiDian.vue'
import ShiWuLook from '../../components/ShiWuLook/ShiWuLook.vue'
import ShiWuMore from '../../components/ShiWuMore/ShiWuMore.vue'
import ShiWuZhenPin from '../../components/ShiWuZhenPin/ShiWuZhenPin.vue'

import {mapState} from 'vuex'
  export default {
    data(){
      return{
        recommendHeadName:'为你推荐',
        shiDianHeadName:'十点一刻',
        yanXuanHeadName:'严选甄品',
        lookHeadName:'严选LOOK',
      }
    },
    mounted(){
      this.$store.dispatch('getShiWuRecommend')
      this.$store.dispatch('getShiWuShiDian')
      this.$store.dispatch('getShiWuZhenPin')
      this.$store.dispatch('getShiWuLook')
      this.$store.dispatch('getShiWuMore')
    },
    computed:{
      ...mapState(['shiWuRecommend','shiWuShiDian','shiWuZhenPin','shiWuLook','shiWuMore'])
    },
    components:{
      Header,
      ShiWuHeader,
      ShiWuCarousel,
      ShiWuRecommend,
      ShiWuShiDian,
      ShiWuLook,
      ShiWuMore,
      ShiWuZhenPin
    }
  }
</script>

<style lang="less">
  .shiWu{
    width:100%;
    padding-bottom: 99px;
  }

</style>
