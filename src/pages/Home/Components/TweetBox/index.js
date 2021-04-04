import React, { useState } from "react"
import {useDispatch, useSelector} from 'react-redux';
import ImageSelection from "./Components/ImageSelection"
import {addTweetAction} from 'actions/TweetsAction'

function TweetBox(props) {
  const initialTweetImage = {
    image_src:"",
    image_file:""
  }  
  const [tweetMessage, setTweetMessage] = useState("")
  const [tweetImage, setTweetImage] = useState(initialTweetImage)  

  const dispatch = useDispatch()  

  const sendTweet = async (e) => {
    e.preventDefault()
    
    let data = new FormData()
    data.append('image_path', tweetImage.image_file)            
    data.append('content', tweetMessage)                 

    await dispatch(addTweetAction(data))    

    setTweetMessage("")
    setTweetImage(initialTweetImage)           

    //if it was open from a modal, we need to close it  
    if (props.onClose){
      props.onClose(true)
    }                   

  }

  const user = useSelector(state => state.auth.user)

  const enabledButton =  tweetMessage.length > 0 || tweetImage.image_src.length > 0

  return (
    
    <div className="p-3">     
      <form className="flex flex-col" onSubmit={(e)=>sendTweet(e)}>
        <div className="flex">          
          <img                      
              src={user.avatar_path}
              className="rounded-full w-10 h-10"                      
          />
          <div className="input_box flex-1 pr-5">
            <input
              onChange={(e) => setTweetMessage(e.target.value)}
              value={tweetMessage}
              placeholder="What's happening?"
              type="text"
              className="focus:outline-none w-full  ml-5 text-xl border-0"
              required
            />
              {tweetImage.image_src &&
                <div className="image_tweet px-5 py-3 relative">                                   
                  <img src={tweetImage.image_src} className="w-full h-72 rounded-md object-cover" />                  
                </div> 
              }
          </div>                   
        </div>

        <div className="actions flex justify-between items-center pl-14 pt-4">

          <ImageSelection setTweetImage={setTweetImage}  />

          <button            
            type="submit"
            className="button py-2 disabled:opacity-50"
            disabled={!enabledButton} 
          >
            Tweet
          </button>
        </div>                        
      </form>
    </div>
  );
}

export default TweetBox;