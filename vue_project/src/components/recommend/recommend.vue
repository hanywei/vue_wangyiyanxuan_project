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
    </div>
</template>

<script>
export default {
    name:'recommend'
}
</script>

<style scoped lang="stylus">
.recommendCotainer
    .header
        width 100%
        height 60px
        margin-top 10px
        padding 0 20px 
        box-sizing border-box
        display flex
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



</style>

