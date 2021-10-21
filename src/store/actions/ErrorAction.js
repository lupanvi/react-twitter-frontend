import {   
    SET_ERROR    
} from 'types'

export function ErrorAction(error){
	return async (dispatch) =>{        
		await dispatch(setError(error))		
	}
}

const setError = error => ({
	type: SET_ERROR,
	payload: error
})