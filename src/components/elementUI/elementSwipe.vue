<template>
  <div class="elementSwipe">
    <el-radio-group v-model="radio1">
      <el-radio-button label="上海"></el-radio-button>
      <el-radio-button label="北京"></el-radio-button>
      <el-radio-button label="广州"></el-radio-button>
      <el-radio-button label="深圳"></el-radio-button>
    </el-radio-group>

    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in images" :key="item">
        <h3 class="medium"> <img :src="item" /></h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  name: "elementSwipe",
  data() {
    return {
      radio1: "上海",
      images: [
        require("../../assets/10_03.jpg"),
        require("../../assets/10_06.jpg"),
        require("../../assets/logo.png"),
        
      ]
    };
  }
};
</script>
<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>