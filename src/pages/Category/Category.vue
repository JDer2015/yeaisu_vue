<template>
  <div class="category">
    <div class="category_header">
      <span><i></i>搜索商品, 共10852款好物</span>
    </div>
    <div class="category_content">
      <div class="category_content_left">
        <ul ref="homeNavUl">
          <li v-for="(category,index) in categorys" :key="index" :class="{on:index == $route.params.id}">
            <router-link :to="`/category/categoryInfo/${index}`">{{category.name}}</router-link></li>
        </ul>
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  import CategoryInfo from './CategoryInfo/CategoryInfo.vue'
  export default {
    mounted(){
      this.$store.dispatch('getCategorys')
      this.$nextTick(() => {
        this._initBScroll()
      })
    },
    methods:{
      _initBScroll(){
        const ul = this.$refs.homeNavUl
//        const count = this.homeNavArr.length
        const ulWidth = 45 * 13 + 'px'
        ul.style.height = ulWidth
        if(!this.scrollHomeNav){
          this.scrollHomeNav = new BScroll('.category_content_left',{
            click:true,
            scrollY:true
          })
        }else{
          this.scrollHomeNav.refresh()
        }
      }
    },
    computed:{
      ...mapState(['categorys'])
    },
    components:{
      CategoryInfo
    }
  }
</script>

<style lang="less">
  .category{
    width:100%;
    background-color: white;
    overflow: hidden;
    .category_header{
      width:100%;
      height: 88px;
      padding: 16px 30px;
      box-sizing: border-box;
      border-bottom: 1px solid #7e8c8d;
      span{
        display: inline-block;
        width:100%;
        height:100%;
        background-color: #eeeeee;
        line-height: 56px;
        text-align: center;
        border-radius: 10px;
        i{
          width:28px;
          height:28px;
          display: inline-block;
          background-image: url("/static/img/home/search.png");
          background-size: cover;
          background-repeat: no-repeat;
          vertical-align: middle;
          margin-right:20px;
        }
      }

    }
    .category_content{
      width:100%;
      height:1246px;
      padding-bottom: 79px;
      box-sizing: border-box;
      .category_content_left{
        float:left;
        width:162px;
        background-color: white;
        border-right: 1px solid #7e8c8d;
        height:100%;
        overflow: hidden;
        ul{
          width:100%;
          overflow: hidden;
          li{
            width:100%;
            height:60px;
            margin:30px 0;
            text-align: center;
            line-height: 50px;
            &.on{
              font-size: 30px;
              border-left: 5px solid #ab2b2b;
              a{
                color:#ab2b2b;
              }
            }
          }
        }
      }
      .category_content_right{
        width:597px;
        height:100%;
        float:left;
        text-align: center;
        .inner{
          &>img{
            width:528px;
            height:192px;
            padding-top:30px;
            padding-bottom:21px;
          }
          .inner_middle{
            width:528px;
            height:108px;
            display: inline-block;
            line-height: 108px;
            padding-bottom:21px;
          }
          ul{
            width:528px;
            display: inline-block;
            li{
              float:left;
              width:150px;
              margin-right: 20px;
              a{
                img{
                  width:150px;
                  height:150px;
                  border-radius: 50%;
                }
                span{
                  width: 150px;
                  height:72px;
                  display: inline-block;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
