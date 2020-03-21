<template>
  <div class="elementUI">
    <button type="button" @click="fn">提示</button>
    <button type="button" @click="fn1">提示1</button>
    <button type="button" @click="fn2">提示2</button>

  </div>
  
</template>
<script>
import Vue from "vue";
import { Toast } from "vant";
Vue.use(Toast);
import { IndexBar, IndexAnchor } from 'vant';
Vue.use(IndexBar);
Vue.use(IndexAnchor);
export default {
  name: "elementUI",
  data() {
    return {
      meg: "element00"
    };
  },
  methods: {
    fn() {
      this.$toast("提示文案");
    },
    fn1() {
      const toast = Toast.loading({
        duration: 0, // 持续展示 toast
        forbidClick: true,
        message: "倒计时 3 秒"
      });

      let second = 3;
      const timer = setInterval(() => {
        second--;
        if (second) {
          toast.message = `倒计时 ${second} 秒`;
        } else {
          clearInterval(timer);
          // 手动清除 Toast
          Toast.clear();
        }
      }, 1000);
    },
    fn2(){
     Toast.loading({
  message: '加载中...',
  forbidClick: true
});
   
    }
  }
};
</script>
