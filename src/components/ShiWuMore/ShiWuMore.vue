<template>
  <div>
    <div class="shiWu_line">
      <div></div>
      <span>更多精彩</span>
    </div>
    <div class="shiWu_more" v-for="(item,index) in shiWuMore" :key="index">
      <div class="three_pic" v-if="item.picList.length">
        <div class="picCon">
          <img class="left" :src="item.picList[0]">
          <div class="right">
            <img :src="item.picList[1]">
            <img :src="item.picList[2]">
          </div>
        </div>
        <div class="txt">
          <span>{{item.subTitle}}</span>
        </div>
      </div>
      <div class="one_pic" v-if="!item.picList.length">
        <div class="picCon">
          <img class="left" :src="item.itemPicUrl">
        </div>
        <div class="txt">
          <span>{{item.title}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    props:['shiWuMore']
  }
</script>

<style lang="less">
  @import "../../../static/less/mixin";
  .shiWu_line{
    width:100%;
    height:140px;
    position: relative;
    padding:0 30px;
    box-sizing: border-box;
    overflow: hidden;
    text-align: center;
    line-height: 140px;
    div{
      width: 100%;
      height:0;
      border:1px solid #666;
      margin-top:69px;
    }
    span{
      width: 160px;
      padding: 0 24px;
      box-sizing: border-box;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      margin: auto;
      background-color: #eeeeee;
    }
  }
  .shiWu_more{
    width:100%;
    padding:0 30px;
    box-sizing: border-box;
    .three_pic,.one_pic{
      width:100%;
      height:498px;
      background-color: white;
      padding:24px;
      box-sizing: border-box;
      margin-bottom:30px;
      .picCon{
        width:100%;
        height:360px;
      }
      .txt{
        width:100%;
        height:90px;
        line-height: 90px;
        font-size: 30px;
        .ellipsis()
      }
    }
    .three_pic{
      .picCon{
        .left{
          float:left;
          width:470px;
          height:360px;
        }
        .right{
          float:right;
          width:178px;
          height:360px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          img{
            width: 178px;
            height:178px;
          }
        }
      }
    }
    .one_pic{
      .picCon{
        img{
          width: 100%;
          height:100%;
        }
      }
    }
  }
</style>
