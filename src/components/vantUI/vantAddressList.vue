<template>
  <div class="vantAddressEdit">
      <div>
          输入姓名<input type="text" v-model='obj.name'><br/>
          输入电话<input type="text" v-model="obj.tel"><br/> 
          输入地址<input type="text" v-model="obj.address">
      </div>
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      :disabled-list="disabledList"
      disabled-text="以下地址超出配送范围"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
    />
  </div>
</template>
<script>
import Vue from "vue";
import { AddressList } from "vant";
Vue.use(AddressList);
import { Toast } from "vant";
Vue.use(Toast);
export default {
  name: "vantAddressEdit",
  data() {
    return {
        obj:[],
      chosenAddressId: "1",
      list: [
        {
          id: "1",
          name: "张三",
          tel: "13000000000",
          address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室"
        },
        {
          id: "2",
          name: "李四",
          tel: "1310000000",
          address: "浙江省杭州市拱墅区莫干山路 50 号"
        }
      ],
      disabledList: [
        {
          id: "3",
          name: "王五",
          tel: "1320000000",
          address: "浙江省杭州市滨江区江南大道 15 号"
        }
      ]
    };
  },
  methods: {
    onAdd() {
      Toast("新增地址");
      console.log(this.obj)
      this.list.push({
          name:this.obj.name,
          tel:this.obj.tel,
          address:this.obj.address
      })
    },
    onEdit(item, index) {
      Toast("编辑地址:" + index);
    }
  }
};
</script>