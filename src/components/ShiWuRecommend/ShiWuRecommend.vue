<template>
  <div class="shiWu_recommend">
    <div class="shiWu_inner_big">
      <div class="imgCon" :style="`background-image: url('${shiWuRecommend.recommendBanner.picUrl}');background-size: cover`">
        <span>{{shiWuRecommend.recommendBanner.nickname}}</span>
      </div>
      <div class="txt">
        <p><span>{{shiWuRecommend.recommendBanner.title}}</span><span>{{shiWuRecommend.recommendBanner.priceInfo}}元起</span></p>
        <p>{{shiWuRecommend.recommendBanner.subtitle}}</p>
      </div>
    </div>
    <div class="shiWu_inner_small" v-for="(item,index) in shiWuRecommend.recommends" :key="index">
      <div class="shiWu_inner_small_left">
        <p><img :src="item.avatar"><span>{{item.nickname}}</span></p>
        <p>{{item.title}}</p>
        <p>{{item.subtitle}}</p>
      </div>
      <div class="shiWu_inner_small_right" :style="`background-image: url('${item.picUrl}');background-size: cover`">
        <span>{{item.typeName}}</span>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    props:['shiWuRecommend']
  }
</script>

<style lang="less">
  @import "../../../static/less/mixin";
  .shiWu_recommend{
    background-color: white;
    width:100%;
    padding:0 30px;
    box-sizing: border-box;
    overflow: hidden;
    .shiWu_inner_big{
      margin-bottom:30px;
      .imgCon{
        border:2px solid #eeeeee;
        width:100%;
        height:386px;
        border-radius: 5px;
        span{
          width:130px;
          height:36px;
          display: inline-block;
          background-color: white;
          text-align: center;
          line-height: 36px;
          border-radius: 18px;
          margin-top:20px;
          margin-left: 20px;
        }
      }
      .txt{
        width:100%;
        height:186px;
        background-color: white;
        overflow: hidden;
        border:2px solid #eeeeee;
        border-radius: 5px;
        p{
          width: 100%;
          padding: 0 10px;
          box-sizing: border-box;
          margin:30px 0;
          &:nth-of-type(1){
            display: flex;
            justify-content: space-between;
            font-size: 40px;
          }
          &:nth-of-type(2){
            font-size: 30px;
            color: #666;
          }
        }
      }
    }
    .shiWu_inner_small{
      width:100%;
      height:272px;
      background-color: white;
      border-radius: 5px;
      border:2px solid #eeeeee;
      display: flex;
      justify-content: space-between;
      margin-bottom: 30px;
      .shiWu_inner_small_left{
        width: 408px;
        height: 100%;
        p{
          width:358px;
          margin:35px 0 35px 20px;
          .ellipsis();
          &:nth-of-type(1){
            img{
              width:46px;
              height:46px;
              border-radius: 50%;
              vertical-align: middle;
            }
          }
          &:nth-of-type(2){
            font-size: 40px;
          }
          &:nth-of-type(3){
            font-size: 30px;
            color:#eeeeee;
          }
        }
      }
      .shiWu_inner_small_right{
        width: 280px;
        height: 100%;
        border-radius: 5px;
        span{
          width:202px;
          height:36px;
          display: inline-block;
          background-color: white;
          text-align: center;
          line-height: 36px;
          border-radius: 18px;
          margin-top:20px;
          margin-left: 20px;
        }
      }
    }
  }
</style>
