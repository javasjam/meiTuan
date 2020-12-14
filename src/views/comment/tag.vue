<template>
	<div class="tag-box">
		<span class="tag-item" v-for='obj in label' :key='obj.id' @click='selerComment(obj.id)'  :class="{'active':commentId == obj.id && commentId}">{{obj.name}}({{obj.count}})</span>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				commentId:''
			}
		},
		props:['label'],
		
		methods:{
			selerComment(id){
				this.commentId = id;
				this.$emit('change',id);
			}
		}
	}
</script>
<style lang='scss'>
@import '@/assets/css/mixin.scss';
	.tag-box{
		padding: 0.3rem 0.38rem 0.1rem;
	}
	.tag-item{
		padding: 0 0.24rem;
		display: inline-block;
		height: 0.52rem;
		line-height: 0.52rem;
		text-align: center;
		font-size: 0.26rem;
		color: #666;
		margin: 0 0.2rem 0.2rem 0;
		@include border-fix(#bbb,0.52rem);
	}
	.tag-item.active{
		@include border-fix(#ffb000,0.52rem);
		color: #ffb000;
		background: #fffbf1;
	}

</style>