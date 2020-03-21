<template>
  <div class="vantTreeSelect">
    <van-tree-select height="55vw" :items="items" :main-active-index.sync="active">
      <template slot="content">
        <van-image v-if="active === 0" src="https://img.yzcdn.cn/vant/apple-1.jpg" />
        <van-image v-if="active === 1" src="https://img.yzcdn.cn/vant/apple-2.jpg" />
        <van-image v-if="active === 2" src="https://img.yzcdn.cn/vant/apple-1.jpg" />
      </template>
    </van-tree-select>
  </div>
</template>
<script>
import Vue from "vue";
import { TreeSelect } from "vant";
Vue.use(TreeSelect);
export default {
  name: "vantTreeSelect",
  data() {
    return {
      active: 0,
      items: [{ text: "分组 1" }, { text: "分组 2" },{ text: "分组 3" },{ text: "分组 1" }, { text: "分组 2" },{ text: "分组 3" },{ text: "分组 1" }, { text: "分组 2" },{ text: "分组 3" }]
    };
  }
};
</script>