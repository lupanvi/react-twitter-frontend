import axios from 'axios'
import { ErrorAction } from 'store/actions/ErrorAction'
import { removeUserAction } from 'store/actions/AuthAction'
import store from 'store/store'

const $http = axios.create({
	baseURL: process.env.REACT_APP_URL_BACKEND,
	withCredentials: true,
	headers: {'X-Requested-With': 'XMLHttpRequest'}
})

$http.interceptors.response.use(
	response => response,
	error => {				
		if (error.response.status === 422) {			
			store.dispatch(ErrorAction(error.response.data.errors))				
		} else if (error.response.status === 401 || error.response.status === 403) {									
			store.dispatch(removeUserAction())
		} else {
			return Promise.reject(error.response.data)						
		}	
		return Promise.reject(false)			
	}
);

export default $http;