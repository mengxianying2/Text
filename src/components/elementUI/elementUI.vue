<template>
  <div class="elementUI">
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
  name: "elementUI",
  data() {
    return {
      routerLinks: [
        { name: "Swipe轮播", to: "/elementUI/elementSwipe" },
        { name: "Timeline时间线 ", to: "/elementUI/elementTimeline" },
        { name: "Form表单 ", to: "/elementUI/elementForm" },
        { name: "Table表格 ", to: "/elementUI/elementTable" },
        { name: "Image图片预览 ", to: "/elementUI/elementImage" },
        { name: "Layout布局 ", to: "/elementUI/elementLayout" },
        {
          name: "DateTimePicker日期时间选择器 ",
          to: "/elementUI/elementDateTimePicker"
        },
        { name: "Upload上传 ", to: "/elementUI/elementUpload" },
        { name: "Transfer穿梭框 ", to: "/elementUI/elementTransfer" },
        { name: "Tree树形控件 ", to: "/elementUI/elementTree" },
        { name: "Breadcrumb面包屑 ", to: "/elementUI/elementBreadcrumb" },
        { name: "Collapse折叠面板", to: "/elementUI/elementCollapse" },
        { name: "Backtop回到顶部", to: "/elementUI/elementBacktop" },
        {
          name: "InfiniteScroll无限滚动",
          to: "/elementUI/elementInfiniteScroll"
        },
        { name: "Drawer抽屉", to: "/elementUI/elementInDrawer" }
      ]
    };
  }
};
</script>
<style scoped>
a {
  border: 1px solid blueviolet;
  width: 32%;
  margin-top: 10px;
  text-align: center;
  height: 28px;
  font-size: 12px;
}
.one {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
