import $http from 'plugins/axios'
import {
    LOGIN_USER_START,
    SET_USER,
    SET_USER_ERROR,
    CHECK_USER_START,
	LOGOUT_USER  
} from 'types'
import handleErrorResponse from 'utils/HandleErrorResponse'

export function loginUserAction(credentials){
	return async (dispatch) =>{
		dispatch(loginUserStart())
		try{
            await $http.get('/sanctum/csrf-cookie')
    		const {data} = await $http.post("/login", credentials) 			
			dispatch(setUser(data))		
		}catch(e){
			dispatch(setUserError(e))
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
			console.log(e);
			dispatch(setUserError(e))
		}
	}
}

export function logoutUserAction(){
	return async (dispatch) =>{		
		try{			
			await $http.post('/logout')				
			dispatch(LogoutUser())					
		}catch(e){			
			dispatch(setUserError(e))
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

const LogoutUser = () => ({
	type: LOGOUT_USER		
})

const setUserError = error => ({
	type: SET_USER_ERROR,
	payload: error
})