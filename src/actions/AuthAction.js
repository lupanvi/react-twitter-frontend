import $http from 'plugins/axios'
import {
    LOGIN_USER_START,
    SET_USER,    
    CHECK_USER_START,
	PURGE_AUTH  
} from 'types'

import {setAuth, removeAuth} from 'utils/storage'

export function loginUserAction(credentials){
	return async (dispatch) =>{
		await $http.get('/sanctum/csrf-cookie')
		const {data} = await $http.post("/login", credentials)		
		dispatch(setUser(data))					
		setAuth()
	}
}

export function checkUserAction(){
	return async (dispatch) =>{			
		try{
			const {data} = await $http.get("/api/user")  						
			dispatch(setUser(data.data))				
		}catch(e){
			//console.log(e)
		}		
	}
}

export function logoutUserAction(){
	return async (dispatch) =>{				
		await $http.post('/logout')				
		dispatch(LogoutUser())
		removeAuth()							
	}
}

export function removeUserAction(){
	return  (dispatch) =>{						
		dispatch(LogoutUser())
		removeAuth()							
	}
}

export function registerUserAction(form){
	return async (dispatch) =>{				
		await $http.get('/sanctum/csrf-cookie')		
		await $http.post("/register", form)    																			
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

export const setUser = user => ({
	type: SET_USER,
	payload: user
})

const LogoutUser = () => ({
	type: PURGE_AUTH		
})