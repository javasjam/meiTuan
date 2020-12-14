<template>
  <div class="category">
    <ul class="cate-box">
      <li class="cate-list" v-for='obj in cateList' :key='obj.id'>
        <img class="cate-img" :src="obj.img" alt="">
        <p class="cate-title">{{obj.name}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
	// import axios from 'axios'
	import {getAPI} from '@/api/api.js'
	export default{
		data(){
			return{
				cateList:[]
			}
		},
		created(){
			// axios.get('http://admin.gxxmglzx.com/tender/test/get_type').then(
			// 	res=>{
			// 	if(res.data.errcode == 200){
			// 		this.cateList = res.data.data;
			// 	}else{
			// 		console.log(res.data.errmsg);
			// 	}
			// }).catch(res=>{
			// 	console.log(res);
			// }) 
			getAPI('/get_type').then(res=>{
				this.cateList = res.data;
			})
		}
	}
</script>
<style>
	.cate-box{
		overflow: hidden;
		width: 100%;
	}
	.cate-list{
		width: 20%;
		/*padding: 0.1rem;*/
		padding-top: 0.3rem;
		padding-bottom: 0;
		text-align: center;
		float: left;
	}
	.cate-list img{
		width: 70%;
	}
	.cate-list p{
		font-size: 0.2rem;
	}
</style>