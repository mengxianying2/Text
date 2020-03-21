<template>
  <div class="vantPullRefresh">
    <div class="box">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh" success-text="刷新成功">
        <p>刷新次数: {{ count }}</p>
      </van-pull-refresh>
    </div>

    <div class="box">
      <van-pull-refresh v-model="isLoading" :head-height="80" @refresh="onRefresh">
        <!-- 下拉提示，通过 scale 实现一个缩放效果 -->
        <img
          class="doge"
          slot="pulling"
          slot-scope="props"
          src="https://img.yzcdn.cn/vant/doge.png"
          :style="{ transform: `scale(${props.distance / 80})` }"
        />
        <!-- 释放提示 -->
        <img class="doge" slot="loosing" src="https://img.yzcdn.cn/vant/doge.png" />
        <!-- 加载提示 -->
        <img class="doge" slot="loading" src="https://img.yzcdn.cn/vant/doge-fire.jpg" />
        <p>刷新次数: {{ count }}</p>
      </van-pull-refresh>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { PullRefresh } from "vant";
Vue.use(PullRefresh);
import { Toast } from "vant";
Vue.use(Toast);
export default {
  name: "vantPullRefresh",
  data() {
    return {
      count: 0,
      isLoading: false
    };
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        Toast("刷新成功");
        this.isLoading = false;
        this.count++;
      }, 1000);
    }
  }
};
</script>
<style scoped>
.doge {
  width: 140px;
  height: 72px;
  margin-top: 8px;
  border-radius: 4px;
}
.van-pull-refresh {
  background: sandybrown;
  height: 100px;
}
.box {
  height: 100px;
  margin-bottom: 10px;
}
</style>