import axios from 'axios'
export default ({
	base_url = '',
	header = {},
	success,
	error
}) => {
	/*
	 *生产环境的api地址。
	 *vue.config.js 同时设置代理地址
	 module.exports = {
		devServer: {
			proxy: 'https://im.mkinit.com/wp-json/wp/v2/'
		}
	 }
	 */
	if (process.env.NODE_ENV !== 'development') {
		axios.defaults.baseURL = base_url
	}else{
		axios.defaults.baseURL = '/'
	}

	//请求拦截
	axios.interceptors.request.use(request => {
		request.headers = {
			...header,
			...request.headers
		}
		return request
	}, error => {
		return new Promise.reject(error)
	})

	//响应拦截
	axios.interceptors.response.use(res => {
		//成功，HTTP状态：200
		return new Promise((resolve, reject) => {
			success(resolve,reject,res)
		})

	}, err => {
		//失败，HTTP状态：200以外的
		error(err)
		return Promise.reject(err)
	})


	return axios
}