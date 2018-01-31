<template>
    <div>
        <div class="searchbox">
            <input type="text" placeholder="搜索歌曲、歌单、专辑" class="search" v-model="sub" @keyup.enter="submit()" @click="show()"/>
            <span class="cancle" v-show="isshow" @click="showup()">取消</span>
        </div>
        <div class="resou" v-show="isresou">
            <p class="remen">热门搜索</p>
            <ul class="searchul">
                <li v-for="search,index in searchlist"  v-if="index<=11">{{search.k}}</li>
            </ul>
        </div>
        <div class="sousuo" v-show="issousuo">
            <ul class="searchul1">
                <li v-for="search1,index in searchlist1">
                    <i class="icon"></i>
                    <div class="search-r">
                        <p class="songname">{{search1.songname}}</p>
                        <p class="singer">{{search1.singer[0].name}}</p>
                    </div>
                   
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import { Search } from 'mint-ui';
import axios from 'axios';
export default{
    data(){
        return{
            value:"",
            searchlist:[],
            sub:"",
            isshow:false,
            searchlist1:[],
            isresou:true,
            issousuo:false
        }
    },
    components:{
        "Search.name":Search
    },
    mounted(){
        axios.get("http://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1510370320879",{
  		}).then(res=>{
            this.searchlist = res.data.data.hotkey;
  			console.log(res.data.data.hotkey);
        });
    },
    methods:{
        submit(){
            axios.get(`http://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&w=${this.sub}&zhidaqu=1&catZhida=1&t=0&flag=1&ie=utf-8&sem=1&aggr=0&perpage=20&n=20&p=1&remoteplace=txt.mqq.all&_=1510970390702`,{
            }).then(res=>{
                console.log(res.data.data.song.list);
                this.searchlist1 = res.data.data.song.list;
            });
        },
        show(){
            this.isshow = true;
            this.isresou = false;
            this.issousuo = true;
        },
        showup(){
            this.isshow = false;
            this.isresou = true;
            this.issousuo = false;
            this.sub = "";
            this.searchlist1 = [];
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
.searchbox{
    background: #eee;
    text-align: center;
    display: flex;
    padding: 12px 16px;
    .search{
        text-indent: 10px;
        height:30px;
        flex:1;
    }
    .cancle{
        width: 50px;
        font: 16px/30px '';
        color:#555;
        text-indent: 10px;
    }
}
.searchul1{
    li{
        border-bottom: 1px solid #ddd;
        padding: 3px 20px;
        overflow: hidden;
    }
    .songname{
        font: 16px/24px "";
    }
    .singer{
         font: 14px/20px "";
         color: #666;
    }
    .icon{
        display: block;
        float: left;
        width: 22px;
        height: 20px;
        background: url(../common/img/musicicon.png) no-repeat left;
        background-position: 0 0;
        background-size: 22px 30px;
        margin: 10px 20px 0 0 ;
    }
    .search-r{
        float: left;
    }
}
</style>
