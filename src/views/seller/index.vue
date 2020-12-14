<template>
	<div class="seller-box">
		<ul class="list-box">
			<li class="list">
				<span class="iconfont icon-dingwei"></span>
				<span>{{seller.address}}</span>
			</li>
		</ul>
		<ul class="list-box">
			<li class="list">
				<span class="iconfont icon-peisong1"></span>
				<span>配送服务：{{seller.server}}</span>
			</li>
			<li class="list">
				<span class="iconfont icon-shijian"></span>
				<span>配送时间：{{seller.minute}}分钟</span>
			</li>
		</ul>
		<ul class="list-box">
			<li class="list">
				<span class="iconfont icon-dingwei"></span>
				<span>{{seller.address}}</span>
			</li>
		</ul>
		<ul class="list-box">
			<li class="list">
				<span class="iconfont icon-manjianyouhui"></span>
				<span>{{seller.full}}</span>
			</li>
			<li class="list">
				<span class="iconfont icon-youhuijuan"></span>
				<span>{{seller.sales}}</span>
			</li>
		</ul>
	</div>
</template>
<script>
	export default{
		props:['seller']
	}
</script>
<style lang='scss'>
@import '@/assets/css/mixin.scss';
	.seller-box{
		padding: 0 0.3rem;
	}
	.seller-box .list-box{
		@include border-bottom-1px(#ebedf0);
		padding-top: 0.36rem;
	}
	.seller-box .list{
		padding-bottom: 0.36rem;
		color: #333;
		font-size: 0.28rem;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.seller-box .iconfont{
		margin-right: 0.2rem;
	}
	.seller-box .list-box:last-child .iconfont{
		color: #fb4d41;
	}
</style>