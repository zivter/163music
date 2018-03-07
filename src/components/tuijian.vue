<template>
<div class="tuijian">
    <mt-swipe :auto="4000" class="box">
        <mt-swipe-item v-for="item in pics" :key="item.picUrl"><img :src="item.picUrl" alt="" @click="handclick(item.linkUrl)"></mt-swipe-item>
    </mt-swipe>
    <h4>电台</h4>
    <ul class="radioUl">
        <li v-for="radio in radios" :key="radio.picUrl"><img :src="radio.picUrl" alt=""><span class="tittle">{{radio.Ftitle}}</span></li>
    </ul>
    <h4>热门歌单</h4>
    <p class="btm btm1">author: yezhouteng@gmail.com</p>
    <a href="https://github.com/zivter" class="btm">github: https://github.com/zivter</a>
    <a href="https://weibo.com/u/1810240625" class="btm">weibo: https://weibo.com/u/1810240625</a>
    <p class="btm">wechat: yezhouteng</p>
</div>
</template>

<script>
import "vue-swipe/dist/vue-swipe.css"; //css 模块化 导入
import { Swipe, SwipeItem } from 'vue-swipe';
import axios from "axios";
import router from "@/router";
export default {
    data(){
        return{
            pics:[],
            radios:[],
            albummid:""
        }
    },
    components:{
        swipe:Swipe,
        "swipe-item":SwipeItem
    },
     mounted(){
        axios.get("/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1510366699907",{
  		}).then(res=>{
              this.pics = res.data.data.slider;
              this.radios = res.data.data.radioList;
        });
    },
    methods:{
        handclick(e){
            if(e.indexOf("albummid")>=1){
                this.albummid = e.slice(e.indexOf("albummid")+9,);
                router.push({name:"album",params:{albummid:this.albummid}});
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.tuijian{
    background: #f5f5f5;
    padding-bottom: 1.6rem;
}
.box{
    width: 100%;
    height: 3rem;
    img{
        width: 100%;
        height: 100%;
    }
}
h4{
    margin:.2rem 0 .2rem .2rem;
    font-weight: 500;
    font-size: .5rem;
    font-weight: 700;
}
.radioUl{
    display: flex;
    justify-content: space-around;
    li{
        width: 47%;
        height: 47%;
        list-style: none;
        background:#fff;
        img{
            width: 100%;
            height: 100%;
        }
        .tittle{
            margin: .05rem 0 .2rem .05rem;
            display: block;
            font-size:.28rem;
        }
    }
}
.findmusic{
    text-align: center;
    display: block;
    text-decoration: none;
    color:#aaa;
    font-size: .28rem;
    margin:20px 0 14px 0 ;
}
.pc{
    text-align: center;
    display: block;
    text-decoration: none;
    color:#333;
    font-size: .28rem;
    margin-bottom: 20px;
}
.logo{
    display: block;
    margin: 0 auto;
    width: 2.3rem;
    height: .44rem;;
}
.btm{
    text-align: center;
    font-size: .1rem;
    color:#999;
    margin-bottom: .2rem;
    display: block;
    text-decoration: none;
}
.btm1{
    margin-top:.26rem;
}
</style>
