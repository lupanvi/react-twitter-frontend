import {combineReducers} from 'redux'
import tweetsReducer from './tweetsReducer'
import authReducer from './authReducer'

export default combineReducers({
	tweets: tweetsReducer,
	auth: authReducer
})