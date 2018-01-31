<template>
    <div class="toplist">
        <div class="infobox">
            <div class="info-t">
                <div class="info-l"><img :src="piclist.pic_album" alt=""></div>
                <div class="info-r">
                    <p class="info-tittle">{{piclist.ListName}}</p>
                    <p class="info-day" v-if="topinfo.day_of_year">第{{topinfo.day_of_year}}天</p>
                    <p class="info-day" v-else>{{topinfo.date}}周</p>
                    <p class="info-date">{{topinfo.update_time}}更新</p>
                </div>
            </div>
            <div class="info-b">
                <a class="btn">播放全部</a>
            </div>
        </div>
        <p class="add">排行榜 共{{songlist.length}}首</p>
        <ul class="toplistul">
            <li v-for="song,index in songlist" class="toplistli" @click="play(song.data.songid,song.data.albummid,song.data.songname,song.data.singer[0].name)"><div class="liIndex">{{index+1}}</div><div class="liinfo"><span class="tittle">{{song.data.songname}}</span><span class="listtxt">{{song.data.singer[0].name}}  {{song.data.albumdesc}}</span></div></li>
        </ul>
    </div>
</template>
<script>
import axios from 'axios';
import router from "@/router";
export default{
    name: 'toplist',
    data(){
        return{
            songlist:[],
            topinfo:[],
            piclist:[]
        }
    },
    components:{
    },
    mounted(){
        console.log(this.$route.params.topid);
        axios.get(`/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid=${this.$route.params.topid}&_=1510646469987`,{
        }).then(res=>{
            console.log(res.data);
            this.piclist = res.data.topinfo;
            this.songlist = res.data.songlist;
            this.topinfo = res.data;
        });
    },
    methods:{
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
.infobox{
    background: #eee;
    padding-bottom: 20px;
    .info-t{
        overflow: hidden;
        padding: 20px 0 20px 20px;
        .info-l{
            width: 125px;
            float: left;
            img{
                width: 100%;
                display: block;
            }
        }
        .info-r{
            float: left;
            padding-left: 10px;
            color:#666;
            .info-tittle{
                margin: 14px 0 0 0;
                font: 18px/30px "";
            }
            .info-day{
                font: 13px/24px "";
            }
            .info-date{
                font: 13px/24px "";
            }
        }
    }
    .info-b{
        display: -webkit-box;
        -webkit-box-pack: center;
        -webkit-box-align: center;
        .btn{
            display: -webkit-box;
            -webkit-box-pack: center;
            -webkit-box-align: center;
            color: #fff;
            background: #d43c33;
            border: none;
            border-radius: 50px;
            font:20px/40px "";
            width: 170px;
            height: 40px;
            overflow: hidden;
            text-align: center;
        }
        .btn:before{
            content: "";
            display: block;
            height: 0;
            width: 0;
            border-color: transparent transparent transparent #fff;
            border-width: 7px 11px;
            border-style: solid;
            border-radius: 2px;
        }
    }
}
.add{
    font-size: 14px;
    color:#777;
    margin:20px 26px;
}
.toplistul{
    margin-left: 26px;
    .toplistli{
        list-style: none;
        overflow: hidden;
        margin-bottom: 10px;
        .liIndex{
            float: left;
            width: 45px;
            margin-right: -16px;
            color:#888;
        }
        .liinfo{
            float: left;
            font-weight: 300;
            overflow: hidden;
            width: 260px;
            .tittle{
                display: block;
                max-width: 100%;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
            .listtxt{
                display: block;
                max-width: 100%;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                font: 300 12px/1.5 sans-serif;
                color:#777;
            }
        }
    }
    .toplistli:nth-child(1) .liIndex,.toplistli:nth-child(2) .liIndex,.toplistli:nth-child(3) .liIndex{
        color:#ff400b;
    }
}
</style>
