<template>
  <div class="elementInfiniteScroll">
    <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
      <li v-for="(i,index) in count" :key='index' class="infinite-list-item">{{ i }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "elementInfiniteScroll",
  data() {
    return {
      count: 0
    };
  },
  methods: {
    load() {
      this.count += 1;
    }
  }
};
</script>
<style scoped>
li{
    height: 30px;
    background-color: sandybrown;
    margin-bottom: 10px;
    color: white;
    text-align: center;

}
</style>