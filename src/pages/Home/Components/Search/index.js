import React,{useState} from 'react'
import {FiSearch} from 'react-icons/fi'
import $http from 'plugins/axios'

function Search(){    
    
    const [results, setResults] = useState([])    

    const searchUser = async (value)=>{
        
        if (value===''){
            setResults([])
            return
        }        
        
		const {data} = await $http.post('/api/tweets/search', {search_term: value})
        setResults(data)
    }   

    return (
            <div className="search relative">                
                <div className="flex items-center rounded-full p-3 mt-2 ml-5 bg-gray-200">
                    <FiSearch className="text-gray-500" />
                    <input required onKeyUp={(e) => searchUser(e.target.value)} className="ml-2 focus:outline-none bg-gray-200 border-0" placeholder="Search" type="text" />
                </div>
                <div className="search_results ml-5 absolute top-12 bg-white w-full pr-5">                    
                    {
                        results.map((user)=>(
                            <div className="user flex items-center border-b p-1">
                                <img                      
                                    src={user.avatar_path}
                                    className="rounded-full w-10 h-10"                      
                                />
                                <div className="user_data ml-2">
                                    <div className="name font-bold">{user.name}</div>
                                    <div className="username text-gray-500">@{user.username}</div>
                                </div>
                            </div>
                        ))
                    }                                                    

                </div>
            </div>      
        )

}

export default Search;