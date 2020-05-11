<template>
    <div class="recommendCotainer">
        <!-- 推荐页面头部 -->
        <div class="header">
            <div class="header-top">
                <a class="logo"></a>
                <div class="search">
                    <i class="iconfont"></i>
                    <input type="text" placeholder="搜索商品" class="placeholder">
                </div>
                <button class="btn">登录</button>
            </div>
             <!-- 轮播图导航 -->
            <div class="header-swiper">
                <div class="swiperNav" ref="swiperNav">
                    <div class="navItem">
                        <span class="txt">推荐</span>
                    </div>
                    <div class="navItem"  v-for="item in getRecommendList" :key="item.id">
                        <span class="txt">{{item.name}}</span>
                    </div>
                </div>
                <div class="iconJianTou">
                    <i class="icon "></i>
                </div>
            </div>
        </div>
        <!-- 轮播图区域 -->
        <div class="swiper-wrap" ref="swiper_wrap">
            <div class="swiperContainer" >  
                <!--轮播图 -->
                <div class="swiper-container" autoplay="true" effect>
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <img style="height:296px" src="../static/images/img.png">
                        </div>
                        <div class="swiper-slide">
                            <img style="height:296px" src="../static/images/img1.png">
                        </div >
                        <div class="swiper-slide">
                            <img style="height:296px" src="../static/images/img.png">
                        </div>
                        <div class="swiper-slide">
                            <img style="height:296px" src="../static/images/img1.png">
                        </div>
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
                <!-- 内容区 -->
                <div class="containerWrap">
                    <div class="containerNav">
                        <div class="containerItem">
                            <a href="">
                                <img src="../static/images/images/easy.png"/>
                                <span>网易自营品牌</span>
                            </a>
                        </div>
                        <div class="containerItem">
                            <a href="">
                                <img src="../static/images/images/right.png"/>
                                <span>30天无忧退换</span>
                            </a>
                        </div>
                        <div class="containerItem">
                        <a href="">
                                <img src="../static/images/images/money.png"/>
                                <span>48小时快速退款</span>
                        </a>
                        </div>
                    </div>
                    <!-- 内容区列表 -->
                    <div class='carousel'>
                        <div class="carouselWraper">
                            <div class="carouselSlide">
                                <a href="##">
                                    <img src="../static/images/new.png" alt="">
                                    <span>新品首发</span>
                                </a>
                                <a href="##">
                                    <img src="../static/images/shenghuo.png" alt="">
                                    <span>居家生活</span>
                                </a>
                                <a href="##">
                                    <img src="../static/images/fushi.png" alt="">
                                    <span>服饰鞋包</span>
                                </a>
                                <a href="##">
                                    <img src="../static/images/meishi.png" alt="">
                                    <span>美食酒水</span>
                                </a>
                                <a href="##">
                                    <img src="../static/images/muying.png" alt="">
                                    <span>母婴亲子</span>
                                </a>
                                <a href="##">
                                    <img src="../static/images/gehu.png" alt="">
                                    <span>个护清洁</span>
                                </a>
                                <a href="##">
                                    <img src="../static/images/lvxing.png" alt="">
                                    <span>运动旅行</span>
                                </a>
                                <a href="##">
                                    <img src="../static/images/shuma.png" alt="">
                                    <span>数码家电</span>
                                </a>
                                <a href="##">
                                    <img src="../static/images/quanqiu.png" alt="">
                                    <span>全球特色</span>
                                </a>
                                <a href="##">
                                    <img src="../static/images/chaodi.gif" alt="">
                                    <span>好货抄底</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <!-- 大图模块 -->                                                                                                                                                                                                                                                                                                                                                                                                   
                    <div class="big-promgramtation">
                        <div class="big-programMoudle">
                            <a href="##" class="proItem"></a>
                        </div>
                    </div>
                    <!-- 新人专享模块-->
                    <div class="freshManModule">
                        <!-- 头部-->
                        <div class="moduleTitle">
                            <span class="txt">
                                新人专享礼
                            </span>
                        </div>
                        <!-- 新人专享模块内容区-->
                        <div class="moduleContent">
                            <div class='moduleContent-left'>
                                <div class="name">
                                    新人专享礼包
                                </div>
                                <div class="left-bottom">
                                    <div class="imgwrap">
                                        <img src="../static/images/nvsheng.jpg" alt="">
                                    </div>
                                    <div class="animate"></div>
                                </div>
                            </div>
                            <div class='moduleContent-right'></div>
                        </div>
                    </div>
                </div>
            </div>   
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'                           
import Swiper from 'swiper'
import {mapActions,mapState} from 'vuex'
import {NAVDATA} from '../store/mutations_type'
export default {
    name:'Recommend',
    mounted(){
        new Swiper ('.swiper-container', {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
            },
        })
        // this.$nextTick(()=>{
            
        // })
        new BScroll(this.$refs.swiperNav,{click: true}) 
        new BScroll(this.$refs.swiper_wrap,{click: true})
        // 获取头部导航数据
        this[NAVDATA]();
        
    },
    computed:{
        ...mapState(['getRecommendList'])
    },
    methods:{
        ...mapActions([NAVDATA])
    }                                                                                                                                           
}
</script>

