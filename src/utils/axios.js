import axios from 'axios';

axios.interceptors.request.use(config=> {
	config.baseURL = '/api/';
	config.withCredentials = true; // 允许携带token ,这个是解决跨域产生的相关问题
	config.timeout = 6000;
	let token = localStorage.getItem('access_token');
	if (token) {
		config.headers = {
			'access-token': token, // token放在那里
			'Content-Type': 'application/x-www-form-urlencoded'
		};
	}  
	return config;
}, err=> {
	// Message.error({message: '请求超时!'});
	return Promise.resolve(err);
});


axios.interceptors.response.use(res=> {
	if (res.status && res.status === 200 && res.data.code === '00000') {
		// Message.error({message: data.data.msg});
		return;
	}
	return res;
}, err=> {
	// if (err.response.status == 504||err.response.status == 404) {
	// 	Message.error({message: '服务器被吃了⊙﹏⊙∥'});
	// } else if (err.response.status == 403) {
	// 	Message.error({message: '权限不足,请联系管理员!'});
	// }else {
	// 	Message.error({message: '未知错误!'});
	// }
	return Promise.resolve(err);
});

export default axios;