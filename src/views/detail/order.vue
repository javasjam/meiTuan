<template>
	<div>
		<div class="order-box">
			<div class="order-menu-box" ref='menuList'>
				<ul>
					<li class="order-list" v-for='(item,index) in produtcList' :key='index' @click='chageMenu(index)'
					:class="{'active':currentIndex == index}">{{item.name}}</li>
				</ul>
			</div>
			<div class="order-prod-box" ref='prodList'>
				<ul>
					<li class="order-cate-list" v-for='(item,typeIndex) in produtcList' :key='typeIndex'>
						<div class="order-cate-title">{{item.name}}</div>
						<ul>
							<li class="order-prod-list" v-for='(prod,index) in item.content' :key='prod.id'>
								<div class="order-prod-img-box">
									<img :src="prod.img" alt="">
								</div>
								<div class="order-prod-info">
									<div class="order-prod-name">{{prod.name}}</div>
									<div class="order-prod-sale">月销{{prod.num}} 赞{{prod.up}}</div>
									<div class="order-prod-price">￥{{prod.price}}</div>
								</div>
								<div class="addCart-container">
									<addCart :type='typeIndex' :index='index'></addCart>
								</div>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
		
	</div>
</template>

<script>
	import {mapState} from 'vuex'
	import BScroll from 'better-scroll'
	import addCart from './../../components/appCart'
	export default{
		data(){
			return{
				menuScroll:null,
				prodScroll:null,
				currentIndex:0,
				prodY:[],
				menuList:[],
				scrollY:0
			}
		},
		components:{
			addCart
		},
		methods:{
			initScroll(){
				this.menuScroll = new BScroll('.order-menu-box',{
					bounce:false,
					click:false
				});
				this.prodScroll = new BScroll('.order-prod-box',{
					bounce:false,
					click:false,
					probeType:3
				});
				this.prodScroll.on("scroll",e=>{
					// 获取商品滚动垂直Y轴高度
					this.scrollY = Math.abs(Math.round(e.y));
				});
				this.getProdY();
				this.menuList = this.$refs.menuList.getElementsByClassName('order-list');
			},
			getProdY(){
				let prodList = this.$refs.prodList.getElementsByClassName('order-cate-list');
				let y=-1;
				for (let i = 0; i < prodList.length; i++) {
					// 获取每个LI的垂直高度
					// 垂直高度=上一个li垂直高度+自身li高度
					if(i==0){
						this.prodY.push(y);
					}else{
						let prevEle = prodList[i-1];
						y += prevEle.offsetHeight;
						this.prodY.push(y);
					}
				}
			},
			chageMenu(index){
				let prodList = this.$refs.prodList.getElementsByClassName('order-cate-list');
				this.currentIndex=index;
				let el = prodList[index];
				this.prodScroll.scrollToElement(el,10);
			}
		},
		computed:{
			...mapState('produtc',['produtcList'])
		},
		created(){
			this.$store.dispatch('produtc/getProList',this.$route.query.id).then(()=>{
				// 初始化betterScroll
				this.$nextTick(()=>{
					setTimeout(()=>{
						this.initScroll();
					},500);
				})
			})
		},
		watch:{
			scrollY(val){
				for (let i = 0; i < this.prodY.length; i++) {
					let prod1 = this.prodY[i];
					let prod2 = this.prodY[i+1];
					if(val>=prod1&&val<prod2){
						let el = this.menuList[i];
						this.menuScroll.scrollToElement(el,300);
						this.currentIndex=i;
						break;
					}
				}
			}
		}
	}
</script>

<style lang='scss'>
	.order-box{
		display: flex;
		height: calc(100vh - 0.7rem);
	}
	.order-menu-box{
		width: 1.6rem;
		flex: 0 0 1.6rem;
		background: #eee;
		height: calc(100vh - 1.7rem);
		overflow: hidden;
		/*height: 50px;*/
	}
	.order-prod-box{
		flex: 1;
		min-width: 0;
		background: #fff;
		height: calc(100vh - 1.7rem);
		overflow: hidden;
	}
	.order-list{
		color: #2c3d50;
		font-size: 0.24rem;
		padding: 0.18rem 0.24rem 0.44rem;
		line-height: 0.36rem;
	}
	.order-list.active{
		color: red;
	}
	.order-cate-list{
		padding: 0 0.2rem;
	}
	.order-cate-title{
		height: 0.72rem;
		line-height: 0.72rem;
		font-size: 0.28rem;
		font-weight: 600;
	}
	.order-prod-list{
		display: flex;
		padding-bottom: 0.4rem;
		position: relative;
	}
	/*.order-prod-list:last-child{
		padding-bottom: 0;
	}*/
	.order-prod-img-box{
		width: 1.4rem;
		flex: 0 0 1.4rem;
		margin-right: 0.15rem;
	}
	.order-prod-img-box img{
		width: 100%;
	}
	.order-prod-info{
		flex: 1;
		min-width: 0;
	}
	.order-prod-name{
		font-size: 0.28rem;
		color: #333;
		font-weight: bold;
		line-height: 0.45rem;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.order-prod-sale{
		font-size: 0.22rem;
		color: #666;
	}
	.order-prod-price{
		color: #fb4e44;
	}
	.addCart-container{
		position: absolute;
		right: 0;
		bottom: 0.4rem;
	}
</style>