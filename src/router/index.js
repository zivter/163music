import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import tuijian from '@/components/tuijian'
import rank from '@/components/rank'
import search from '@/components/search'
import toplist from '@/components/toplist'
import player from '@/components/player'
import album from '@/components/album'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/index',
            component: index,
            children: [{
                    path: 'tuijian',
                    component: tuijian
                },
                {
                    path: 'rank',
                    component: rank
                },
                {
                    path: 'search',
                    component: search
                },
                {
                    path: '/',
                    redirect: '/index/tuijian'
                }
            ]
        },
        {
            path: "/toplist/:topid",
            component: toplist,
            name: "toplist"
        }, {
            path: "/album/:albummid",
            component: album,
            name: "album"
        },
        {
            path: "/player/?songid=:songid&albummid=:albummid&songname=:songname&singername=:singername",
            component: player,
            name: "player"
        },
        {
            path: '/',
            redirect: '/index/tuijian'
        }
    ]
})