<template>
  <div class="shiWu_shiDian">
    <ul ref="shiWuShiDianUl">
      <li v-for="(item,index) in shiWuShiDian" :key="index">
        <p>--今日话题--</p>
        <p>{{item.title}}</p>
        <p>{{item.desc}}</p>
        <div>
            <span>
              <img :src="icon" v-for="(icon,i) in item.participantAvatar"
                   :key="i" v-if="icon">
              <span>...</span>
            </span>
          <span>{{item.participantNum}}人参与话题</span>
        </div>
      </li>
      <a>
        <p>查看全部话题<span></span></p>
      </a>
    </ul>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    mounted(){

    },
    watch:{
      shiWuShiDian(val){
        if(val.length){
          this.$nextTick(() => {
            this._initBScroll()
          })
        }
      }
    },
    props:['shiWuShiDian'],
    methods:{
      _initBScroll(){
        const ul = this.$refs.shiWuShiDianUl
        const count = this.shiWuShiDian.length
        const ulWidth = (290 + 20) * count  + 280 + 'px'
        ul.style.width = ulWidth
        if(!this.scrollShiWuShiDian){
          this.scrollShiWuShiDian = new BScroll('.shiWu_shiDian',{
            click:true,
            eventPassthrough: 'vertical',
            scrollX:true
          })
        }else{
          this.scrollShiWuShiDian.refresh()
        }
      }
    },
  }
</script>

<style lang="less">
  @import "../../../static/less/mixin";
  .shiWu_shiDian{
    width:100%;
    height:411px;
    padding-bottom:30px;
    background-color: white;
    overflow: hidden;
    ul{
      float:left;
      white-space: nowrap;
      li{
        display: inline-block;
        width:580px;
        height:411px;
        padding:30px 40px 79px;
        box-sizing: border-box;
        background-image: url("/static/img/shiWu/bg1.png");
        background-repeat: no-repeat;
        background-size: cover;
        margin-left:30px;
        text-align: center;
        vertical-align: middle;
        p{
          &:nth-of-type(1){
            margin-top:15px;
            color: #7f7f7f;
          }
          &:nth-of-type(2){
            font-size: 38px;
            font-weight: bold;
            margin-top:40px;
          }
          &:nth-of-type(3){
            font-size: 30px;
            margin-top:30px;
          }
        }
        div{
          margin-top: 80px;
          &>span{
            vertical-align: middle;
            &:nth-of-type(1){
              display: inline-block;
              font-size: 0;
              margin-right: 10px;
            }
            &:nth-of-type(2){
              color: #7f7f7f;
            }
            img{
              width:48px;
              height:48px;
              border-radius: 50%;
              vertical-align: middle;
            }
            span{
              display: inline-block;
              width:48px;
              height:48px;
              border-radius: 50%;
              background-color: #d9d9d9;
              text-align: center;
              line-height: 48px;
            }
          }
        }
      }
      &>a{
        display: inline-block;
        width:560px;
        height:364px;
        border:10px solid #e6e6e6;
        background-color: #fafafa;
        color: #333;
        text-align: center;
        font-size: 30px;
        margin:0 30px;
        p{
          padding-top: 167px;
          span{
            margin-left: 10px;
            vertical-align: middle;
            width: 31px;
            height:31px;
            display: inline-block;
            background-image: url("/static/img/shiWu/icon1.png");
            background-repeat: no-repeat;
            background-size: cover;
          }
        }
      }
    }
  }
</style>
