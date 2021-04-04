import axios from 'axios'
const $http = axios.create({
	baseURL: process.env.REACT_APP_URL_BACKEND,
	withCredentials: true,
	headers: {'X-Requested-With': 'XMLHttpRequest'}
})

export default $http;