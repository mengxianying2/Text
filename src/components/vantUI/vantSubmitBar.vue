<template>
    <div class="vantSubmitBar">
        <van-submit-bar
  :price="3050"
  button-text="提交订单"
  @submit="onSubmit"
>
  <van-checkbox v-model="checked">全选</van-checkbox>
  <span slot="tip">
    你的收货地址不支持同城送, <span @click="xg">修改地址</span>
  </span>
</van-submit-bar>
    </div>
</template>
<script>
import Vue from 'vue';
import { SubmitBar } from 'vant';
Vue.use(SubmitBar);
export default {
    name:'vantSubmitBar',
    data(){
        return{
         checked:false
        }
    },
    methods:{
      onSubmit(){
          alert('提交订单')
      },
      xg(){
           alert('修改地址')
      } 
    }
}
</script>
<style  scoped>
.van-submit-bar{
    margin-bottom: 50px;
}
</style>>
