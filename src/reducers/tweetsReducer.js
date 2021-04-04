import {
    LOADING_TWEETS_START,
    SET_TWEETS,
	SET_TWEETS_ERROR,
	ADD_TWEET,
	ADD_TWEET_SUCCESS,
	ADD_TWEET_ERROR
} from 'types'

const initialState = {
	tweets: [],
	error: null,
	loading: false	
}

export default function (state = initialState, action){
	switch(action.type){		
		case LOADING_TWEETS_START:
		case ADD_TWEET:	
			return {
				...state,
				loading: action.payload
			}
        case SET_TWEETS:
            return {
                ...state,
                loading: false,                
                tweets: action.payload
            }
		case ADD_TWEET_SUCCESS:
			return {
				...state,
				loading: false,				
				tweets: [action.payload, ...state.tweets]
			}
		case ADD_TWEET_ERROR:
		case SET_TWEETS_ERROR:
			return {
				...state,
				loading: false,				
				error: action.payload
			}					
		default:
			return state;
	}
}