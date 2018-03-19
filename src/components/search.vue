<template>
    <div>
        <div class="searchbox">
            <input type="text" placeholder="搜索歌曲、歌单、专辑" class="search" 
            v-model="sub" @keyup.enter="submit()" @click="show()"/>
            <span class="cancle" v-show="isshow" @click="showup()">取消</span>
        </div>
        <div class="resou" v-show="isresou">
            <p class="remen">热门搜索</p>
            <ul class="searchul">
                <li v-for="search,index in searchlist" @click="searchThis(search.k)" v-if="index<=11">{{search.k}}</li>
            </ul>
        </div>
        <div class="sousuo" v-show="issousuo">
            <ul class="searchul1">
                <li v-for="search1,index in searchlist1" @click="play(search1.songid,search1.albummid,search1.songname,search1.singer[0].name)">
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
import router from "@/router";

export default{
    name:"search",
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
    },
    mounted(){
        axios.get("/splcloud/fcgi-bin/gethotkey.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1510370320879",{
  		}).then(res=>{
            this.searchlist = res.data.data.hotkey;
        });
    },
    methods:{
        submit(){
            axios.get(`/soso/fcgi-bin/search_for_qq_cp?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&w=${this.sub}&zhidaqu=1&catZhida=1&t=0&flag=1&ie=utf-8&sem=1&aggr=0&perpage=20&n=20&p=1&remoteplace=txt.mqq.all&_=1510970390702`,{
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
        },
        searchThis(e){
            axios.get(`/soso/fcgi-bin/search_for_qq_cp?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&w=${e}&zhidaqu=1&catZhida=1&t=0&flag=1&ie=utf-8&sem=1&aggr=0&perpage=20&n=20&p=1&remoteplace=txt.mqq.all&_=1510970390702`,{
            }).then(res=>{
                console.log(res.data.data.song.list);
                this.searchlist1 = res.data.data.song.list;
            }).then(res=>{
                this.sub = e;
                this.show();
            });
        },
        play(songid,albummid,songname,singername){
            console.log(songid,albummid,songname,singername);
            router.push({name:"player",params:{
                    songid:songid,
                    albummid:albummid,
                    songname:songname,
                    singername:singername
                }
            })
        }
    }
}
</script>
<style lang="scss" scoped>
.mint-searchbar{
    background: #000 !important;
}
.remen{
    margin: .2rem .3rem;
    font: 700 .5rem/.8rem "";
}
.searchul{
    margin-left: .2rem;
}
.searchul li{
    float: left;
    padding:.06rem .1rem;
    border: 1px solid #666;
    list-style: none;
    margin:.1rem .08rem;
    border-radius: .1rem;
    font-size: .28rem;
}
.searchul li:nth-child(1),.searchul li:nth-child(2){
    color:#d43c33;
    border-color: #d43c33;
}
.searchbox{
    background: #eee;
    text-align: center;
    display: flex;
    padding: .24rem .32rem;
    .search{
        text-indent: .2rem;
        height:.64rem;
        flex:1;
        font: .3rem/.5rem "";
    }
    .cancle{
        width: .8rem;
        font: .3rem/.7rem '';
        color:#555;
        text-indent: .2rem;
    }
}
.searchul1{
    li{
        border-bottom: 1px solid #ddd;
        padding: .2rem .4rem;
        overflow: hidden;
        height: .7rem;
    }
    .songname{
        font: .3rem/.36rem "";
    }
    .singer{
         font: .24rem/.36rem "";
         color: #666;
    }
    .icon{
        display: block;
        float: left;
        width: .44rem;
        height: .4rem;
        background: url(../common/img/musicicon.png) no-repeat left;
        background-position: 0 0;
        background-size: .44rem .6rem;
        margin: .1rem .2rem 0 0 ;
    }
    .search-r{
        float: left;
    }
}
</style>
