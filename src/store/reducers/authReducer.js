import {
    LOGIN_USER_START,
    SET_USER,    
    CHECK_USER_START,
	PURGE_AUTH    
} from 'types'
import { isLoggedIn } from 'utils/storage'

const initialState = {
	user: {},
    isAuthenticated: !!isLoggedIn(),	
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
            return {
                ...state,
                loading: false, 
                isAuthenticated: Boolean(action.payload),               
                user: action.payload
            }
		case PURGE_AUTH:			
			return {
				...state,
				loading: false, 
				isAuthenticated: false,               
				user: {}
			}										
		default:
			return state
	}
}