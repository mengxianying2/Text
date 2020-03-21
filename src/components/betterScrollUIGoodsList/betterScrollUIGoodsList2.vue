<template>
  <div class="betterScrollUIGoodsList2">
    <div class="box1" ref="box1">
      <div class="box2" ref="box2">
        <div v-for="(item,i) in addressList" :key="i" class="addressBox" ref="addressBox">
          <div class="title">{{item.title}}</div>
          <div class="addCity" v-for="(item2,i2) in item.lists" :key="i2">{{item2}}</div>
        </div>
      </div>
    </div>
    <div class="addressIndex" ref="addressIndex">
      <div
        v-for="(item,i) in addressList"
        :key="i"
        :class="{active:i===currentIndex}"
        @click="mySelect(i,$event)"
      >{{item.title}}</div>
    </div>
  </div>
</template>
<script>
import data from "../../../static/data/data.json";
import BScroll from "better-scroll";
export default {
  name: "betterScrollUIGoodsList2",
  data() {
    return {
      addressList: data,
      heights: [0],
      scrollY: 0
    };
  },
  methods: {
    //初始化
    initBs() {
      let box1 = this.$refs.box1;
      this.box1bs = new BScroll(box1, {
        click: true,
        scrollY: true,
        probeType: 3
      });
      //左边滚动距离
      this.box1bs.on("scroll", pos => {
        this.scrollY = Math.abs(Math.round(pos.y));
        //  console.log(this.scrollY)
      });
    },
    //所有高度
    getHeights() {
      let addressBox = this.$refs.addressBox;
      let h = 0;
      for (let i = 0, len = addressBox.length; i < len; i++) {
        h += addressBox[i].clientHeight;
        this.heights.push(h);
      }
      console.log(this.heights);
    },
    // 右边的点击事件
    mySelect(i, event) {
      let addressBox = this.$refs.addressBox;
      let el = addressBox[i];
      this.box1bs.scrollToElement(el, 300);
    }
  },
  mounted() {
    this.addressList = data.city;
    this.initBs();
    this.$nextTick(() => {
      this.getHeights();
    });
  },
  computed: {
    currentIndex() {
      for (let i = 0, len = this.heights.length; i < len; i++) {
        let h1 = this.heights[i];
        let h2 = this.heights[i + 1];
        if (!h2 || (this.scrollY >= h1 && this.scrollY < h2)) {
          return i;
        }
      }
      return 0;
    }
  }
};
</script>
<style scoped>
.box1 {
  height: 500px;
  overflow: hidden;
}
.title {
  padding: 16px 16px 10px 16px;
  line-height: 1px;
  font-size: 15px;
  color: sandybrown;
  background: #eeeeee;
  font-weight: bold;
}
.addCity {
    position: relative;
  height: 45px;
  line-height: 45px;
  padding: 0 16px;
  font-size: 14px;
  border-bottom: 1px solid #eeeeee;
}
.addressIndex {
  position: fixed;
  right: 10px;
  top: 20%;
}
.addressIndex > div {
  width: 15px;
  height: 15px;
  font-size: 12px;
  border-radius: 100%;
  margin: 2px;
   line-height: 15px;
  text-align: center;
}
.active {
  background: red;
  color: white;
}
</style>