<template>
  <footer class="footter-guide">
       <a href="avascript:;" class="guide-item" @click="goto(`/Recommend`)" :class="{on:$route.path===`/Recommend`}">
          <span class="item-icon">
              <i class="iconfont icon-sousou"></i>
          </span>
          <span>
              首页
          </span>
      </a>
      <a href="avascript:;" class="guide-item" @click="goto(`/Classify`)" :class="{on:$route.path===`/Classify`}">
          <span class="item-icon">
              <i class="iconfont"></i>
          </span>
          <span>
              分类
          </span>
      </a>
      <a href="avascript:;" class="guide-item" @click="goto(`/Buy`)" :class="{on:$route.path===`/Buy`}">
          <span class="item-icon">
              <i class="iconfont"></i>
          </span>
          <span>
              值得买
          </span>
      </a>
      <a href="avascript:;" class="guide-item" @click="goto(`/Cart`)" :class="{on:$route.path===`/Cart`}">
          <span class="item-icon">
              <i class="iconfont"></i>
          </span>
          <span>
              购物车
          </span>
      </a>
      <a href="avascript:;" class="guide-item" @click="goto(`/Personal`)" :class="{on:$route.path===`/Personal`}">
          <span class="item-icon">
              <i class="iconfont"></i>
          </span>
          <span>
              个人
          </span>
      </a>
  </footer>
</template>

<script>
export default {
    name:'FooterGuide',
    methods:{
        // 编程式导航
        goto(path){
            this.$router.replace(path)
        }
    }

}
</script>

<style scoped lang="stylus">
.footter-guide
    top-border-1px(#ee44ee)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background #ffffff
    width 100%
    height 80px
    display flex
    .guide-item
        display flex
        flex 1
        text-align center
        flex-direction column
        align-items center
        &.on
            color #02a774
        .item-icon
            display inline-block
            width 30px
            height 30px
            
                


</style>