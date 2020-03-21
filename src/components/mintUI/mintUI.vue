<template>
    <div class="mintUI">
        <div class="one">
            <router-link v-for="(item,index) in routerLinks" :key="index" :to='item.to'>
                {{item.name}}
            </router-link>
        </div>
     <div>
      <router-view></router-view>
    </div>
    </div>
</template>
<script>
export default {
    name:'mintUI',
    data(){
        return{
           routerLinks:[
                {name: 'Toast轻提示', to: '/mintUI/mintToast'},
                {name: 'Swipe轮播', to: '/mintUI/mintSwipe'},
                {name: 'Lazy延迟加载', to: '/mintUI/mintLazy'},
      ]
        }
    }
}
</script>
<style scoped>
a{
  border: 1px solid blueviolet;
  width: 32%;
  margin-top: 10px;
  text-align: center;
}
.one{
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>