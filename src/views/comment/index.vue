<template>
	<div class="commentBox" ref='commentBox'>
		<div>
			<commenScope :delivery='commentData.delivery' :flavor='commentData.flavor' :packing='commentData.packing' :score='commentData.score'></commenScope>
			<div class="tag-container"></div>
			<commenTag :label='commentData.label' @change='change'></commenTag>
			<commentList :rate='commentData.rate'></commentList>
		</div>
	</div>
</template>
<script>
	import commenTag from './tag'
	import commentList from './list'
	import commenScope from './scope'
	import {getAPI} from '@/api/api'
	import BScroll from 'better-scroll'
	export default{
		data(){
			return{
				type:1,
				commentData:{},
				commentScroll:null
			}
		},
		components:{
			commenTag,
			commentList,
			commenScope
		},
		methods:{
			getData(){
				return new Promise(resove=>{
					getAPI('/get_info',{
						id:this.$route.query.id,
						type:this.type
					}).then(res=>{
						this.commentData = res.data;
						resove();
					})
				})
			},
			initialization(){
				this.getData().then(()=>{
				setTimeout(()=>{
					this.commentScroll = new BScroll(this.$refs.commentBox,{
						bounce:false,
						click:false
					});
				},500);
			  });
			},
			change(id){
				this.type = id;
				this.initialization();
			},
		},
		created(){
			this.initialization();
		}
	}
</script>
<style>
	.tag-container{
		border-top: 0.2rem solid #f6f6f6;
	}
	.commentBox{
		height: calc(100vh - 1rem);
	}
	
</style>