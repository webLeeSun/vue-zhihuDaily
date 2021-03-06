//app.js
import './style/reset.css';
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

//初始化VueRouter
const router = new VueRouter({
    hashbang: false,
    history: true,
    //saveScrollPosition: false,  //暂时不加纪录滚动位置
    transitionOnLoad: true
});
const app = Vue.extend({});


router.map({
    '/index': {
        name:'home',
        component: function(resolve){
            require(['./view/index.vue'],resolve);
        }
    },
    '/detail': {
        name:'home',
        component: function(resolve){
            require(['./view/detail.vue'],resolve);
        }
    },
    /* 404路由 */
    '*': {
        component: function(resolve){
            require(['./view/404.vue'],resolve);
        }
    }
});

router.start(app, '#app');
