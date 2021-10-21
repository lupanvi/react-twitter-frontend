import {
    LOADING_TWEET_REPLIES_START,
    SET_TWEET_REPLIES,
	SET_TWEET_REPLIES_ERROR,
	ADD_TWEET_REPLY,
	ADD_TWEET_REPLY_SUCCESS,
	ADD_TWEET_REPLY_ERROR
} from 'types'

const initialState = {	
	tweet:{
		id:'',
		content:'',
		image_path:'',
		created_at:'',
		user:{},
		parent_id:''
	},			
	replies: {
		data:[]
	},
	error: null,
	loading: false	
}

export default function (state = initialState, action){
	switch(action.type){		
		case LOADING_TWEET_REPLIES_START:
		case ADD_TWEET_REPLY:	
			return {
				...state,
				loading: action.payload
			}
        case SET_TWEET_REPLIES:
            return {
                ...state,
                loading: false,                
                tweet: action.payload.tweet,
				replies: action.payload.replies
            }
		case ADD_TWEET_REPLY_SUCCESS:
			return {
				...state,				
				replies:{
					...state.replies,
					data: [
						action.payload,...state.replies.data
					]
				},
				loading: false				
			}
		case ADD_TWEET_REPLY_ERROR:
		case SET_TWEET_REPLIES_ERROR:
			return {
				...state,
				loading: false,				
				error: action.payload
			}					
		default:
			return state;
	}
}