import React, {useEffect,useState} from 'react'
import FlipMove from "react-flip-move"
import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import MainLayout from 'Layouts/MainLayout'
import TweetBox from 'components/TweetBox'
import { addTweetReplyAction, getTweetRepliesAction } from 'store/actions/TweetReplyAction'
import Post from 'components/Post'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { useHistory } from "react-router-dom"

const Tweet = () =>{

    let { id } = useParams();
    const dispatch = useDispatch()   
    let history = useHistory()

    const replies = useSelector(state => state.replies.replies.data)    
    const tweet = useSelector(state => state.replies.tweet)    

    useEffect(()=>{                        
        dispatch(getTweetRepliesAction(id))         
    }, [id])

    const newReply = (tweet)=>{
        dispatch(addTweetReplyAction(tweet))
    }

    const goToPreviousPath = (e)=>{
        e.preventDefault()
        history.goBack()
    }

    return (
        <MainLayout>        
            <div data-test="component-tweet">
                <a href="#" className="header flex border-b items-center p-4" onClick={goToPreviousPath}>
                    <AiOutlineArrowLeft className="flex w-14" /> <h2 className="font-bold text-xl">Tweet</h2>
                </a>
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
                    main={true}
                />                                            
                <TweetBox parent={tweet.id} newReply={newReply} />                
                <div className="replies border-t">
                    <FlipMove>
                        {
                            replies.map((reply)=>(
                                <Post
                                    key={reply.id}
                                    id={reply.id}
                                    displayName={reply.user.name}
                                    username={reply.user.username}
                                    verified={reply.user.verified}
                                    text={reply.content}
                                    avatar={reply.user.avatar_path}
                                    image={reply.image_path}
                                    data-test="component-tweet"                                
                                />                             
                            ))
                        }
                    </FlipMove>    
                    </div>              
                </div>
        </MainLayout>    
        
    )
}

export default Tweet