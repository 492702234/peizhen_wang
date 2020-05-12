import Vue from 'vue'

//导入vue文件区域
import app from './App.vue'

//导入mint-ui样式文件区域
import 'mint-ui/lib/style.css'
import { Header } from 'mint-ui'
Vue.component(Header.name, Header)

//导入mui样式代码块
import './lib/mui-master/dist/css/mui.css'

var vm = new Vue({
    el:'#app',
    render:c => c(app)
})