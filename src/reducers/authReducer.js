import {
    LOGIN_USER_START,
    SET_USER,
    SET_USER_ERROR,
    CHECK_USER_START    
} from 'types'
import {isLoggedIn} from 'utils/storage'

const initialState = {
	user: {},
    isAuthenticated: !!isLoggedIn(),
	error: null,
	loading: false	
}

export default function (state = initialState, action){
	switch(action.type){		
		case LOGIN_USER_START:		
        case CHECK_USER_START:		
			return {
				...state,
				loading: action.payload
			}
        case SET_USER:
			localStorage.setItem('authenticated', 'true')
            return {
                ...state,
                loading: false, 
                isAuthenticated: true,               
                user: action.payload
            }				
		case SET_USER_ERROR:
			return {
				...state,
				loading: false,				
				error: action.payload
			}					
		default:
			return state
	}
}