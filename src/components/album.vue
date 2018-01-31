<template>
    <div class="toplist">
        <div class="infobox">
            <div class="info-t">
                <div class="info-l"><img :src="picsrc" alt=""></div>
                <div class="info-r">
                    <p class="info-tittle">{{songinfo.name}}</p>
                    <p class="info-day">{{songinfo.singername}}</p>
                    <p class="info-date">发行时间{{songinfo.aDate}}</p>
                </div>
            </div>
            <div class="info-b">
                <a class="btn">播放全部</a>
            </div>
        </div>
        <p class="add">专辑 共{{songinfo.total}}首</p>
        <ul class="toplistul">
            <li v-for="song,index in songinfo.list" class="toplistli" @click="play(song.songid,song.albummid,song.songname,song.singer[0].name)"><div class="liIndex">{{index+1}}</div><div class="liinfo"><span class="tittle">{{song.songname}}</span><span class="listtxt">{{song.singer[0].name}}</span></div></li>
        </ul>
        <h3 class="albumintr">专 辑 简 介</h3>
        <p class="albumintro">{{songinfo.desc}}</p>
        <h3 class="albumintr">该 歌 手 的 其 他 专 辑</h3>
        <ul class="abul">
            <li v-for="album in songinfo.otherAlbums" class="otherAlbums">
                <img :src="picurl(album.albumMid)" alt="">
                <p class="albumname">{{album.title}}</p>
                <p class="albumname">{{album.pubDate}}</p>
            </li>
        </ul>
        <div class="brand">
			<img class="brand-logo" src="//y.gtimg.cn/mediastyle/mod/mobile/img/logo.svg?max_age=2592000" alt="">
			<p class="brand-name">QQ音乐</p>
		</div>
    </div>
</template>
<script>
import axios from 'axios';
import router from "@/router";
export default{
    name: 'toplist',
    data(){
        return{
            songinfo:"",
            picsrc:""
        }
    },
    components:{
    },
    mounted(){
        axios.get(`http://c.y.qq.com/v8/fcg-bin/fcg_v8_album_info_cp.fcg?albummid=${this.$route.params.albummid}&g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1510797685616`,{
        }).then(res=>{
            console.log(res.data.data);
            this.songinfo = res.data.data;
            this.picsrc = `https://y.gtimg.cn/music/photo_new/T002R150x150M000${this.$route.params.albummid}.jpg?max_age=2592000`
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
        },
        picurl(aid){
            var url = `https://y.gtimg.cn/music/photo_new/T002R150x150M000${aid}.jpg?max_age=2592000`;
            console.log(url);
            return url;
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
}
.albumintr{
    text-align: center;
    font:400 18px/60px "";
    color: #333;
}
.albumintro{
    text-indent: 20px;
    padding:0 20px;
    color: #777;
    font: 300 13px/1.5 sans-serif;
}
.abul{
    margin-left: 1px;
    display: block;
    overflow: hidden;
}
.otherAlbums{
    float: left;
    width: 120px;
    list-style: none;
    margin:0 2px;
    img{
        width:100%; 
    }
    .albumname{
        text-align: center;
        font:13px/18px "";
        color:#000;
    }
    .albumname:nth-child(3){
        color:#999;
    }
}
.brand{
    
    .brand-logo{
        display: block;
        width: 32px;
        height: 32px;
        margin: 0 auto;
        padding:40px 0 40px 0;
    }
    .brand-name{
        margin-top: 2px;
        text-align: center;
        font-size: 14px;
        font-weight: 400;
        color: #000;
    }
}
</style>
