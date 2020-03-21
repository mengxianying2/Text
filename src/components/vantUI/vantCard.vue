<template>
    <div class="vantCard">
        
<van-card
  price="2.00"
  desc="描述信息"
  title="商品标题"
  thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
>
  <div slot="tags">
    <van-tag plain type="danger">标签</van-tag>
    <van-tag plain type="danger">标签</van-tag>
  </div>
  <div slot="footer">
      <van-stepper v-model="value" />
  </div>
</van-card>

    </div>
</template>
<script>
import Vue from 'vue';
import { Stepper } from 'vant';
Vue.use(Stepper);
import { Card } from 'vant';
Vue.use(Card);
export default {
    name:'vantCard',
    data(){
        return{
           value:1
        }
    }
}
</script>