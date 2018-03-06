<template>
  <div class="navbar">
    <ul class="navul">
        <router-link tag="li" to="/index/tuijian" class="icon icon-1" active-class="active1">推荐</router-link>
        <router-link tag="li" to="/index/rank" class="icon icon-2" active-class="active2">排行榜</router-link>
        <router-link tag="li" to="/index/search" class="icon icon-3" active-class="active3">搜索</router-link>
        <router-link tag="li" to="/index/user" class="icon icon-4" active-class="active4">我的</router-link>
    </ul>
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
        
    },
    methods:{
    }
}
</script>

<style lang="scss" scoped>
.navbar{
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    font: 0.26rem/0.46rem "";
    box-sizing:border-box;
}
.navul{
    box-sizing: border-box;
    padding: 0.12rem 0.2rem 0.06rem 0.2rem;
    color: #b3b3b3;
    display:flex;
    justify-content: space-between;
    width: 100%;
    background: #282828;
    li{
        list-style: none;
    }
    .icon-1{
        background: url(../../static/img/music.png) no-repeat top center;
    }
    .icon-2{
        background: url(../../static/img/ranking.png) no-repeat top center;
    }
    .icon-3{
        background: url(../../static/img/search.png) no-repeat top center;
    }
    .icon-4{
        background: url(../../static/img/user.png) no-repeat top center;
    }
    .active1{
		background: url(../../static/img/music-c.png) no-repeat top center;
        color: #fff;
	}
    .active2{
		background: url(../../static/img/ranking-c.png) no-repeat top center;
        color: #fff;
	}
    .active3{
		background: url(../../static/img/search-c.png) no-repeat top center;
        color: #fff;
	}
    .active4{
		background: url(../../static/img/user-c.png) no-repeat top center;
        color: #fff;
	}
    .icon{
        display: block;
        width: .84rem;
        height: .4rem;
        background-size: .42rem;
        margin: 0.04rem auto 0rem;
        padding-top: .4rem;
        text-align: center;
    }
    .active{
        color: #fff;
    }
}
</style>
