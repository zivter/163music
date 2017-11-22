<template>
<div>
    <ul class="rankul">
        <li v-for="pic in picslist" class="rankli" @click="handclick(pic.id)">
            <img :src="pic.picUrl" alt="" class="listpic">
            <div class="info">
                <h4 class="tittle">{{pic.topTitle}}</h4>
                <ul class="songlist">
                    <li v-for="data,index in pic.songList"><span class="songs"><span>{{index+1}}. </span>{{data.songname}}--<span class="singername">{{data.singername}}</span></span></li>
                </ul>
            </div>
        </li>
    </ul>
</div>

</template>
<script>
import axios from "axios";
import router from "@/router";
export default {
    data(){
        return{
            picslist:[],
            tittlelist:[],
            songlist:[]
        }
    },
     mounted(){
        axios.get("/v8/fcg-bin/fcg_myqq_toplist.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1510556159008",{
  		}).then(res=>{
              this.picslist = res.data.data.topList;
              console.log(res.data.data.topList);
        });
    },
    methods:{
        handclick(id){
            router.push({name:"toplist",params:{topid:id}});
        }
    }
}
</script>
<style lang="scss" scoped>
.rankul{
    background: #f6f6f6;
    padding:10px 12px;
    .rankli{
        overflow: hidden;
        margin:0px 0px 5px 0px;
        background: #fff;
        padding:0px 0;
    }
    .listpic{
        width: 100px;
        height: 100px;
        float: left;
        display: block;
    }
    .info{
        float: left;
        overflow: hidden;
        margin-left: 20px;
        .tittle{
            color:#333;
            margin-top:2px;
        }
    }
    .info .songlist{
        li{
            font: 14px/26px "";
            height:26px;
            list-style: none;
            color:#000;
        }
        .songs{
            display: inline-block;
            text-overflow: ellipsis;
            white-space: nowrap;
            width: 200px;
            overflow: hidden;
        }
        .singername{
            color:#666;
        }
    }
}
</style>
