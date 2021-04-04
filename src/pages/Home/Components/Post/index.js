import React, { forwardRef } from "react"
import {GoVerified} from 'react-icons/go'
import {BsChat, BsHeart, BsArrowRepeat} from 'react-icons/bs'
import {FiShare} from 'react-icons/fi'

const Post = forwardRef(
  ({ displayName, username, verified, text, image, avatar }, ref) => {
    return (
      <div className="post flex items-start pb-2 border-b border-gray-200" ref={ref} data-test="component-post">
        
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
          <div className="post-body text-sm text-gray-700">
              <p>{text}</p>
          </div>
          {
            image &&
            <img src={image} alt="" className="post-image w-full h-72 object-cover rounded-md mt-2" />
          }
          <div className="post-footer flex justify-between my-3 text-gray-700 text-md">                    
            <BsChat /> 
            <BsArrowRepeat />
            <BsHeart /> 
            <FiShare />        
          </div>
        </div>
      </div>
    );
  }
);

export default Post