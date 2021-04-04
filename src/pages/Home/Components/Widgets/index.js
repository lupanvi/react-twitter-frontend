import React from "react"
import {FiSearch} from 'react-icons/fi'
import trends from 'data/trends'

function Widgets() {
  return (
    <div className="widgets flex-1 hidden lg:block">
      <div className="flex items-center rounded-full p-3 mt-2 ml-5 bg-gray-200">
        <FiSearch className="text-gray-500" />
        <input className="ml-2 focus:outline-none bg-gray-200 border-0" placeholder="Search" type="text" />
      </div>

      <div className="trends py-4 mt-4 ml-5 bg-gray-50 rounded-2xl">
        <h2 className="px-4 pb-3 text-2xl font-bold">Trends for you</h2>
        <div className="trends-container">
          {
            trends.map((trend)=>(            
                <div className="trend border-t py-2 px-4">
                  <div className="header text-gray-500 text-sm">{trend.category}</div>
                  <div className="trend font-bold">{trend.name}</div>
                  <div className="tweets_number text-gray-500 text-sm">{trend.tweets_count} Tweets</div>
                </div>            
            ))
          }       
        </div>        
       
      </div>
    </div>
  );
}

export default Widgets;