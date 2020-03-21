<template>
  <div class="vantAddressEdit">
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :columns-num='3'
      :search-result="searchResult"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>
<script>
import address from '../../assets/data/area'
import Vue from "vue";
import { AddressEdit } from "vant";
Vue.use(AddressEdit);
import { Toast } from "vant";
Vue.use(Toast);
import { Area} from "vant";
Vue.use(Area);
export default {
  name: "vantAddressEdit",
  data() {
    return {
      searchResult: [],
      areaList:address,
    };
  },
  methods: {
    onSave(content) {
      console.log(content)
    },
    onDelete() {
      Toast("delete");
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "黄龙万科中心",
            address: "杭州市西湖区"
          }
        ];
      } else {
        this.searchResult = [];
      }
    }
  }
};
</script>