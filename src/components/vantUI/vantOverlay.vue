<template>
  <div class="vantOverlay">
    <van-button type="primary" text="显示遮罩层" @click="show = true" />
    <van-overlay :show="show" @click="show = false" />

    <van-cell is-link @click="showPopup">展示弹出层</van-cell>
    <van-popup v-model="show1">内容</van-popup>
  </div>
</template>
<script>
import Vue from "vue";
import { Overlay } from "vant";
Vue.use(Overlay);
import { Popup } from "vant";
Vue.use(Popup);
export default {
  name: "vantOverlay",
  data() {
    return {
      show: false,
      show1: false
    };
  },
  methods: {
    showPopup() {
      this.show1 = true;
    }
  }
};
</script>
<style scoped>
.van-popup.van-popup--center{
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
}
.van-cell.van-cell--clickable{
 width: 130px;
 height: 50px;
 background-color: sandybrown;

}
.van-cell__value.van-cell__value--alone{
 color: white;
}
</style>