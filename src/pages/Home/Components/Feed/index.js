import React,{useEffect} from "react"
import {useSelector, useDispatch} from 'react-redux'
import FlipMove from "react-flip-move"
import "./Feed.css"
import TweetBox from 'components/TweetBox'
import Post from 'components/Post'
import {getTweetsAction} from 'store/actions/TweetsAction'
import {AiOutlineLoading3Quarters} from 'react-icons/ai'

function Feed() {

  const dispatch = useDispatch()  

  useEffect( () => {    
    dispatch(getTweetsAction())
  }, [])
 
  const tweets = useSelector(state => state.tweets.tweets)
  const loading = useSelector(state => state.tweets.loading)
  const errors = useSelector(state => state.error.errors)

  return (
    <div className="feed border-r w-full" data-test="component-feed">
      <div className="feed__header sticky top-0 border-b border-gray-200 bg-white py-4 px-5 z-10">
        <h2 className="font-bold text-2xl">Home</h2>       
      </div>      
      <TweetBox data-test="component-tweet-box" />
      
      <div className="h-3 bg-gray-100"></div>
      {
        loading && 
          <div className="flex justify-center pt-5">
            <AiOutlineLoading3Quarters className="text-twitter animate-spin text-2xl" />
          </div>
      }
      { errors && 
					<div>
						<div className="font-medium text-red-600">There was an error</div>						
					</div>
				}
      <FlipMove>
	      { 
          tweets.map(tweet => (
	          <Post
	            key={tweet.id}
              id={tweet.id}
	            displayName={tweet.user.name}
	            username={tweet.user.username}
	            verified={tweet.user.verified}
	            text={tweet.content}
	            avatar={tweet.user.avatar_path}
	            image={tweet.image_path}
              data-test="component-tweet"
	          />            
	        ))
        }           
  	   </FlipMove>
    </div>
  );
}

export default Feed;