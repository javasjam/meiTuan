<template>
	<div>
		<div class="cart-container">
			<div class="cart-box" @click='isShow = !isShow'>
				<div class="cart-icon" :class='{active:total}'>
					<span class="iconfont icon-gouwuche"></span>
					<span class="cart-num" v-show='total'>{{total}}</span>
				</div>
				<div class="cart-price" :class='{active:total}'>
					<div class="price" v-show='total'>￥{{totalPrice}}</div>
					<div class="deliver">另需配送费￥{{seller.fee}}</div>
				</div>
				<div class="cart-buy" :class='{active:totalPrice>=seller.price}'>{{buyDesc}}</div>
			</div>
			<div class="ball-box">
				<div v-for='(item,index) in ballList' :key='index'>
					<transition @before-enter='beforeEnter' @enter='enter' @after-enter='afterEnter'>
						<div class="ball" v-show='item.show'>
							<div class="inner"></div>
						</div>
					</transition>
				</div>
			</div>
			<div class="cart-list-box" v-show='isShow && total'>
				<div class="cart-list-title" @click='clearCart'><span>清空购物车</span></div>
				<ul class="list-box">
					<li class="list" v-for='prop in selectList' :key='selectList.id'>
						<span class="list-name">{{prop.name}}</span>
						<span class="list-price">￥{{prop.price}}</span>
						<addCart :type='prop.type' :index='prop.index'></addCart>
					</li>
				</ul>
			</div>
		</div>
		<div class="mask" v-show='isShow && total' @click='isShow = !isShow'></div>
	</div>
</template>
<script>
	import  {mapGetters,mapState} from 'vuex'
	import  addCart from '@/components/appCart'
	export default{
		data(){
			return{
				isShow:false
			}
		},
		computed:{
			...mapGetters('produtc',['total','totalPrice','selectList']),
			...mapState('ball',['ballList']),
			buyDesc(){
				if(this.totalPrice == 0){
					return `￥${this.seller.price}元起送`;
				}else if(this.totalPrice < this.seller.price){
					return `还差￥${this.seller.price - this.totalPrice}元起送`;
				}else{
					return '去结算';
				}
			}
		},
		components:{
			addCart
		},
		props:['seller'],
		methods:{
			beforeEnter(e){
				this.ballList.forEach(item=>{
					if(item.show){
						let obj = item.el.getBoundingClientRect();
						let y = window.innerHeight - obj.top - 23;
						let x = obj.left - 30;
						e.display='';
						e.style.transform = `translate3d(0,${-y}px,0)`;
						let inner = e.getElementsByClassName('inner')[0];
						inner.style.transform = `translate3d(${x}px,0,0)`;
					}
				})
			},
			enter(e,done){
				e.offsetWidth;
				this.$nextTick(()=>{
					e.style.transform = `translate3d(0,0,0)`;
					let inner = e.getElementsByClassName('inner')[0];
					inner.style.transform = `translate3d(0,0,0)`;
					e.addEventListener('transitionend',done);
				})
			},
			afterEnter(e){
				e.style.display='none';
				this.$store.commit('ball/removeBall');
			},
			clearCart(){
				this.$store.commit('produtc/clearCart');
				this.isShow = false;
			}
		}
	}
</script>
<style>
	.cart-container{
		position: fixed;
		bottom: 0;
		height: 1rem;
		background: #3b3b3c;
		width: 100%;
		color: #fff;
		z-index: 99;
	}
	.cart-box{
		display: flex;
		position: relative;
	}
	/*未选中状态*/
	.cart-icon{
		width: 1rem;
		height: 1rem;
		border-radius: 50%;
		position: absolute;
		left: 0.2rem;
		top: -0.2rem;
		background: #656565;
		text-align: center;
		line-height: 0.8rem;
	}
	.cart-num{
		position: absolute;
		right: 0;
		top: 0;
		width: 0.35rem;
		height: 0.35rem;
		text-align: center;
		line-height: 0.35rem;
		background: #fb4e44;
		color: #fff;
		border-radius: 50%;
		font-size: 0.24rem;
	}
	.cart-icon .icon-gouwuche{
		color: #c4c4c4;
		font-size: 0.48rem;
	}
	.cart-price{
		padding-left: 1.4rem;
		flex: 1;
		color: #999;
		font-size: 0.28rem;
	}
	.cart-price .price{
		display: none;
	}
	.cart-price .deliver{
		line-height: 1rem;
	}
	.cart-buy{
		font-size: 0.28rem;
		color: #999;
		font-weight: bold;
		width: 2.16rem;
		text-align: center;
		line-height: 1rem;
		height: 1rem;
	}
	/*选中状态*/
	.cart-icon.active{
		background: #f8c74e;
	}
	.cart-icon.active .icon-gouwuche{
		color: #333;
	}
	.cart-price.active .price{
		display: block;
		font-size: 0.48rem;
		color: #fff;
		line-height: 0.68rem;
	}
	.cart-price.active .deliver{
		line-height: 0.21rem;
		font-size: 0.24rem;
	}
	.cart-buy.active{
		background: #f8c74e;
		color: #333;
		font-size: 0.32rem;
	}
	/*小球样式*/
	.ball{
		position: fixed;
		left: 30px;
		bottom: 23px;
		transition: all 0.3s cubic-bezier(.48,-0.28,.73,.42);

	}
	.ball .inner{
		background: #00a0dc;
		width: 16px;
		height: 16px;
		border-radius: 50%;
		transition: all 0.3s linear;
	}
	/*添加列表*/
	.cart-list-box{
		position: absolute;
		left: 0;
		z-index: -1;
		bottom: 1rem;
		background: #fff;
		border-top: 1px solid #e4e4e4;
		width: 100%;
	}
	.cart-list-title{
		background: #f4f4f4;
		color: #2c3e50;
		padding: 0 10px;
		text-align: right;
		font-size: 0.24rem;
		height: 0.6rem;
		line-height: 0.6rem;
	}
	.cart-list-box .list-box{
		font-size: 12px;
	}
	.cart-list-box .list{
		display: flex;
		border-bottom: 1px solid #e4e4e4;
		padding: 14px;
	}
	.cart-list-box .list-name{
		flex: 1;
		min-width: 0;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		color: #2c3e50;
		font-size: 12px;
	}
	.cart-list-box .list-price{
		color: #fb4e44;
		padding: 0 0.5rem;
		font-size: 12px;
	}
	.mask{
		position: fixed;
		left: 0;
		bottom: 0;
		top:0;
		right: 0;
		z-index: 50;
		background: rgba(7,17,27,0.6);
		backdrop-filter:blur(20px);
	}
</style>