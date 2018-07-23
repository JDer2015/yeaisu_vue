import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home/Home.vue'
import Profile from '../pages/Profile/Profile.vue'
import ShiWu from '../pages/ShiWu/ShiWu.vue'
import ShopCar from '../pages/ShopCar/ShopCar.vue'
import Category from '../pages/Category/Category.vue'
import CategroyInfo from '../pages/Category/CategoryInfo/CategoryInfo.vue'
import Cover from '../pages/Cover/Cover.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path:'/cover',
      component:Cover
    },
    {
      path:'/home',
      component:Home,
      meta:{
        isShow:true
      }
    },
    {
      path:'/profile',
      component:Profile
    },
    {
      path:'/shiWu',
      component:ShiWu,
      meta:{
        isShow:true,
      }
    },
    {
      path:'/shopCar',
      component:ShopCar,
      meta:{
        isShow:true
      }
    },
    {
      path:'/category',
      component:Category,
      meta:{isShow:true},
      children:[
        {
          path:'categoryInfo/:id',
          component:CategroyInfo,
          meta:{isShow:true},
        },
        {
          path:'/category',
          redirect:'/category/categoryInfo/0'
        }
      ]
    },
    {
      path:'/',
      redirect:'/cover'
    }
  ]
})
