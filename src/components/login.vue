<template>
    <div class="login">
        {{meg}}
        <button type="button" @click="go('/elementUI')">点击</button>
    </div>
</template>
<script>
export default {
    name:'login',
    data(){
       return{
           meg:'123'
       }
    },
    methods:{
        go(url){
            this.$router.push(url)
        }
    }
}
</script>