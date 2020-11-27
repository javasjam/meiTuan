<template>
	<div>
		<van-list v-model="loading" :finished="finished" finished-text="没有更多了"  @load="getDate">
			<ul class="list-shop-box">
				<li class="list-shop-list" v-for="(item,index) in shopList" :key="item.id">
					<div class="list-img-box">
						<img :src="item.img" alt="">
					</div>
					<div class="list-info-box">
						<div class="list-shop-title">
							<h3>{{item.name}}</h3>
						</div>
						<div class="list-rate-box">
							<div>
							<span >
									<van-rate v-model='value[index]' style="padding-top: 0.02rem;" allow-half gutter='0.03rem' size='0.2rem' color='#ffd21e' readonly/>
								</span>
								<span class="list-rate" >{{item.score}}分</span>
								<span>月销{{item.num}}</span>
							</div>
							<div>
								<span style="margin-right: 0.1rem;">{{item.minute}}分钟</span>
								<span>{{item.distance}}</span>
							</div>
						</div>
						<div class="distri">
							<span>起送{{item.per_capita}}</span>
							<span>配送{{item.fee}}</span>
							<span>人均{{item.price}}</span>
						</div>
					</div>
				</li>
			</ul>
		</van-list>
	</div>
</template>
<script>
	import {getAPI} from '@/api/api.js'
	export default{
		data(){
			return{
				current:0,
				size:10,
				shopList:[],
				value:[],	
				loading: false,
				finished: false,
				total:0
			}
		},
		methods:{
			getDate(){
				getAPI('/get_store',{
					current:this.current,
					size:this.size
				}).then(res=>{
					// 把评分放到双向绑定中的value并优化成0,0.5,1形式
					for(let i=0;i<res.data.list.length;i++){
						let num = res.data.list[i].score.substring(2,4);
						if(Number(num)>5){
							this.value = this.value.concat(Math.ceil(res.data.list[i].score));
						}else if(Number(num)<5&&Number(num)>0){
							this.value = this.value.concat(Number(parseInt(res.data.list[i].score)+0.5));
						}else{
							this.value= this.value.concat(Number(res.data.list[i].score));
						}
					}
					this.loading = false;
					this.current++;
					this.total = res.data.total;
					this.shopList = this.shopList.concat(res.data.list);
					if(this.shopList.length>=this.total){
						this.finished = true;
					}
				})
			}
		}
		
		// created(){
		// 	this.getDate();
		// }
	}
</script>
<style>
	.list-shop-box{
		padding: 0 0.2rem;
	}
	.list-shop-list{
		margin-top: 0.5rem;
		display: flex;
	}
	.list-img-box{
		width: 1.2rem;
		height: 1.2rem;
	}
	.list-img-box img{
		width: 100%;
	}
	.list-info-box{
		padding: 0 0.3rem;
		font-size: 0.2rem;
		flex: 1;
	}
	.list-shop-title h3{
		font-size: 0.25rem;
		color: #666;
	}
	.list-info-box div{
		font-size: 0.2rem;
	}
	.list-info-box span{
		color: #333;
		font-size: 0.2rem;
	}
	.list-rate{
		margin-right: 0.3rem;
		margin-left: 0.1rem;
	}
	.list-rate-box div{
		float: left;
	}
	.list-rate-box div:nth-child(2){
		float: right;
	}
	.distri{
		clear: both;
	}
	.distri span{
		margin-right: 0.1rem;

	}
	.van-rate__icon{
		width:0.3rem;
	}
	
</style>