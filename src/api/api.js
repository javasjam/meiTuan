import request from '@/utils/request'
export function getAPI(url,data){
	return request({
		url:url,
		data
	})
}
