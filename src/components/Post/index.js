import React, { forwardRef } from "react"
import {GoVerified} from 'react-icons/go'
import {BsChat, BsHeart, BsArrowRepeat} from 'react-icons/bs'
import {FiShare} from 'react-icons/fi'
import { useHistory, Link } from "react-router-dom";

const Post = forwardRef(
  ({ displayName, username, verified, text, image, avatar, id, main }, ref) => {   

    return (
      <div ref={ref} data-test="component-post">
        <div  className="post flex items-start pb-2 border-b border-gray-200">
          <div className="avatar p-4">          
            <img src={avatar} className="rounded-full h-12 w-12" />          
          </div>
          <div className="flex-1 pr-6">
            <div className="post-header font-bold">            
              {displayName} {verified && <GoVerified className="inline post__badge text-sm text-twitter" /> } 
              <span className=" text-gray-600 font-normal"> 
                @{username}
              </span>                          
            </div>
            <Link to={`/tweet/${id}`} className={`post-body text-sm text-gray-700 ${main ? 'text-lg': 'text-sm' }`}>
                <p>{text}</p>
            </Link>
            {
              image &&
              <img src={image} alt="" className="post-image w-full h-72 object-cover rounded-md mt-2" />
            }
            <div className={`post-footer flex justify-between my-3 text-gray-700 ${main ? 'text-xl' : 'text-md' } `}>                    
              <BsChat /> 
              <BsArrowRepeat />
              <BsHeart /> 
              <FiShare />        
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default Post