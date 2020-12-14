<template>
	<div class="comment-list-box">
		<ul class="comment-list-content">
			<li class="comment-list" v-for='obj in rate' :key='obj.id'>
				<div class="comment-list-img-box">
					<img :src="obj.portrait" alt="">
				</div>
				<div class="comment-list-info-box">
					<div>
						<span class="comment-list-info-name">{{obj.name}}</span>
						<span class="comment-list-info-date">{{obj.time}}</span>
					</div>
					<div class="comment-list-info-time">{{obj.duration}}</div>
					<div class="comment-list-desc">{{obj.content}}</div>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
import BScroll from 'better-scroll'
	export default{
		props:['rate'],
	}
</script>
<style lang="scss">
@import '@/assets/css/mixin.scss';
	.comment-list-box{
		@include border-top-1px(#e4e4e4);
		// overflow: hidden;
		// height: calc(100vh - 6rem);
	}
	.comment-list-content{
		padding: 0.3rem;
		padding-bottom: 0.2rem;
	}
	.comment-list{
		display: flex;
	}
	.comment-list-img-box{
		flex: 0 0 0.8rem;
		width: 0.8rem;
		height: 0.8rem;
		margin-right: 0.2rem;
	}
	.comment-list-img-box img{
		width: 100%;
		border-radius: 50%;
	}
	.comment-list-info-box{
		flex: 1;
		min-width: 0;
	}
	.comment-list-info-name{
		color: #2f2f2f;
		font-size: 0.32rem;
	}
	.comment-list-info-date{
		color: #898989;
		font-size: 0.24rem;
		float: right;
	}
	.comment-list-info-time{
		color: #666;
		margin-top: 0.05rem;
		font-size: 0.24rem;
	}
	.comment-list-desc{
		width: 100%;
		padding: 0.3rem 0;
		line-height: 0.4rem;
		font-size: 0.28rem;
		color: #2f2f2f;
		word-wrap:break-word;
		word-break:normal; 
	}
</style>