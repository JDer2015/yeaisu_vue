<template>
  <div id="app">
    <Home/>
    <Footer/>
  </div>
</template>


<script>
import Home from './pages/Home/Home.vue'
import Profile from './pages/Profile/Profile.vue'
import ShopCar from './pages/ShopCar/ShopCar.vue'
import Category from './pages/Category/Category.vue'
import ShiWu from './pages/ShiWu/ShiWu.vue'
import Cover from './components/Cover/Cover.vue'
import Footer from './components/Footer/Footer.vue'

export default {
  components: {
    Home,
    Profile,
    ShopCar,
    Category,
    ShiWu,
    Cover,
    Footer
  }
}
</script>

<style lang="less">
  #app{
    width:100%;
    background-color: #eee;
  }
</style>
