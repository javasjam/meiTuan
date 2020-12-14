<template>
	<div class="seller-container">
		<div class="seller-header" @click='$router.push("/")'>
			<span class="iconfont icon-fanhui"></span>
		</div>
		<div class="sellerBox">
			<div class="seller-img-box">
				<img :src="seller.img" alt="">
			</div>
			<div class="seller-info-box">
				<div class="seller-time">{{seller.minute}}分钟 {{seller.distance}}</div>
				<div class="seller-notice">{{seller.notice}}</div>
				<div class="seller-sale">{{seller.full}}</div>
			</div>
		</div>
	</div>
</template>
<script>
export default{
	props:['seller']
}
	
</script>
<style>
	.seller-header{
		height: 1rem;
		line-height: 1rem;
		background: #333;
		padding: 0 0.1rem;
		color: #fff;
		margin-bottom: -1px;
		font-size: 0.5rem;
	}
	.sellerBox{
		padding: 0.1rem 0.2rem 0.2rem;
		background: #333;
		overflow: hidden;
	}
	.seller-img-box{
		width: 1.5rem;
		float: left;
		width: 22%;
	}
	.seller-img-box img{
		width: 100%;
	}
	.seller-info-box{
		color: #ccc;
		float: left;
		width: 78%;
		padding-left: 0.3rem;
	}
	.seller-info-box div{
		font-size: 0.24rem;
		margin-bottom: 0.03rem;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.seller-info-box .seller-notice{
		margin-bottom: 0.15rem;
	}
	
</style>