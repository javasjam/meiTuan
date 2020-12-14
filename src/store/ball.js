import Vue from 'vue'
const ball = {
	namespaced:true,
	state:{
		ballList:[{
			show:false
		},{
			show:false
		},{
			show:false
		},{
			show:false
		},{
			show:false
		},{
			show:false
		},{
			show:false
		},{
			show:false
		},{
			show:false
		}],
		runList:[]
	},
	mutations:{
		show(state,el){
			state.ballList.forEach(item=>{
				if(!item.show){
					Vue.set(item,'show',true);
					Vue.set(item,'el',el);
					state.runList.push(item);
				}
			})
		},
		removeBall(state){
			let ball = state.runList.shift();
			if(ball){
				Vue.set(ball,'show',false);
			}
		}
	}

}
export default ball;