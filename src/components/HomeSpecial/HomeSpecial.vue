<template>
  <div>
    <div class="home_special">
      <div class="home_special_head">
        <div>
          <span>专题精选</span>
          <i></i>
        </div>
      </div>
      <div class="home_special_content">
        <ul ref="homeSpecialUl">
          <li v-for="(item,index) in homeSpecial" :key="index">
            <img :src="item.itemPicUrl"></img>
            <div>
              <span>{{item.title}}</span>
              <span>￥{{item.priceInfo}}</span>
            </div>
            <p>{{item.subtitle}}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="home_shops">
      <div class="home_shop_base" v-for="(homeShop,index) in homeShopsArr" :key="index">
        <div class="home_shop_base_head">
          <span>{{homeShop.name}}</span>
        </div>
        <ul>
          <li v-for="(item,index) in homeShop.itemList" :key="index">
            <img :src="item.primaryPicUrl"></img>
            <p>{{item.simpleDesc}}</p>
            <p v-if="item.couponAvaliable">暑期特价</p>
            <p>{{item.name}}</p>
            <p>￥{{item.retailPrice}}</p>
          </li>
          <li class="last">
            <div>
              <span>更多居家好物</span>
              <i></i>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    mounted(){
      this.$store.dispatch('getHomeSpecial')
      this.$store.dispatch('getHomeShops')
    },
    watch:{
      homeSpecial(val){
        if(val.length){
          this.$nextTick(() => {
            this._initBScroll()
          })
        }
      }
    },
    methods:{
      _initBScroll(){
        const ul = this.$refs.homeSpecialUl
        const count = this.homeSpecial.length
        const ulWidth = (288 + 10) * count + 'px'
        ul.style.width = ulWidth
        if(!this.scrollHomeSpecial){
          this.scrollHomeSpecial = new BScroll('.home_special_content',{
            click:true,
            eventPassthrough: 'vertical',
            scrollX:true
          })
        }else{
          this.scrollHomeSpecial.refresh()
        }
      }
    },
    computed:{
      ...mapState(['homeSpecial','homeShops']),
      homeShopsArr(){
        let arr=[]
        this.homeShops.forEach((item,index) => {
          let obj = {}
          obj.name = item.name
          obj.itemList = item.itemList.slice(0,5)
          arr.push(obj)
        })
        return arr
      }
    }
  }
</script>

<style lang="less">
  @import "../../../static/less/mixin";
  .home_special{
    width:100%;
    background-color: white;
    margin-bottom:20px;
    .home_special_head{
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
          width:33px;
          height:33px;
          display:inline-block;
          margin-top: 40px;
          margin-left:5px;
          background-image: url("/static/img/icon/arrow.png");
          background-size: cover;
        }
      }
    }
    .home_special_content{
      width:100%;
      height:453px;
      overflow: hidden;
      ul{
        float:left;
        white-space: nowrap;
        margin-left: 20px;
        li{
          display: inline-block;
          margin-left: 20px;
          width:575px;
          font-size:30px;
          img{
            width:100%;
            height:322px;
            border-radius: 10px;
          }
          div{
            margin:20px 0;
            display: flex;
            justify-content: space-between;
            span{
              &:nth-of-type(2){
                color:red;
              }
            }
          }
          p{
            font-size: 14px;
            color:#eee;
          }
        }
      }
    }
  }
  .home_shops{
    width:100%;
    .home_shop_base{
      width:100%;
      background-color: white;
      margin-bottom:20px;
      .home_shop_base_head{
        width:100%;
        height:120px;
        font-size: 30px;
        text-align: center;
        line-height: 120px;
        color:#999;
      }
      ul{
        .clearFix();
        li{
          float:left;
          width:50%;
          height:587px;
          padding-left:20px;
          padding-right: 10px;
          box-sizing: border-box;
          img{
            width:345px;
            height:345px;
          }
          p{
            margin-bottom: 20px;
            &:nth-of-type(1){
              width:345px;
              height:69px;
              text-align: center;
              line-height: 69px;
              background-color: #F1ECE2;
              color: #9F8A60;
            }
            &:nth-of-type(2){
              width:112px;
              height:30px;
              background-color: #f48f18;
              color: white;
              text-align: center;
              line-height: 30px;
            }
            &:nth-of-type(3){
              font-size: 30px;
            }
            &:nth-of-type(4){
              font-size: 30px;
              color: red;
            }
          }
          &.last{
            div{
              padding:100px 0;
              box-sizing: border-box;
              width:100%;
              height:414px;
              background-color: #f4f4f4;
              display: flex;
              flex-direction: column;
              justify-content: space-around;
              align-items: center;
              span{
                font-size: 40px;
              }
              i{
                width:67px;
                height:67px;
                display: inline-block;
                background-image: url("/static/img/icon/icon1.png");
                background-size: cover;
              }
            }
          }
        }
      }
    }
  }
</style>
