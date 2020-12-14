<template>
	<div class="scrollBox">
		<div>
			<sellerHeader :seller='seller'></sellerHeader>
			<!-- sticky -->
			<div class="seller-tabs">
				<van-tabs v-model="active" animated  color='#ffda41' line-width='1.2rem' background='#fbfbfb'>
				  <van-tab title="点餐">
				  	<order></order>
				  </van-tab>
				  <van-tab title="评价">
				  	<comment></comment>
				  </van-tab>
				  <van-tab title="商家">
				  	<seller :seller='seller'></seller>
				  </van-tab>
				</van-tabs>
			</div>
		</div>
		<cart v-show='active==0' :seller='seller'></cart>
	</div>
</template>

<script>
	import {getAPI} from '@/api/api'
	import sellerHeader from './seller-header'
	import order from './order'
	import BScroll from 'better-scroll'
	import cart from './cart'
	import comment from './../comment'
	import seller from './../seller'
	// import BScroll from 'better-scroll'
	export default{
		data(){
			return{
				seller:[],
				active:0,
				scrollBox:null
			}
		},
		components:{
			sellerHeader,
			order,
			cart,
			comment,
			seller
		},
		methods:{
			getStore(){
				getAPI('/get_store_id',{
					id: this.$route.query.id
				}).then(res=>{
					this.seller = res.data;
					console.log(res.data)
				})
			}
		},
		mounted(){
			// 页面刚挂载且未完成渲染获取不到节点，保证渲染之后执行
				setTimeout(()=>{
					this.scrollBox = new BScroll('.scrollBox',{
						bounce:false,
						click:true
					});
				},500);
			
		},
		created(){
			this.getStore();
		}
	}
</script>
<style>
	.van-tab__pane{
		font-size: 0.32rem;
	}
	.van-tabs--line .van-tabs__wrap{
		height: 0.76rem;
		margin-bottom: 0.01rem;
	}
	.scrollBox{
		height: 100vh;
		overflow: hidden;
	}
	
</style>