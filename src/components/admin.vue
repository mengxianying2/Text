<template>
  <div class="admin">
    <div class="routerView">
      <router-view></router-view>
    </div>
    <div class="one">
      <router-link v-for="(item,index) in routerLinks" :key="index" :to="item.to">{{item.name}}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      routerLinks: [
        { name: "myElementUI", to: "/elementUI" },
        { name: "myVant", to: "/vantUI" },
        { name: "myMintUI", to: "/mintUI" },
         { name: "betterScrollUI", to: "/betterScrollUI" },
          { name: "饿了么", to: "/betterScrollUIGoodsList" }
      ]
    };
  }
};
</script>

<style scoped>
.lac {
  background-color: red;
  color: #fff;
}
.routerView {
  margin-bottom: 50px;
}
.one {
  position: fixed;
  bottom: 0;
  left: 0;
  padding-bottom: 5px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 50px;
  z-index: 100;
  width: 100%;
}
.one a {
  width: 20%;
  background-color: sandybrown;
  height: 100%;
  line-height: 50px;
  font-size: 12px;
  text-align: center;
  box-sizing: border-box;
  border-left: 1px solid black;
}
</style>


