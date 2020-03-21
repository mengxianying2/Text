<template>
  <div class="mintToast">
    <button type="button" @click="fn0">按钮1</button>
    <button type="button" @click="fn1">按钮2</button>
    <button type="button" @click="fn2">按钮3</button>
    <button type="button" @click="fn3">关闭提示3</button>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  name: "mintToast",
  data() {
    return {};
  },
  methods: {
    fn0() {
      Toast("提示信息");
    },
    fn1() {
      let instance = Toast("Upload Complete");
      setTimeout(() => {
        instance.close();
      }, 2000);
    },
    fn2() {
    this.t = Toast({
        message: "有提示",
        position: "bottom",
        duration: -1,
         iconClass: 'icon icon-success',
        className: 'kky',
      });
    },
    fn3(){
         console.log("t:",this.t);
      console.log("Toast:",Toast);
     if(this.t){
        this.t.close();
      }else{
        console.log("没有提示框");
      } 
    }
  }
};
</script>
<style>
.icon.icon-success{
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: red;
  border-radius: 100%;
}
</style>