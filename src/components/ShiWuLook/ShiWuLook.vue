<template>
  <div class="shiWu_look">
    <div class="video_top">
      <video :poster="shiWuLook.picUrl"
             muted playsinline></video>
      <span></span>
    </div>
    <div class="video_bottom">
      <p><img :src="shiWuLook.avatar"><span>{{shiWuLook.nickname}}</span></p>
      <p>{{shiWuLook.content}}</p>
    </div>
  </div>
</template>

<script>

  export default {
    props:['shiWuLook']
  }
</script>

<style lang="less">
  @import "../../../static/less/mixin";
  .shiWu_look{
    background-color: white;
    width:100%;
    .video_top{
      width:100%;
      height:422px;
      position: relative;
      video{
        width:100%;
        height:100%;
      }
      &>span{
        position: absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
        margin: auto;
        width:96px;
        height:96px;
        display: inline-block;
        background-image: url("/static/img/shiWu/icon2.png");
        background-repeat: no-repeat;
        background-size: cover;
      }
    }
    .video_bottom{
      width:100%;
      height:186px;
      padding:24px 30px 46px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      p{
        &:nth-of-type(1){
          img{
            width:46px;
            height:46px;
            border-radius: 50%;
            vertical-align: middle;
            margin-right: 10px;
          }
        }
        &:nth-of-type(2){
          font-size: 30px;
          color: #333;
        }
      }
    }
  }
</style>
