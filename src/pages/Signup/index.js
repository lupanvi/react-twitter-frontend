import React, {useState, useEffect} from 'react'
import { AiOutlineTwitter } from 'react-icons/ai'
import { CgSpinnerTwo } from 'react-icons/cg'
import {useHistory} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import $http from '../../plugins/axios'
import {ErrorAction} from 'actions/ErrorAction'
import ValidationErrors from 'components/ValidationErrors/ValidationErrors'

function Signup() {

	const [form , setForm] = useState({
        name : "",
        email : "",
        username: "",
        password : "",
        password_confirmation : ""        
    })	

	const dispatch = useDispatch()
	const [loading, setLoading] = useState(false)
	const history = useHistory()
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

	const submitSignup = async (e) => {
		e.preventDefault()
		setLoading(true)		
    	try{
            await $http.get('/sanctum/csrf-cookie')
    		await $http.post("/register", form)    		
            history.push('/login')
        }catch(e){            
            setLoading(false)         
        }   
	}

	return (
		<div className="signup absolute w-full h-full" data-test="component-signup">     	
		    <div className="relative w-full h-full">
		    	<div className="layergray absolute bg-gray-500 w-full h-full opacity-50">
		    	</div>		    	
		    	<div className="w-full h-full absolute z-30">
		    		<div className="w-full h-full flex justify-around items-center">
				    	<div className="w-full sm:w-8/12 md:w-5/12 bg-white p-10 border rounded-xl">

				    	   <AiOutlineTwitter className="text-4xl text-twitter m-auto" />
				    	   <h1 className="text-2xl font-bold my-10">Create your account</h1>
						    { errors && 
								<div>
									<div className="font-medium text-red-600">There was an error</div>
									<ValidationErrors errors={errors} />
								</div>
							}
					       <form onSubmit={submitSignup}>

					    	   <div className="special-label-holder relative">
						    	   <input 
						    	   	type="text" 
						    	   	id="name"
						    	   	name="name"
						    	   	placeholder=" "				    	   	
						    	   	className="input-form" 
						    	   	value={form.name}
                       				onChange={handleChange}
						    	   />
						    	   <label className="text-lg h-full left-2 text-gray-500 top-3 overflow-hidden pointer-events-none absolute transition-all duration-200 ease-in-out" for="name">Name</label>
					    	   </div>
					    	   <div className="special-label-holder relative mt-5">
						    	   <input 
						    	   	type="text" 
						    	   	id="username"
						    	   	name="username"
						    	   	placeholder=" "				    	   	
						    	   	className="input-form" 
						    	   	value={form.username}
                       				onChange={handleChange}
						    	   />
						    	   <label className="text-lg h-full left-2 text-gray-500 top-3 overflow-hidden pointer-events-none absolute transition-all duration-200 ease-in-out" for="name">Username</label>
					    	   </div>
					    	   <div className="special-label-holder relative mt-5">	
						    	   <input 
						    	   	id="email"
						    	   	type="email" 				    	   	
						    	   	name="email"
						    	   	placeholder=" "				    	   	
						    	   	className="input-form" 
						    	   	value={form.email}
						    	   	onChange={handleChange}
						    	   />
						    	   <label className="text-lg h-full left-2 text-gray-500 top-3 overflow-hidden pointer-events-none absolute transition-all duration-200 ease-in-out" for="email">Email</label>
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

					    	   <div className="special-label-holder relative mt-5">	
						    	   <input 
						    	   	id="password_confirmation"
						    	   	type="password" 
						    	   	name="password_confirmation"
						    	   	placeholder=" "				    	   					    	   	
						    	   	className="input-form" 
						    	   	value={form.password_confirmation}
						    	   	onChange={handleChange}
						    	   />
						    	   <label className="text-lg h-full left-2 text-gray-500 top-3 overflow-hidden pointer-events-none absolute transition-all duration-200 ease-in-out" for="password_confirmation">Password confirmation</label>
					    	   </div>

					    	   <button disabled={loading} type="submit" className="button flex items-center justify-center w-full mt-5 disabled:opacity-50">
							   <CgSpinnerTwo className={`loading animate-spin mr-1 ${!loading ? 'hidden' : '' } `} />
					    	   	Signup
					    	   </button>				    	  

					    	</form>   
				    	</div>
				    </div>		
			    </div>			    
		    </div>	    
		</div>
	);
}

export default Signup;