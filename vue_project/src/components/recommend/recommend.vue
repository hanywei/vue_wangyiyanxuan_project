<template>
    <div class="recommendCotainer">
        <!-- 推荐页面头部 -->
        <div class="header">
            <a class="logo"></a>
            <div class="search">
                <i class="iconfont"></i>
                <input type="text" placeholder="搜索商品" class="placeholder">
            </div>
            <button class="btn">登录</button>
        </div>
        <!-- 轮播图区域 -->
        <div class="swiperContainer">
            <!-- 轮播图导航 -->
            <div class="swiperNav" ref="swiper">
                <div class="navItem">
                    <span class="txt">推荐</span>
                </div>
                <div class="navItem">
                    <span class="txt">居家生活</span>
                </div>
                <div class="navItem">
                    <span class="txt">服饰鞋包</span>
                </div>
                <div class="navItem">
                    <span class="txt">美食酒水</span>
                </div>
                <div class="navItem">
                    <span class="txt">个护清洁</span>
                </div>
                <div class="navItem">
                    <span class="txt">母婴亲子</span>
                </div>
                <div class="navItem">
                    <span class="txt">母婴亲子</span>
                </div>
                <div class="navItem">
                    <span class="txt">母婴亲子</span>
                </div>
                <div class="navItem">
                    <span class="txt">母婴亲子</span>
                </div>
                <div class="navItem">
                    <span class="txt">母婴亲子</span>
                </div>
            </div>
            <div class="iconJianTou">
                <i class="icon "></i>
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name:'Recommend',
    mounted(){
        // this.$nextTick(()=>{
            
        // })
        new BScroll(this.$refs.swiper,{click: true}) 
    }
}
</script>

<style scoped lang="stylus">
.recommendCotainer
    .header
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
            background-image url('../../static/images/logo.png')
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
                background-image url('../../static/images/sousou.png')
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
    .swiperContainer
        position relative
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
                background-image url('../../static/images/arrow-down.png')
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


                




                


































text
    color #deafde
</style>

