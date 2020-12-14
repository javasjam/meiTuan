import {getAPI} from '@/api/api'
import Vue from 'vue'
const produtc ={
  namespaced:true,
  state: {
	 produtcList:[] 	
  },
  mutations: {
  	// 给actions调用并获取返回值且储存值到state
  	savaProdList(state,arr){
  		state.produtcList = [...arr];
  	},
  	addCatr(state,{type,index}){
  		let prod = state.produtcList[type].content[index];
  		if(prod.count){
  			Vue.set(prod,'count',prod.count+1);
  		}else{
  			Vue.set(prod,'count',1);
  		}
  	},
  	reduceCatr(state,{type,index}){
  		let prod = state.produtcList[type].content[index];
  		if(prod.count){
  			Vue.set(prod,'count',prod.count-1);
  		}
  	},
  	clearCart(state){
  		state.produtcList.forEach(item=>{
  			item.content.forEach(obj=>{
  				if (obj.count) {
  					obj.count = 0;
  				}
  			})
  		})
  	}
  },
  getters: {
  	// 查找被添加的商品
    selectList(state){
    	let result=[];
    	 state.produtcList.forEach(item=>{
    		item.content.forEach(obj=>{
    			if(obj.count){
    			 	result.push(obj);
    			}
    		})
    	});
    	return result;
    },
    totalPrice(state,getter){
    	return getter.selectList.reduce((price,obj)=>{
    		return price + obj.count*obj.price;
    	},0);
    },
    total(state,getter){
    	return getter.selectList.reduce((num,obj)=>{
    		return num + obj.count;
    	},0)
    }
  },
  actions: {
  	// 异步调用savaProdList并返回值给mutations
    getProList({commit},id){
    	return new Promise(resolve=>{
    		getAPI('/get_nav',{id}).then(res=>{
    		let list = res.data.goods;
    		list.forEach((item,type)=>{
    			item.content.forEach((obj,index)=>{
    				obj.type = type;
    				obj.index = index;
    			})
    				
    		})
    		commit('savaProdList',list);
    		resolve();
    	})
      })
    	
    }
  },
}

export default produtc;