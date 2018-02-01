<template>
  <div class="navbar">
    <ul class="navul">
        <router-link tag="li" to="/index/tuijian" active-class="active"><i class="icon icon-1" :class="{active1 : isActive1}" @click="toggle('isActive1')"></i>推荐</router-link>
        <router-link tag="li" to="/index/rank" active-class="active"><i class="icon icon-2" :class="{active2:isActive2}" @click="toggle('isActive2')"></i>排行榜</router-link>
        <router-link tag="li" to="/index/search" active-class="active"><i class="icon icon-3" :class="{active4:isActive3}" @click="toggle('isActive3')"></i>搜索</router-link>
        <router-link tag="li" to="/index/user" active-class="active"><i class="icon icon-4" :class="{active4:isActive4}" @click="toggle('isActive4')"></i>我的</router-link>
    </ul>
  </div>
  
</template>

<script>
import axios from 'axios';
import router from "@/router";
export default {
    data(){
        return{
            isActive1:true,
            isActive2:false,
            isActive3:false,
            isActive4:false
        }
    },
    mounted(){
        
    },
    methods:{
        toggle(act){
            this.isActive1==this.isActive2==this.isActive3==this.isActive4==false;
            this.act == true;
            console.log(this.act)
        }
    }
}
</script>

<style lang="scss" scoped>
.navbar{
    width: 7.5rem;
    position: fixed;
    left: 0;
    bottom: 0;
    font: 0.28rem/0.40rem "";
    box-sizing:border-box;
}
.navul{
    box-sizing: border-box;
    padding: 0.12rem 0.4rem 0.06rem 0.4rem;
    color: #b3b3b3;
    display:flex;
    justify-content: space-between;
    width: 100%;
    background: #282828;
    li{
        list-style: none;
    }
    .icon-1{
        background: url(../../static/img/music.png) no-repeat center;
    }
    .icon-2{
        background: url(../../static/img/ranking.png) no-repeat center;
    }
    .icon-3{
        background: url(../../static/img/search.png) no-repeat center;
    }
    .icon-4{
        background: url(../../static/img/user.png) no-repeat center;
    }
    .active1{
		background: url(../../static/img/music-c.png) no-repeat center;
	}
    .active2{
		background: url(../../static/img/ranking-c.png) no-repeat center;
	}
    .active3{
		background: url(../../static/img/search-c.png) no-repeat center;
	}
    .active4{
		background: url(../../static/img/user-c.png) no-repeat center;
	}
    .icon{
        display: block;
        width: .44rem;
        height: .44rem;
        background-size: 100%;
        margin: 0 auto;
    }
    .active{
        color: #fff;
    }
}
</style>
