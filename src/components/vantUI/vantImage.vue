<template>
  <div class="vantImage">
    <div class="box">
      基础用法
      <van-image width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
    </div>
    <div class="box">
     圆形模式fit="contain"
      <van-image
        round
        fit="contain"
        width="8rem"
        height="10rem"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
      />
    </div>
    <div class="box">
      圆形模式
      <van-image round width="10em" height="10rem" src="https://img.yzcdn.cn/vant/cat.jpeg" />
    </div>
    <div class="box">
      圆形模式fit="cover"
      <van-image
        round
        fit="cover"
        width="10rem"
        height="10rem"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
      />
    </div>
    <div class="box">
      圆形模式fit="none"
      <van-image
        round
        fit="none"
        width="10rem"
        height="10rem"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
      />
    </div>
    <div class="box">
      圆形模式fit="scale-downnone"
      <van-image
        round
        fit="scale-down"
        width="10rem"
        height="10rem"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
      />
    </div>
    <div class="box">
      圆形模式fit="fill
      <van-image
        round
        fit="fill"
        width="10rem"
        height="10rem"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
      />
    </div>
    <div class="box">
        填充模式
      <van-image
        width="10rem"
        height="10rem"
        fit="contain"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
      />
    </div>
     <div class="box">
        填充模式fit="none"
      <van-image
        width="10rem"
        height="10rem"
        fit="none"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
      />
    </div>
<!-- 
<div class="box">
<van-image src="https://img.yzcdn.cn/vant/ca.jpeg">
  <template v-slot:error>加载失败</template>
</van-image>
</div> -->

  </div>
</template>
<script>
import Vue from "vue";
import { Image } from "vant";
Vue.use(Image);
import { Lazyload } from 'vant';
Vue.use(Lazyload);
export default {
  name: "vantImage",
  data() {
    return {};
  }
};
</script>
<style scoped>
.box {
  width: 200px;
  border: 1px solid red;
  height: 200px;
  text-align: center;
  margin: 0 auto;
}
</style>