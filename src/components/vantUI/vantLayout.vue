<template>
  <div class="vantLayout">
    <!-- Layout 组件提供了24列栅格，通过在Col上添加span属性设置列所占的宽度百分比
    此外，添加offset属性可以设置列的偏移宽度，计算方式与 span 相同-->
    <van-row>
      <van-col span="8">span: 8</van-col>
      <van-col span="8">span: 8</van-col>
      <van-col span="8">span: 8</van-col>
    </van-row>
    <van-row>
      <van-col span="4">span: 4</van-col>
      <van-col span="10" offset="4">offset: 4, span: 10</van-col>
    </van-row>

    <van-row>
      <van-col offset="8" span="12">offset: 12, span: 12</van-col>
    </van-row>
  <!-- 将 type 属性设置为 flex 可以启用 flex 布局，便于进行灵活的对齐 -->
  <!-- 左对齐 -->
<van-row type="flex">
  <van-col span="6">span: 6</van-col>
  <van-col span="6">span: 6</van-col>
  <van-col span="6">span: 6</van-col>
</van-row>
<van-row type="flex"  justify="center">
  <van-col span="6">span: 6</van-col>
  <van-col span="6">span: 6</van-col>
  <van-col span="6">span: 6</van-col>
</van-row>
<!-- 右对齐 -->
<van-row type="flex" justify="end">
  <van-col span="6">span: 6</van-col>
  <van-col span="6">span: 6</van-col>
  <van-col span="6">span: 6</van-col>
</van-row>

<!-- 两端对齐 -->
<van-row type="flex" justify="space-between">
  <van-col span="6">span: 6</van-col>
  <van-col span="6">span: 6</van-col>
  <van-col span="6">span: 6</van-col>
</van-row>

<!-- 每个元素的两侧间隔相等 -->
<van-row type="flex" justify="space-around">
  <van-col span="6">span: 6</van-col>
  <van-col span="6">span: 6</van-col>
  <van-col span="6">span: 6</van-col>
</van-row>
  </div>
</template>
<script>
import Vue from "vue";
import { Col, Row } from "vant";
Vue.use(Col);
Vue.use(Row);
export default {
  name: "vantLayout",
  data() {
    return {};
  }
};
</script>
<style scoped>
.van-row {
  margin-top: 10px;
}
 div .van-col{
    background:gold;
    text-align: center; 
 }
 div .van-col.van-col--8{
  border: 1px solid red;
}
 div .van-col.van-col--6{
  border: 1px solid red;
}
</style>