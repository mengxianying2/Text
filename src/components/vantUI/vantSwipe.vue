<template>
  <div class="elementUI">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <div class="box1">
      <van-button icon="star-o" type="primary" />
      <van-button icon="star-o" type="primary">按钮</van-button>
      <van-button icon="./static/qianbao.png" type="info">按钮</van-button>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";
Vue.use(Swipe);
Vue.use(SwipeItem);
import { Lazyload } from "vant";
Vue.use(Lazyload);
import { Button } from 'vant';
Vue.use(Button);
export default {
  name: "elementUI",
  data() {
    return {
      images: [
        require("../../assets/10_03.jpg"),
        require("../../assets/10_06.jpg"),
        require("../../assets/logo.png"),
        require("../../assets/10_03.jpg"),
        require("../../assets/10_06.jpg")
      ]
    };
  }
};
</script>
<style>

.my-swipe {
  width: 100%;
  height: 230px;
}
.my-swipe .van-swipe__track {
  width: 100%;
  height: 100%;
}
 .van-swipe__track img{
   width: 100%;
   height: 100%;
 }
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  text-align: center;
   height:230px;
   width: 100%;
}
</style>