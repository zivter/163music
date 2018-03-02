<template>
  <div class="navbar">
    <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios';
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

</style>
