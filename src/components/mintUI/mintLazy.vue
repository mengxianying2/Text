<template>
  <div class="mintLazy">
   <ul>
        <li v-for="(item,i) in list" :key="i">
          <img v-lazy="item">
        </li>
      </ul>

      <div id="container" class="box">
  <ul>
    <li v-for="(item,i) in list" :key="i">
      <img v-lazy.container="item">
    </li>
  </ul>
</div>
  </div>
</template>
<script>
import Vue from "vue";
import { Lazyload } from "mint-ui";
Vue.use(Lazyload);

export default {
  name: "mintLazy",
  data() {
    return {
      list: [
        "/static/1.png",
        "/static/2.png",
        "/static/3.png",
        "/static/4.png",
        "/static/5.png",
        "/static/6.png",
        "/static/1.png",
        "/static/2.png",
        "/static/3.png",
        "/static/4.png",
        "/static/5.png",
        "/static/6.png",
      ]
    };
  }
};
</script>
<style>
image[lazy=loading] {
  width: 40px;
  height: 200px;
  margin: auto;
}
img{
    width: 380px;
    height: 300px;
}
.box{
  height: 600px;
  overflow: scroll;
  border: 1px solid red;
}

</style>