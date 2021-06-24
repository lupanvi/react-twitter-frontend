import {   
    SET_ERROR    
} from 'types'

const initialState = {
	errors: null
}

export default function (state = initialState, action){
	switch(action.type){
		case SET_ERROR:			
			return {
				errors: action.payload
			}					
		default:
			return state
    }
}     