<style scoped lang="stylus">
.recommendCotainer
    .header
        .header-top
            width 100%
            height 60px
            padding 10px 30px 
            box-sizing border-box
            display flex
            justify-content center
            .logo
                display block
                width 138px
                height 40px
                background-image url('../static/images/logo.png')
                background-repeat no-repeat
                background-size cover
                background-position center
            .search
                flex-grow 1
                margin 0 20px
                width 10px
                height 40px
                position relative
                .iconfont
                    display block
                    position absolute
                    top 20px
                    left 20px
                    transform translateY(-50%)
                    background-image url('../static/images/sousou.png')
                    background-repeat no-repeat
                    background-size cover
                    width 20px
                    height 20px
                .placeholder
                    width 100%
                    height 100%
                    text-align center
                    background-color #ededed
                    border-radius 10px
            .btn
                height 40px
                font-size 12px
                background #ffffff
                border 1px solid #DD1A21
                color #DD1A21
                text-align center
        .header-swiper
            position relative 
            height 60px
            .swiperNav
                display flex
                height 60px
                width 70%
                overflow hidden
                padding 0 30px 10px 30px
                .navItem
                    line-height 60px
                    font-size 16px
                    margin-right 10px
                    .txt
                        display block
                        padding 0 10px
                        white-space nowrap
                        height 60px
                        position relative
                        &:after
                            content ''
                            display block
                            position absolute
                            bottom 0px
                            left 0
                            width 100%
                            height 1px
                            border-bottom 1px solid #DD1A21
            .iconJianTou
                z-index 9 
                width 80px
                height 60px
                position absolute
                right 30px
                top -30px
                transform translateY(50%)
                .icon
                    background-image url('../static/images/arrow-down.png')
                    background-position center
                    background-repeat no-reapet
                    display inline-block
                    width 30px
                    height 30px
                    position absolute
                    top 0
                    right 0
                    bottom 0
                    left 0
                    margin auto
    .swiper-wrap
        height calc(100vh - 200px)
        padding-bottom 80px
        .swiperContainer
            .swiper-container
                width 750px
                height 296px
            .containerWrap                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
                .containerNav
                    display flex                                 
                    height 72px          
                    padding 0 30px                                                                                                                     
                    .containerItem
                        flex 1
                        height 72px
                        line-height 72px
                        text-align center
                        & > a
                            height 36px
                            display inline-block
                            vertical-align middle
                            text-align center
                            line-height 36px
                            & > img 
                                width 20px
                                height 20px 
                                margin-right 10px   
                            & > span 
                                font-size 24px
                .carousel
                    .carouselWraper
                        .carouselSlide
                            display flex
                            flex-wrap wrap
                            padding 0 30px
                            & > a
                                display block
                                width 20%
                                height 156px
                                display flex
                                flex-direction column
                                align-items center
                                & > img 
                                    width 80px
                                    height 80px
                                    margin-bottom 10px
                                & > span
                                    font-size 20px
                .big-promgramtation
                    .big-programMoudle
                        height 240px
                        background-color #ccc
                        .proItem
                            display inline-block
                            width 100%
                            height 100%
                            background-image url('../static/images/images/buy.gif')
                            background-repeat no-repeat
                            background-size 100% 100%
                .freshManModule
                    height 200px
                    .moduleTitle
                        height 90px
                        line-height 90px
                        text-align center
                        position relative
                        .txt
                            font-size 35px
                        &:after
                            content ''
                            display block
                            width 30px
                            height 3px
                            position absolute
                            top 45px
                            left 30%
                            background black
                        &:before
                            content ''
                            display block
                            width 30px
                            height 3px
                            position absolute
                            top 45px
                            right 30%
                            background black 
                    .moduleContent
                        height 876px
                        background #eeeeee
                        padding 0 30px
                        .moduleContent-left
                            height 100%
                            width 342px
                            background pink
                            .name
                                padding 30px 0 0 30px
                            .left-bottom
                                width 268px
                                height 257px
                                background #defade
                                .imgwrap
                                    &>img
                                        width 150px
                                        height 120px
                                        margin 10px 20px 0 20px
                                        text-align center
                           




                        













































text
    color #deafde
</style>

