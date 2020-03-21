<template>
  <div class="vantUI">
    <div class="one">
      <router-link v-for="(item,index) in routerLinks" :key="index" :to="item.to">{{item.name}}</router-link>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: "vantUI",
  data() {
    return {
      routerLinks: [
        { name: "Toast轻提示", to: "/vantUI/vantToast" },
        { name: "Swipe轮播", to: "/vantUI/vantSwipe" },
        { name: "Steps步骤条", to: "/vantUI/vantSteps" },
        { name: "Area省市区", to: "/vantUI/vantArea" },
        { name: "Image图片", to: "/vantUI/vantImage" },
        { name: "Layout布局", to: "/vantUI/vantLayout" },
        { name: "Overlay遮罩层", to: "/vantUI/vantOverlay" },
        { name: "PullRefresh下拉刷新", to: "/vantUI/vantPullRefresh" },
        { name: "TreeSelect分类选择", to: "/vantUI/vantTreeSelect" },
        { name: "AddressEdit地址编辑", to: "/vantUI/vantAddressEdit" },
        { name: "AddressList地址列表", to: "/vantUI/vantAddressList" },
        { name: "Card卡片", to: "/vantUI/vantCard" },
        { name: "Contact联系人", to: "/vantUI/vantContact" },
        { name: "Coupon优惠券选择器", to: "/vantUI/vantCoupon" },
        { name: "GoodsAction商品导航", to: "/vantUI/vantGoodsAction" },
        { name: "SubmitBar提交订单栏", to: "/vantUI/vantSubmitBar" },
        { name: "Sku商品规格", to: "/vantUI/vantSku" }
      ]
    };
  }
};
</script>
<style scoped>
a {
  border: 1px solid blueviolet;
  width: 32%;
  margin-top: 5px;
  text-align: center;
  font-size: 13px;
  height: 30px;
}
.one {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>

