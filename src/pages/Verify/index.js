import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import $http from 'plugins/axios'
import { useParams, useHistory } from "react-router-dom"

const Verify = ()=>{
    
    let history = useHistory()
    let { hash } = useParams()    
    const [error,setError] = useState(null)

    useEffect(()=>{

        const verifyUser = async ()=>{ 
            
            try{
                await $http.get(`/api/verify-email/${hash}`)
                history.push('/api/login')
            }catch(e){                
                setError(e.message)
            }             
            
        }    
        verifyUser()
    },[])

    return (
        <div className="verify">
            {error
                ? <div>
                    <div className="font-medium text-red-600">Invalid token</div>                    
                  </div>
                : <h1>Please wait..</h1>
            }                                                   
        </div>
    )

}

export default Verify