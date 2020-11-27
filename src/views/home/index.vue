<template>
  <div>
    <van-sticky :offset-top="0">
	<div class="header">
		<input type="text" class="search" placeholder="请输入商家或商品名称">
	</div>
	</van-sticky>
    <category> </category>
	<div class="title">附近的商家</div>
	<list></list>
  </div>
</template>
<script>
	import category from './category'
	import list from './list'
	export default{
		components:{
			category,
			list
		}
	}
</script>
<style>
input:-ms-input-placeholder{
	color: #aaa;
}
.header{
	background: #444;
	padding: 0.2rem;
	font-size: 0.5rem;

}
.search{
	width: 100%;
	border-radius: 0.3rem;
	border: none;
	padding: 0.05rem 0.3rem;
	font-size: 0.25rem;
	height: 0.6rem;
	line-height: 0.6rem;
	color: #aaa;
}
.title{
	text-align: center;
	font-size: 0.35rem;
	margin-top: 0.3rem;
	font-weight: 700;
}
.title::after,.title::before{
	content: '';
	background: #666;
	width: 25px;
	height: 1px;
	transform: scaleY(0.5);
	display: inline-block;
	vertical-align: middle;
}
</style>

