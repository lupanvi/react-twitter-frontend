import {
    LOGIN_USER_START,
    SET_USER,
    SET_USER_ERROR,
    CHECK_USER_START,
	LOGOUT_USER    
} from 'types'
import {isLoggedIn, setAuth, removeAuth} from 'utils/storage'

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
			setAuth()			
            return {
                ...state,
                loading: false, 
                isAuthenticated: true,               
                user: action.payload
            }
		case LOGOUT_USER:
			removeAuth()
			return {
				...state,
				loading: false, 
				isAuthenticated: false,               
				user: {}
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