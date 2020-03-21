<template>
  <div class="elementUI">
  <van-address-edit :area-list="areaList" :columns-num='3' show-postal show-set-default show-search-result>

  </van-address-edit>

  </div>
</template>
<script>
import address from '../../assets/data/area'
import Vue from "vue";
import { Area, AddressList } from "vant";
Vue.use(Area);
export default {
  name: "elementUI",
  data() {
    return {
      areaList:address,
  }
  }
};
</script>