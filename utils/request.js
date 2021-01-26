import Vue from 'vue'
import axios from 'axios'

// create an axios instance
const service = axios.create({
	// 192.168.1.:2887
	// http://yuegonghui.gzbigbang.com/api
	baseURL: 'http://yuegonghui.gzbigbang.com/api', // url = base url + request url
	withCredentials: true, // send cookies when cross-domain requests 注意：withCredentials和后端配置的cross跨域不可同时使用
	timeout: 6000, // request timeout
	crossDomain: true
})

// request拦截器,在请求之前做一些处理
service.interceptors.request.use(
    config => {
        // if (store.state.token) {
        //     // 给请求头添加user-token
        //     config.headers["user-token"] = store.state.token;
        // ｝
        return config;
    },
    error => {
        console.log(error); // for debug
        return Promise.reject(error);
    }
); 

//配置成功后的拦截器
service.interceptors.response.use(res => {
   return res.data
}, error => {
	if (error.response.status) {
		switch (error.response.status) {
			case 401:
				break;
			default:
				break;
		}
	}
    return Promise.reject(error)
})

export default service;