<template>
  <div class="vantGoodsAction">
    <van-goods-action>
  <van-goods-action-icon icon="chat-o" text="客服" dot   color="#07c160" />
  <van-goods-action-icon icon="cart-o" text="购物车" info="5" />
  <van-goods-action-icon icon="shop-o" text="店铺" info="12" />
  <van-goods-action-icon icon="star" text="收藏"   @click="onClickIcon" v-show="isLogin"/>
  <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" v-show="isLogin1" @click="onClickIcon1"/>
  <van-goods-action-button type="warning" text="加入购物车" @click="onClickButton" />
  <van-goods-action-button type="danger" text="立即购买" @click="onClickButton"/>
</van-goods-action>

  </div>
</template>
<script>
import Vue from "vue";
import { GoodsAction, GoodsActionIcon, GoodsActionButton } from "vant";
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
import { Toast } from "vant";
Vue.use(Toast);
import { SubmitBar } from 'vant';

Vue.use(SubmitBar);
export default {
  name: "vantGoodsAction",
  data() {
    return {
        isLogin:true,
        isLogin1:false
    };
  },
  methods: {
    onClickIcon() {
      Toast("点击图标");
      this.isLogin=false;
      this.isLogin1=true;
    },
    onClickButton() {
      Toast("点击按钮");
    },
     onClickIcon1() {
      this.isLogin1=false;
      this.isLogin=true;
    },
  },
};
</script>
<style>
.van-goods-action{
    margin-bottom: 100px;
}
</style>
