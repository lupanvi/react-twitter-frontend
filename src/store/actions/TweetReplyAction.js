import $http from 'plugins/axios'
import {
    LOADING_TWEET_REPLIES_START,
    SET_TWEET_REPLIES,
	SET_TWEET_REPLIES_ERROR,
	ADD_TWEET_REPLY,
	ADD_TWEET_REPLY_SUCCESS,
	ADD_TWEET_REPLY_ERROR
} from 'types'

export function getTweetRepliesAction(tweetId){
	return async (dispatch) =>{
		dispatch(fetchTweetRepliesStart())
		try{
			const {data} = await $http.get(`/api/tweet/${tweetId}/replies`)									
			dispatch(setTweetReplies(data))		
		}catch(e){
			dispatch(setTweetRepliesError(e))
		}
	}
}

const fetchTweetRepliesStart = () => ({
	type: LOADING_TWEET_REPLIES_START,
	payload: true
})

const setTweetReplies = tweets => ({
	type: SET_TWEET_REPLIES,
	payload: tweets
})

const setTweetRepliesError = error => ({
	type: SET_TWEET_REPLIES_ERROR,
	payload: error
})

export function addTweetReplyAction(tweet){
	return async (dispatch) =>{				
		dispatch(addTweetReplySuccess(tweet))							
	}
}

const addTweetReplySuccess = (tweet) => ({
	type: ADD_TWEET_REPLY_SUCCESS,
	payload: tweet
})

/*
const addTweetError = error => ({
	type: ADD_TWEET_ERROR,
	payload: error
})*/