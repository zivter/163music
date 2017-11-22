<template>
    <div class="player">
        <div class="btn-audio">
            <audio :src="songsrc" id="aaa"></audio>
        </div>
        <div class="p-top">
            <span class="back"></span>
            <div class="music-info">
                <h4 class="musicname">{{songname}}</h4>
                <p class="singer">-{{singername}}-</p>
            </div>
        </div>
        <!-- <div class="p-pic">
            <img :src="albumsrc" alt="">
        </div> -->
        <div class="p-lyr">
            <p>啥他妈了逼的爱情,我爱你妈了逼啊</p>
        </div>
        <div class="p-contr">
            <p @click="audioPause" class="pause"></p>
            <p @click="audioPre" class="pre"></p>
            <p @click="audioNext" class="next"></p>
        </div>
        
    </div>
</template>
<script>
import axios from 'axios';
export default{
    name:"player",
    data(){
        return{
            songid:"",
            albummid:"",
            songname:"",
            singername:"",
            songsrc:"",
            albumsrc:"",
            isplay:false
        }
    },
    components:{
    },
    mounted(){
        var audio = document.getElementById("aaa");
        this.songid=this.$route.params.songid;
        this.albummid = this.$route.params.albummid;
        this.songname = this.$route.params.songname;
        this.singername = this.$route.params.singername;
        this.songsrc = "http://ws.stream.qqmusic.qq.com/"+this.songid+".m4a?fromtag=46";
        this.albumsrc = "https://y.gtimg.cn/music/photo_new/T002R300x300M000"+this.albummid+".jpg?max_age=2592000";

    },
    watch:{ 
        
    },
    methods:{
        
        playmusic(){
        },
        audioPlay(){
            this.$el.childNodes[0].children.aaa.play();
        },
        audioPause(){
            if(this.isplay){
                this.$el.childNodes[0].children.aaa.pause();
                this.isplay = !this.isplay;
            }else{
                this.$el.childNodes[0].children.aaa.play();
                this.isplay = !this.isplay;
            }
            
        },
        audioPre(){
             console.log(2)
        },
        audioNext(){
            console.log(3)
        }
    }
}
</script>
<style lang="scss" scoped>
.player{
    width: 100%;
    height: 603px;
    background: url(../common/img/bg.png) no-repeat top left;
    background-size: 100% 100%;
}
.p-top{
    width: 100%;
    text-align: center;
    padding-top:82px;
    .musicname{
        font:600 24px/36px "";
    }
}
.p-lyr{
    text-align: center;
    margin:20px 0 0 0;
}
.p-contr{
    margin:330px 0 0 44px;
    overflow: hidden;
    .pause{
        width: 92px;
        height: 90px;
        background: none;
        border: none;
        float: left;
    }
    .pre{
        width: 60px;
        height: 60px;
        float: left;
        margin: 13px 0 0 61px;
    }
    .next{
        width: 60px;
        height: 60px;
        float: left;
        margin: 13px 0 0 15px;
    }
}
</style>
