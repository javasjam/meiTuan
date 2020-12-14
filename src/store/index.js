import Vue from 'vue'
import Vuex from 'vuex'
import produtc from './produtc'
import ball from './ball'

Vue.use(Vuex)

export default new Vuex.Store({
  // state: {
  // 	count:1
  // },
  // mutations: {
  // 	addMutation(state,num){
  // 		state.count+=num;
  // 	}
  // },
  // getters: {
  //   sum(state){
  //     return state.count*2+100;
  //   }
  // },
  // actions: {
  //   addAction({commit}){
  //     setTimeout(()=>{
  //       commit('addMutation',100);
  //     },1000);
  //   }
  // },
  modules: {
    produtc,
    ball
  }
})
