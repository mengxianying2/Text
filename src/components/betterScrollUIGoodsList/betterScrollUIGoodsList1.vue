<template>
  <div class="betterScrollUIGoodsList">
    <div class="box">
      <div class="boxLeft" ref="boxLeft">
        <div class="left">
          <div
            v-for="(item,i) in goods"
            class="goodsMenu"
            ref="goodsMenu"
            :class="{'active':i===currentIndex}"
            @click="mySelect(i,$event)"
            :key="i"
          >{{item.name}}</div>
        </div>
      </div>
      <div class="boxRight" ref="boxRight">
        <div class="right">
          <div v-for="(item,i) in goods" :key="i" ref="goodsType">
            <div class="rightTitle">{{item.name}}</div>

            <div v-for="(item2,i2) in item.foods" :key="i2" class="rightList">
              <div>
                <img :src="item2.image" />
              </div>
              <div>
                <div>{{item2.name}}</div>
                <div>{{item2.description}}</div>
                <div>
                  <span>月销{{item2.sellCount}}份</span>
                  <span>好评率{{item2.rating}}%</span>
                </div>
                <div class="add">
                  <div>
                    <span class="price">￥{{item2.price}}</span>
                    <span>
                      <s class="oldprice" v-if="item2.oldPrice">￥{{item2.oldPrice}}</s>
                    </span>
                  </div>
                  <button type="button">+</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//1引入better-scroll
import BScroll from 'better-scroll'// cnpm i better-scroll --save-dev
// import goodsList from './data/goodsList.json' //适用于本地项目配置文件,不需要ajax请求
export default {
  name: 'myBetterScrollGoodsList',
  data () {
    return {
      goodsList:{},
      goods:[],
      scrollY:0,
      listHeight:[],
      //goodsList2:goodsList
    }
  },
  created() {
    this.getData();
    this.$nextTick(()=>{
      // this.initBS();
    })
  },
  mounted() {
    this.initBS();
  },
  methods: {
    getData(){
      this.axios.get("./static/data/goodsList.json").then(res=>{
        console.log("res:",res);
       // this.goodsList=res.data;
        this.goods=res.data.goods;//等待this.goods中数据渲染完毕,this.$nextTick再执行
        this.$nextTick(()=>{
          this.getHeighs();
        })
      }).catch(err=>{
        console.log("err:",err);
      })
    },
    mySelect(i,event){
      let goodsType = this.$refs.goodsType;
      // console.log("goodsType:",goodsType);
      let el=goodsType[i];
      this.boxRightScroll.scrollToElement(el,300);
    },
    initBS(){
      let boxLeft=this.$refs.boxLeft;
      //console.log("boxLeft:",boxLeft)
      this.boxLeftScroll=new BScroll(boxLeft,{
        click:true,
        scrollY:true,
      })
      let boxRight=this.$refs.boxRight;
      //console.log("boxRight:",boxRight)
      this.boxRightScroll=new BScroll(boxRight,{
        click:true,
        scrollY:true,
        probeType:3
      })
      this.boxRightScroll.on("scroll",pos=>{
        //console.log("x:",pos.x,"y:",pos.y)
        this.scrollY=Math.abs(Math.round(pos.y));
        console.log("滚动了:",this.scrollY);
      })
    },
    getHeighs(){
      console.log("0000",this.$refs);
      let goodsType = this.$refs.goodsType;
      console.log("0000goodsType:",goodsType);
      let h=0;
      this.listHeight.push(h);
      for(let i=0;i<goodsType.length;i++){
        h+=goodsType[i].clientHeight;
        //console.log("我是第",(i+1),"个dom,自身高度",goodsType[i].clientHeight,"累计高度",h);
        this.listHeight.push(h);
      }
      console.log("所有高度:",this.listHeight);
    }
  },
  computed: {
    currentIndex () {
      for(let i=0,len=this.listHeight.length;i<len;i++){
        let h1=this.listHeight[i];
        let h2=this.listHeight[i+1];
        if(!h2||(this.scrollY>=h1&&this.scrollY<h2)){
          let goodsMenu = this.$refs.goodsMenu;
          //console.log("goodsMenu:",goodsMenu);
          let el;
          if(i>=len/2){
            el=goodsMenu[parseInt(len/2)]
          }else{
            el=goodsMenu[0]
          }
          this.boxLeftScroll.scrollToElement(el,300);
          return i;
        }
      }
      return 0;
    }
  },
}
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.box {
  height: 550px;
  width: 100%;
  display: flex;
  overflow: hidden;
}
.boxLeft {
  width: 25%;
  height: 100%;
  background: #eeeeee;
}
.boxRight {
  width: 75%;
  height: 100%;
}
.left .goodsMenu {
  height: 50px;
  text-align: center;
  padding: 20px 0;
}
.rightList {
  display: flex;
  overflow: hidden;
  margin-bottom: 20px;
}
.rightTitle {
  height: 25px;
  background: #eeeeee;
  width: 100%;
  font-size: 13px;
  line-height: 25px;
}
.rightList div:nth-child(1) {
  width: 30%;
  margin-right: 10px;
}
.rightList div:nth-child(1) img {
  height: 75%;
  width: 100%;
}
.rightList div:nth-child(2) {
  width: 60%;
}
.rightList div:nth-child(2) div {
  width: 100%;
}
.rightList div:nth-child(2) div:nth-child(1) {
  padding-top: 5px;
  font-size: 14px;
}
.rightList div:nth-child(2) div:nth-child(2) {
  font-size: 11px;
}
.rightList div:nth-child(2) div:nth-child(3) span:nth-child(1) {
  font-size: 11px;
  color: slategrey;
}
.rightList div:nth-child(2) div:nth-child(3) span:nth-child(2) {
  font-size: 11px;
  color: slategrey;
}
.rightList .price {
  color: red;
  padding-right: 5px;
  font-size: 14px;
}
.rightList .oldprice {
  color: #cccccc;
  font-size: 12px;
}
.rightList button {
  border: none;
  background: none;
  border-radius: 50%;
  width: 22px;
  height: 20px;
  background: dodgerblue;
  color: white;
  font-weight: bold;
  line-height: 20px;
}
.add {
  display: flex;
  justify-content: space-between;
}
.active {
  background: white;
  color: slategrey;
  font-size: 14px;
}
</style>