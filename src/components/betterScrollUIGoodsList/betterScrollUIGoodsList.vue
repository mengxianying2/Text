<template>
  <div class="betterScrollUIGoodsList">
    <van-tabs v-model="activeName" title-inactive-color='black' title-active-color='red'>
      <van-tab title="商品" name="a" to="/betterScrollUIGoodsList/betterScrollUIGoodsList1"></van-tab>
      <van-tab title="城市索引" name="b" to="/betterScrollUIGoodsList/betterScrollUIGoodsList2"></van-tab>
      <van-tab title="商家" name="c" to="/betterScrollUIGoodsList/betterScrollUIGoodsList3"></van-tab>
    </van-tabs>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: "betterScrollUIGoodsList",
  data() {
    return {
      activeName: "a"
    };
  }
};
</script>