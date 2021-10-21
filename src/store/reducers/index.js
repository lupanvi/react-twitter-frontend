import {combineReducers} from 'redux'
import tweetsReducer from './tweetsReducer'
import authReducer from './authReducer'
import errorReducer from './errorReducer'
import tweetReplyReducer from './tweetReplyReducer'

export default combineReducers({
	tweets: tweetsReducer,
	auth: authReducer,
	replies: tweetReplyReducer,
	error: errorReducer
})