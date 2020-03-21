<template>
  <div class="Infinitescroll">
<ul
  v-infinite-scroll="loadMore"
  infinite-scroll-disabled="loading"
  infinite-scroll-distance="10">
  <li v-for="item in list" :key="item">{{ item }}</li>
</ul>
  </div>
</template>
<script>
import Vue from "vue";
import { InfiniteScroll } from "mint-ui";
Vue.use(InfiniteScroll);
export default {
  name: "Infinitescroll",
  data() {
    return {
      list: [],
      loading:false,
    };
  },
  methods: {
   loadMore() {
  this.loading = true;
  setTimeout(() => {
    let last = this.list[this.list.length - 1];
    for (let i = 1; i <= 10; i++) {
      this.list.push(last + i);
    }
    this.loading = false;
  }, 2500);
}
  }
};
</script>
<style scoped>
ul{
    overflow:hidden
}
</style>