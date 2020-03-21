<template>
  <div class="mintSwipe">
<mt-swipe >
  <mt-swipe-item :auto="4000"  v-for="item in images" :key="item"><img :src="item" /></mt-swipe-item>
</mt-swipe>
  </div>
</template>
<script>

export default {
  name: "mintSwipe",
  data() {
    return {
     images: [
        require("../../assets/10_03.jpg"),
        require("../../assets/10_06.jpg"),
        require("../../assets/logo.png"),
        
      ]
    };
  },
};
</script>
<style scoped>
.mintSwipe {
  height: 100%;
  width: 100%;
}
.mint-swipe {
  height: 230px;
}
.mint-swipe img{
  height: 230px;
  width: 100%;
}
</style>
