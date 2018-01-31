<template>
  <div class="navbar">
    <ul class="navul">
        <router-link tag="li" to="/index/tuijian" activeClass="active">推荐</router-link>
        <router-link tag="li" to="/index/rank" activeClass="active">排行榜</router-link>
        <router-link tag="li" to="/index/search" activeClass="active">搜索</router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios';
import router from "@/router";
export default {
    data(){
        return{
            
        }
    },
    mounted(){
        // axios.get("musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1510366699907",{
  		// }).then(res=>{
  		// 	console.log(res);
        // });
        // axios.get("/splcloud/fcgi-bin/gethotkey.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1510370320879",{
  		// }).then(res=>{
  		// 	console.log(res);
        // });
        // axios.get("/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid=26&_=1510370270214",{
  		// }).then(res=>{
  		// 	console.log(res);
        // });
    }
}
</script>

<style lang="scss" scoped>

.navul{
    z-index: 10;
    display:flex;
    justify-content: space-between;
    border-bottom: 1px solid #ddd;
    li{
        padding:10px 43px;
        list-style: none;
    }
    .active{
		border-bottom: 3px solid #d43c33;
	}
}
</style>
