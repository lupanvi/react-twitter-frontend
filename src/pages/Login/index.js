import React, {useState, useEffect} from 'react'
import { AiOutlineTwitter } from 'react-icons/ai'
import { CgSpinnerTwo } from 'react-icons/cg'
import {useSelector, useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom';
import {loginUserAction} from 'actions/AuthAction'
import {ErrorAction} from 'actions/ErrorAction'
import ValidationErrors from 'components/ValidationErrors/ValidationErrors'

function Login() {
	
	const dispatch = useDispatch()
	const history = useHistory()
	const [loading, setLoading] = useState(false)
	const [form , setForm] = useState({
        email : "",
        password : ""        
    })
	const errors = useSelector(state=>state.error.errors)
	
	useEffect(()=>{		
		dispatch(ErrorAction(null))					
	},[])

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }	
	
	const submitLogin = async (e) => {
		e.preventDefault()
		setLoading(true)
		try{
			await dispatch(loginUserAction(form))			
			history.push('/home')
		}catch(e){				
			setLoading(false)
		}		
	}						

	return (		
		<div className="login" data-test="component-login">     			    
	    	<div className="w-full mx-auto sm:w-8/12 md:w-6/12 lg:w-4/12 bg-white pt-5 px-10">
	    	   <AiOutlineTwitter className="text-5xl text-twitter" />			   
	    	   <h1 className="text-4xl font-bold my-10 ">Login</h1>
			   { errors && 
					<div>
						<div className="font-medium text-red-600">There was an error</div>
						<ValidationErrors errors={errors} />
					</div>
			   }	
		       <form onSubmit={submitLogin}>		    	   
		    	   <div className="special-label-holder relative mt-5">
			    	   <input 
			    	   	type="text" 
			    	   	id="email"
			    	   	name="email"
			    	   	placeholder=" "				    	   	
			    	   	className="input-form" 
			    	   	value={form.email}
           				onChange={handleChange}
			    	   />
			    	   <label className="text-lg h-full left-2 text-gray-500 top-3 overflow-hidden pointer-events-none absolute transition-all duration-200 ease-in-out" for="name">
			    	   	Email, phone or username
			    	   </label>
		    	   </div>		    	     	
			       <div className="special-label-holder relative mt-5">	
			    	   <input 
			    	   	id="password"
			    	   	type="password" 
			    	   	name="password"
			    	   	placeholder=" "				    	   					    	   	
			    	   	className="input-form" 
			    	   	value={form.password}
			    	   	onChange={handleChange}
			    	   />
			    	   <label className="text-lg h-full left-2 text-gray-500 top-3 overflow-hidden pointer-events-none absolute transition-all duration-200 ease-in-out" for="password">Password</label>
		    	   </div>		    	 
		    	   <button disabled={loading} type="submit" className="button flex items-center justify-center w-full mt-5 disabled:opacity-50">
		    	   	<CgSpinnerTwo className={`loading animate-spin mr-1 ${!loading ? 'hidden' : '' } `} />
					Login
		    	   </button>
		    	  	    	   
		    	</form>   
	    	</div>
				
		</div>
	);
}

export default Login;