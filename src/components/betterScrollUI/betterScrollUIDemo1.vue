<template>
  <div class="bttterScrollUI">
    <div class="box1" ref="box1">
      <ul class="box2" ref="box2">
        <li v-for="n in 15" :key="n">{{n}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
//1引入better-scroll
import BScroll from "better-scroll";
export default {
  name: "bttterScrollUI",
  data() {
    return {};
  },
  mounted() {
    this.initBS(); //初始化better-scroll
    this.stopWheel();
  },
  methods: {
    //具体初始化
    initBS() {
      let box1 = this.$refs.box1; //获取滚动元素(父元素)
      let scroll = new BScroll(box1, {
        scrollY: true,
        click: true
      });
    },
    stopWheel() {
      let box1 = this.$refs.box1;
      box1.onmousewheel = function() {
        return false;
      };
    }
  }
};
</script>
<style scoped>
.box1 {
  height: 300px;
  overflow: scroll;
  background-color: blue;
}

.box2 li {
  height: 50px;
  margin: 5px;
  background-color: red;
}
</style>
