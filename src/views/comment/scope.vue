<template>
	<div class="score-box">
	<!-- 商家评分 -->
		<div class="seller-score">
			<div class="seller-num">{{score}}</div>
			<div class="seller-desc">商家评分</div>
		</div>
		<!-- 口味与包装评分 -->
		<div class="pack-score">
			<div class="item">
				<span>口味</span>
				<span class="van">
					<van-rate v-model='index' style="padding-top: 0.02rem;" allow-half gutter='0.01rem' size='0.2rem' color='#ffd21e' readonly/>
				</span>
				<span>{{flavor}}</span>
			</div>
			<div class="item">
				<span>包装</span>
				<span class="van">
					<van-rate v-model='index' style="padding-top: 0.02rem;" allow-half gutter='0.01rem' size='0.2rem' color='#ffd21e' readonly/>
				</span>
				<span>{{packing}}</span>
			</div>
		</div>
		<!-- 配送评分 -->
		<div class="deliver-score">
			<div class="deliver-num">{{delivery}}</div>
			<div class="deliver-desc">配送评分</div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				index:5
			}
		},
		props:['packing','flavor','delivery','score'],
		methods:{
			vanScore(){
				let score = this.score.substring(2,4);
				if(Number(score)>5){
					this.index = Math.ceil(this.score);
				}else if(Number(score)<=5&&Number(score)>0){
					this.index = Number(parseInt(this.score)+0.5);
				}else{
					this.index = parseInt(this.score);
				}
			}
		},
		mounted(){
			setTimeout(()=>{
				this.vanScore();
			},500);
		}

	}
</script>
<style>
	.score-box{
		display: flex;
		background: #fff;
		padding: 0.3rem;
	}
	.seller-score,.deliver-score{
		flex: 0 0 1.86rem;
		width: 1.86rem;
		height: 1.1rem;
		text-align: center;
	}
	.deliver-score{
		border-left: 1px solid #ccc;
	}
	.pack-score{
		flex: 1;
		color: #666;
		font-size: 0.26rem;
	}
	.pack-score .item{
		margin: 0.06rem 0 0.2rem;
	}
	.pack-score .item .van{
		margin: 0 0.2rem;
	}
	.seller-num,.deliver-num{
		font-size: 0.56rem;
		height: 0.6rem;
		line-height: 0.6rem;
		font-weight: bold;
	}
	.deliver-num{
		color: #999;
	}
	.seller-num{
		color: #ffb000;
	}
	.seller-desc,.deliver-desc{
		font-size: 0.28rem;
	}
</style>