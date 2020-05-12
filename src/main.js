import Vue from 'vue'

//导入vue文件区域
import app from './App.vue'

//配置路由
import VueRouter from "vue-router";
Vue.use(VueRouter);

//导入自己的路由js文件
import router from './router'

//导入vue-resource
import Vueresource from 'vue-resource'
Vue.use(Vueresource);

//导入mint-ui样式文件区域
import 'mint-ui/lib/style.css'
import { Header, Swipe, SwipeItem} from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);


//导入mui样式代码块
import './lib/mui-master/dist/css/mui.css'
import './lib/mui-master/examples/hello-mui/css/icons-extra.css'

var vm = new Vue(   {
    el:'#app',
    render:c => c(app),
    router
})