<template>
    <div>
        <mt-swipe :auto="4000" class="mt-swipe">
            <mt-swipe-item v-for="data in lunbotu" :key="data.url">
                <img :src="data.url" alt="">
            </mt-swipe-item>
        </mt-swipe>

        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="/static/images/menu1.png" alt="">
                <div class="mui-media-body">新闻资讯</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="/static/images/menu2.png" alt="">
                <div class="mui-media-body">图片分享</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="/static/images/menu3.png" alt="">
                <div class="mui-media-body">商品购买</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="/static/images/menu4.png" alt="">
                <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="/static/images/menu5.png" alt="">
                <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="/static/images/menu6.png" alt="">
                <div class="mui-media-body">联系我们</div></a></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "homeContainer",
        data(){
            return {
                lunbotu:{
                    img1:{url:'/static/images/img1.jpg'},
                    img2:{url:'/static/images/img2.jpg'},
                    img3:{url:'/static/images/img3.jpg'},
                    //此处调用活数据的方法是通过vue-resource调用接口，并将图片信息传递给lunbotu对象，通过v-for放置相应位置
                }
            }
        },
        created() {
            //console.log(this.lunbotu)
            //this.get_lunbotu()
        }
       //methods:{
       //    get_lunbotu(){
       //        this.$http.get('http://vue.studyit.io/api/getlunbo').then(result => {
       //            console.log(result.body)
       //        })
       //    }
       //}
    }
</script>

<style lang="less" scoped>
    .mt-swipe{
        height: 200px;
        .mint-swipe-item{
            img{
                height: 200px;
            }
        }
    }
    .mui-grid-view.mui-grid-9{
        background-color: white;
        border: 0;
        img{
            width: 70px;
        }
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        border: 0;
    }
</style>