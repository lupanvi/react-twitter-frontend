import {combineReducers} from 'redux'
import tweetsReducer from './tweetsReducer'
import authReducer from './authReducer'
import errorReducer from './errorReducer'

export default combineReducers({
	tweets: tweetsReducer,
	auth: authReducer,
	error: errorReducer
})