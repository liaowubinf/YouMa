// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import router from './router/index'
import App from './App'
import VueLazyload from 'vue-lazyload'
import { ToastPlugin } from 'vux';

// 微信浏览器标题
Vue.use(require('vue-wechat-title'));
// 图片懒加载
Vue.use(VueLazyload, {
        preLoad: 1.3,
        attempt: 1,
        listenEvents: ['touchmove']
    })
    //弹框
Vue.use(ToastPlugin);


new Vue({
    el: '#app',
    router,
    render: h => h(App)
})