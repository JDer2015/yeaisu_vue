<template>
  <div class="category_content_right">
    <div class="inner">
      <img :src="category.bannerUrl">
      <div class="inner_middle">
        <span>-{{category.name}}-</span>
      </div>
      <ul>
        <li v-for="(item,index) in category.subCateList" :key="index">
          <a href="#">
            <img :src="item.wapBannerUrl">
            <span>{{item.name}}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
  export default {
//  data(){
//    return{
//      category:{}
//    }
//  },
//  mounted(){
//    this.category = this.categorys[this.$route.params.id*1]
//  },
  watch:{
    $route(){
      this.category = this.categorys[this.$route.params.id*1]
    }
  },
  computed:{
    ...mapState(['categorys']),
    category(){
      return this.categorys[this.$route.params.id*1]
    }
  }
}
</script>

<style lang="less">
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
</style>
