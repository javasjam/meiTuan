import axios from 'axios'
const IP = 'http://admin.gxxmglzx.com/tender/test';
export default function ({url,data={}}) {
	return new Promise(resolve=>{
		axios.get(IP+url,{
				params: data
			}).then(res=>{
				if(res.data.errcode == 200){
					resolve(res.data);
				}else{
					console.log(res.errmsg);
				}
		}).catch(res=>{
			console.log(res);
		})
	})
	
}
