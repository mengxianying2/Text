<template>
  <div class="bttterScrollUI">
    <strong>Better-Scroll案例,在移动端演示</strong>
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
  name: "bttterScrollUI",
  data() {
    return {
      routerLinks: [
        {
          name: "Demo0(无滚动效果)",
          to: "/betterScrollUI/betterScrollUIDemo0"
        },
        {
          name: "Demo1(竖直滚动效果)",
          to: "/betterScrollUI/betterScrollUIDemo1"
        },
        {
          name: "Demo2(横向滚动效果)",
          to: "/betterScrollUI/betterScrollUIDemo2"
        },
      ]
    };
  },
};
</script>
<style scoped>
a {
  border: 1px solid blueviolet;
  width: 32%;
  margin-top: 10px;
  text-align: center;
}
.one {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>