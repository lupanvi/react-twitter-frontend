import React, { useState } from 'react'
import { AiOutlineTwitter } from 'react-icons/ai'
import { Route, Switch, Link, useRouteMatch } from 'react-router-dom'
import Signup from '../Signup'

function Default({match}) {

	const [displaySignUp, setDisplaySignUp] = useState(false)	

	return (
		<div className="wrapper h-screen flex flex-col lg:flex-row-reverse relative" data-test="component-default"> 			   

			<div className="w-full  sm:w-9/12 mx-auto lg:w-7/12 p-9 flex flex-col">				
				
				<AiOutlineTwitter className="text-5xl text-twitter flex-none" />
				<h1 className="text-4xl sm:text-6xl font-bold mt-6">See what is happening right now</h1>
				<p className="text-2xl sm:text-4xl py-7 font-bold">Join Twitter today</p>	    			    		

				<div className="mb-6 flex lg:flex-col">
					<button className="button w-2/4 mr-5 lg:mb-5" onClick={() => setDisplaySignUp(true)}>
						Signup
					</button>	    		
					<Link 
						to="login" 
						className="bg-white w-2/4 focus:outline-none border border-blue-400 text-center px-4 py-3 font-bold text-twitter rounded-full hover:bg-blue-50 active:bg-blue-50">
						Login
					</Link>	
				</div>
				
			</div>

			<div className=" flex-1 lg:w-5/12 bg-initial-page bg-cover bg-no-repeat flex justify-center items-center">
				<AiOutlineTwitter className="text-9xl text-white" />
			</div>

			{displaySignUp && <Signup /> }			

		</div>
	);
}

export default Default;