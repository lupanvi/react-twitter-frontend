import React,{useState} from 'react'
import {ReactComponent as TwitterButtonIcon} from 'assets/img/TwitterButtonIcon.svg'
import TweetBox from 'pages/Home/Components/TweetBox'
import Modal from 'components/Modal'

const TwitterButton = ()=>{

    const [displayModal, setDisplayModal] = useState(false)

    const showModal = ()=>{
        setDisplayModal(displayModal===false ? true : false)
    }

    return (
        <div className="twitter-button mt-3">
            <div className="cursor-pointer" onClick={()=>showModal()}>
                <div className="bg-twitter text-white p-6 rounded-full w-12 h-12 relative flex justify-center items-center xl:hidden">
                    <TwitterButtonIcon />        
                </div>
                <button className="button w-full hidden xl:block" data-test="tweet-button">
                Tweet
                </button>
            </div>
            <Modal onClose={showModal} show={displayModal}><TweetBox onClose={showModal} /></Modal>      
        </div>
    )
}

export default TwitterButton