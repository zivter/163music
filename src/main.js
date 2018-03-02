// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
<<<<<<< HEAD
=======
import store from './store'
>>>>>>> 8014d63a0fb7c55429d04266f4c161938f951a31
import ElementUI from "element-ui";
import './assets/my-mint.scss'; //全局修改mint-UI样式  

import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
<<<<<<< HEAD
=======
    store,
>>>>>>> 8014d63a0fb7c55429d04266f4c161938f951a31
    router,
    template: '<App/>',
    components: { App }
})