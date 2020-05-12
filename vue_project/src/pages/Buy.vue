<template>
  <div class="buyWraper">
      <div class="buy-header">
        <header>
          <router-link href="##" class="buy-home" to="/Login"></router-link>
          <p>值得买</p>
          <div class="search">
            <img src="../static/images/sousou.png" alt="">
            <i></i>
          </div>
        </header>
      </div>
      <div class="buyContainer">
        <div class="buy-content">
          <div class="buy-top">
              <div class="txt">
                <span class="txt_buy">值得买</span>
                <span class="txt_yan">严选好物 用心生活</span>
              </div>
              <div class="buy-list">
                <div class="buy-item">
                    <a href="##" class="buy-img">
                      <img src="../static/images/buy1.gif" alt="">
                      <div class="item_txt">
                        <p class="txt_chao">9.9超值</p>
                        <p class="txt_ding">定价直降</p>
                      </div>
                    </a>
                </div>
                <div class="buy-item">
                    <a href="##" class="buy-img">
                      <img src="../static/images/buy2.png" alt="">
                      <div class="item_txt">
                        <p class="txt_chao">9.9超值</p>
                        <p class="txt_ding">定价直降</p>
                      </div>
                    </a>
                </div>
                <div class="buy-item">
                    <a href="##" class="buy-img">
                      <img src="../static/images/buy3.png" alt="">
                      <div class="item_txt">
                        <p class="txt_chao">9.9超值</p>
                        <p class="txt_ding">定价直降</p>
                      </div>
                    </a>
                </div>
                <div class="buy-item">
                    <a href="##" class="buy-img">
                      <img src="../static/images/buy4.png" alt="">
                      <div class="item_txt">
                        <p class="txt_chao">9.9超值</p>
                        <p class="txt_ding">定价直降</p>
                      </div>
                    </a>
                </div>
                <div class="buy-item">
                    <a href="##" class="buy-img">
                      <img src="../static/images/buy5.png" alt="">
                      <div class="item_txt">
                        <p class="txt_chao">9.9超值</p>
                        <p class="txt_ding">定价直降</p>
                      </div>
                    </a>
                </div>
                <div class="buy-item">
                    <a href="##" class="buy-img">
                      <img src="../static/images/buy6.png" alt="">
                      <div class="item_txt">
                        <p class="txt_chao">9.9超值</p>
                        <p class="txt_ding">定价直降</p>
                      </div>
                    </a>
                </div>
                <div class="buy-item">
                    <a href="##" class="buy-img">
                      <img src="../static/images/buy7.png" alt="">
                      <div class="item_txt">
                        <p class="txt_chao">9.9超值</p>
                        <p class="txt_ding">定价直降</p>
                      </div>
                    </a>
                </div>
                <div class="buy-item">
                    <a href="##" class="buy-img">
                      <img src="../static/images/buy8.png" alt="">
                      <div class="item_txt">
                        <p class="txt_chao">9.9超值</p>
                        <p class="txt_ding">定价直降</p>
                      </div>
                    </a>
                </div>
              </div>
          </div>
          
        </div>
      </div>
  </div>
</template>

<script>
export default{
      name:'Buy'
	   
	   
	}
</script>

<style lang="stylus" scoped >
.buyWraper
    .buy-header
        header
          height 100px
          display flex
          align-items center
          padding 0 5px
          .buy-home
            display inline-block
            width 80px
            height 80px
            background-image url('../static/images/tabBar.png')
            background-position-y -500px
            transform: scale(0.5)
          & > p
            flex 1
            text-align center
            font-size 40px
          .search
            display flex
            align-items center
            & > img 
              width 30px
              height 30px
              padding-right 10px
            & > i 
              width 80px
              height 80px
              background-image url('../static/images/tabBar.png')
              background-position-y -95px
              transform: scale(0.5)
    .buyContainer
      .buy-content
        background #ccc
        .buy-top
          height 644px
          background-image url('../static/images/bj.png')
          background-color #ccc
          background-size cover
          .txt
            padding 40px 0 0 20px
            .txt_buy
              font-size 45px
              padding-right 10px
              color #fff
              font-family font
            .txt_yan
              color #fff
          .buy-list
            padding 20px 10px 0 10px
            height 480px
            margin-top 20px
            border-radius 20px
            display flex
            flex-flow wrap
            background #fff
            background pink
            .buy-item
              text-align center
              width 25%
              height 140px
              .buy-img
                display inline-block
                width 100%
                height 100%
                & > img
                  width 100px
                  height 100px
              .item_txt
                margin-top 10px
                font-size 28px
                .txt_chao
                  margin-bottom 15px
                  color #000
        .container-water-fall
          background #ccc
          .waterfall
            .cell-item
              .item-body
                .item-desc
                  width 80px
                  height 80px
                  & > img
                    width 100%
                    height 100%


            
            

              
             

</style>