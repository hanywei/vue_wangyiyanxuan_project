<template>
	<div class="cateGorysListContainer">
		<!-- 头部区域 -->
		<div class="header">
			<div class="search">
				搜索商品
			</div>
		</div>
		<!-- 内容区 -->
		<div class="contentContainer">
			<div class="leftContainer">
				<div >
					<div  class="navItem" :class="{active:navId === item.id}" v-for="item in getRecommendList" :key = "item.id"
                      @click="changeNav(item.id)"
                    >
                        <span>{{item.name}}</span>
					</div>
				</div>
			</div>
			<div class="rightContainer">
				<div class="rightScrolldiv">
					<div class="proContainer">
						<img class="proImg" src="../static/images/nvsheng.jpg"/>
						<div class="proItem">
							<img src="../static/images/nvsheng.jpg" />
							<div>推荐专区</div> 
						</div>
                        <div class="proItem" >
							<img src="../static/images/nvsheng.jpg" />
							<div>推荐专区</div> 
						</div>
                        <div class="proItem" >
							<img src="../static/images/nvsheng.jpg" />
							<div>推荐专区</div> 
						</div>
                        <div class="proItem" >
							<img src="../static/images/nvsheng.jpg" />
							<div>推荐专区</div> 
						</div>
                        <div class="proItem" >
							<img src="../static/images/nvsheng.jpg" />
							<div>推荐专区</div> 
						</div>
                        <div class="proItem" >
							<img src="../static/images/nvsheng.jpg" />
							<div>推荐专区</div> 
						</div>
                        <div class="proItem" >
							<img src="../static/images/nvsheng.jpg" />
							<div>推荐专区</div> 
						</div>
                        <div class="proItem" >
							<img src="../static/images/nvsheng.jpg" />
							<div>推荐专区</div> 
						</div>
                        <div class="proItem" >
							<img src="../static/images/nvsheng.jpg" />
							<div>推荐专区</div> 
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import {mapActions,mapState} from 'vuex'
import {NAVDATA} from '../store/mutations_type'
	export default {
        name:'Classify',
		data() {
			return {
                // getRecommendList:[],
				navId:0,
			};
		},
	   computed:{
            ...mapState(['getRecommendList']),
        },
        mounted() {
            this[NAVDATA](this.navId)
           
            
        },
        methods:{
            ...mapActions([NAVDATA]),
            changeNav(navId){
                this.navId = navId
            }
        }
	
		
	}
</script>

<style lang="stylus" scoped>
.cateGorysListContainer
	.header
		width 100%
		height 55px
		padding 10px 0
		.search
			width 90%
			height 100%
			margin 0 auto
			background #EEEEEE
			border-radius 10px
			line-height 55px
			text-align center
			font-size 26px
	.contentContainer
		border-top 1px solid #EEEEEE
		height calc(100vh-76px)
		display flex
		.leftContainer
			width 20%
			height 100%
			border-right 1px solid #333333
			box-sizing border-box
			.navItem
				position relative
				box-sizing border-box
				font-size 26px
				text-align center
				height 80px
				line-height 80px
				&.active
					color #ab2b2b
					&:after
						position absolute
						top 15%
						left 2px
						content ''
						width 3px
						height 70%
						background #ab2b2b
		.rightContainer
			width 80%
			height 100%
			.rightScrolldiv
				height 100%
				.proContainer
					display flex
					flex-wrap wrap
					.proImg
						width 520px
						height 190px
						margin 20px auto
					.proItem	
						width 33.33%
						display flex
						flex-direction column
						align-items center
						img
							width 90%
							height 144px
						div
							font-size 24px
					





</style>
