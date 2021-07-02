import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import $http from 'plugins/axios'
import { useParams, useHistory } from "react-router-dom"

const Verify = ()=>{
    
    let history = useHistory()
    let { hash } = useParams()    
    const errors = useSelector(state=>state.error.errors)

    useEffect(()=>{

        const verifyUser = async ()=>{                        
            await $http.get(`/api/verify-email/${hash}`)
            history.push('/login')                           
        }    
        verifyUser()
    },[])

    return (
        <div className="verify">
            {errors 
                ? <div>
                    <div className="font-medium text-red-600">There was an error</div>                    
                  </div>
                : <h1>Please wait..</h1>
            }                                                   
        </div>
    )

}

export default Verify