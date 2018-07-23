<template>
  <div class="home_brand">
    <div class="home_brand_head">
      <div>
        <span>品牌制造商直供</span>
        <i></i>
      </div>
    </div>
    <div class="home_brand_content">
      <ul>
        <li v-for="(item,index) in homeBrandArr" :key="index">
          <div>
            <span>{{item.name}}</span>
            <span>{{item.floorPrice}}元起</span>
            <a v-if="item.newOnShelf">上新</a>
          </div>
          <img :src="item.picUrl">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    mounted(){
      this.$store.dispatch('getHomeBrand')
    },
    computed:{
      ...mapState(['homeBrand']),
      homeBrandArr(){
        return this.homeBrand.slice(0,4)
      }
    }
  }
</script>

<style lang="less">
  @import "../../../static/less/mixin";
  .home_brand{
    width:100%;
    background-color: white;
    margin-bottom:20px;
    .home_brand_head{
      width:100%;
      height:110px;
      line-height: 110px;
      div{
        display: flex;
        justify-content: center;
        span{
          font-size: 32px;
        }
        i{
          width:32px;
          height:32px;
          display:inline-block;
          margin-top: 40px;
          margin-left:5px;
          background-image: url("/static/img/icon/arrow.png");
          background-size: cover;
        }
      }
    }
    .home_brand_content{
      width:100%;
      ul{
        .clearFix();
        li{
          float:left;
          margin-left: 16px;
          margin-bottom:10px;
          width:355px;
          height:238px;
          position: relative;
          background-color: #eeeeee;
          img{
            width:100%;
            height:100%;
          }
          div{
            position: absolute;
            top:30px;
            left: 20px;
            span{
              display: block;
              font-size: 30px;
              line-height: 35px;
            }
            a{
              display: block;
              font-size: 14px;
              width:64px;
              line-height: 32px;
              height:32px;
              text-align: center;
              border:2px solid orange;
              color:orange;
              border-radius: 1px;
            }
          }
        }
      }
    }
  }
</style>
