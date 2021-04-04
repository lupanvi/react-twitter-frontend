import $http from 'plugins/axios'
import {
    LOGIN_USER_START,
    SET_USER,
    SET_USER_ERROR,
    CHECK_USER_START  
} from 'types'

export function loginUserAction(credentials){
	return async (dispatch) =>{
		dispatch(loginUserStart())
		try{
            await $http.get('/sanctum/csrf-cookie')
    		const {data} = await $http.post("/login", credentials) 			
			dispatch(setUser(data))		
		}catch(error){
			dispatch(setUserError(error))
		}
	}
}

export function checkUserAction(credentials){
	return async (dispatch) =>{
		dispatch(checkUserStart())
		try{            
    		const {data} = await $http.get("/api/user", credentials)  			
			dispatch(setUser(data))		
		}catch(error){
			dispatch(setUserError(error))
		}
	}
}

export function logoutUserAction(){
	return async (dispatch) =>{		
		try{
			await $http.post('/api/logout')						
			dispatch(setUser({}))		
		}catch(error){
			dispatch(setUserError(error))
		}
	}
}

const checkUserStart = user => ({
	type: CHECK_USER_START,
	payload: true
})

const loginUserStart = user => ({
	type: LOGIN_USER_START,
	payload: true
})

const setUser = user => ({
	type: SET_USER,
	payload: user
})

const setUserError = error => ({
	type: SET_USER_ERROR,
	payload: error
})