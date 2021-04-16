import $http from 'plugins/axios'
import {
    LOADING_TWEETS_START,
    SET_TWEETS,
	SET_TWEETS_ERROR,
	ADD_TWEET,
	ADD_TWEET_SUCCESS,
	ADD_TWEET_ERROR
} from 'types'

export function getTweetsAction(){
	return async (dispatch) =>{
		dispatch(fetchTweetsStart())
		try{
			const {data} = await $http.get('/api/tweets')						
			dispatch(setTweets(data))		
		}catch(e){
			dispatch(setTweetsError(e))
		}
	}
}

const fetchTweetsStart = () => ({
	type: LOADING_TWEETS_START,
	payload: true
})

const setTweets = tweets => ({
	type: SET_TWEETS,
	payload: tweets
})

const setTweetsError = error => ({
	type: SET_TWEETS_ERROR,
	payload: error
})

export function addTweetAction(tweet){
	return async (dispatch) =>{		
		try{
			const {data} = await $http.post('/api/tweets', tweet)
			dispatch(addTweetSuccess(data))		
		}catch(e){
			
		}

	}
}

const addTweet = () => ({
	type: ADD_TWEET,
	payload: true
})

const addTweetSuccess = tweet => ({
	type: ADD_TWEET_SUCCESS,
	payload: tweet
})

const addTweetError = error => ({
	type: ADD_TWEET_ERROR,
	payload: error
})