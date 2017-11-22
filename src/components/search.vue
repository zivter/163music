<template>
    <div>
        <mt-search
            v-model="value"
            cancel-text="取消"
            placeholder="搜索歌曲、歌单、专辑">
        </mt-search>
        <p class="remen">热门搜索</p>
        <ul class="searchul">
            <li v-for="search,index in searchlist"  v-if="index<=11">{{search.k}}</li>
        </ul>
    </div>
</template>
<script>
import { Search } from 'mint-ui';
import axios from 'axios';
export default{
    data(){
        return{
            value:"",
            searchlist:[]
        }
    },
    components:{
        "Search.name":Search
    },
    mounted(){
        axios.get("/splcloud/fcgi-bin/gethotkey.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1510370320879",{
  		}).then(res=>{
            this.searchlist = res.data.data.hotkey;
  			console.log(res.data.data.hotkey);
        });
        document.getElementsByClassName("mint-searchbar-core").onclick = function(){
            console.log(1);
        }
    },
    methods:{
        
        submit(){
            console.log(1);
        }
    }
}
</script>
<style lang="scss" scoped>
.mint-searchbar{
    background: #000 !important;
}
.remen{
    margin: 10px 10px;
}
.searchul li{
    float: left;
    padding:3px 10px;
    border: 1px solid #666;
    list-style: none;
    margin:6px 8px;
    border-radius: 99px;
    font-size: 15px;
}
.searchul li:nth-child(1),.searchul li:nth-child(2){
    color:#d43c33;
    border-color: #d43c33;
}
</style>
