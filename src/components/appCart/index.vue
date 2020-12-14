<template>
	<div class="appCart-container">
		<span class="iconfont icon-jianhao" v-if='produtc.count' @click='reduceCatr()'></span>
		<span class="appCart-num" v-if='produtc.count'>{{produtc.count}}</span>
		<span class="iconfont icon-jiahao" @click='addCatr($event)'></span>
	</div>
</template>
<script>
	export default{
		props:['type','index'],
		computed:{
			produtc(){
				return this.$store.state.produtc.produtcList[this.type].content[this.index];
			}
		},
		methods:{
			addCatr(e){
				this.$store.commit('produtc/addCatr',{type:this.type,index:this.index}),
				this.$store.commit('ball/show',e.target);
			},
			reduceCatr(){
				this.$store.commit('produtc/reduceCatr',{type:this.type,index:this.index})
			}
		}
	}
</script>
<style>
	.appCart-num{
		font-size: 0.28rem;
		color: #666;
	}
	.appCart-container span.iconfont{
		font-size: 0.38rem;
		padding: 0.18rem;
		vertical-align: middle;
	}
	.appCart-container .icon-jianhao{
		color: #e2e3e5;
	}
	.appCart-container .icon-jiahao{
		color: #ffc134;
		margin-right: -0.18rem
	}
</style>