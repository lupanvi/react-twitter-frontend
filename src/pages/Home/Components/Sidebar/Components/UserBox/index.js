import React,{useState,createRef} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { createPopper } from "@popperjs/core"
import {useHistory} from 'react-router-dom';
import {logoutUserAction} from 'actions/AuthAction'
import {BsCheck} from 'react-icons/bs'

const UserBox = ()=>{

    const dispatch = useDispatch()
    const history = useHistory()     
    const user = useSelector(state => state.auth.user)
    const error = useSelector(state => state.auth.error) 
    const [popoverShow, setPopoverShow] = useState(false)
    const useBoxRef = createRef()
    const popoverRef = createRef()
    const openPopover = () => {
        createPopper(useBoxRef.current, popoverRef.current, {
            placement: "top"
        })
        setPopoverShow(true)
    }
    const closePopover = () => {
        setPopoverShow(false)
    }
    
    const logout = async (e)=>{
        e.preventDefault()                
        await dispatch(logoutUserAction())               
        history.push('/')               
    }    

    return (
        <>
            <div 
                className="flex justify-between rounded-full p-3 cursor-pointer transition-colors ease-out hover:bg-blue-100"
                onClick={() => {
                    popoverShow ? closePopover() : openPopover()
                }}
                ref={useBoxRef}
                >
                <div className="user_info flex items-center">
                    <img                      
                    src={user.avatar_path}
                    className="rounded-full w-10 h-10"                      
                    />
                    <div className="user_data ml-2 hidden lg:flex">
                        <div className="name font-bold">{user.name}</div>
                        <div className="username text-gray-500">@{user.username}</div>
                    </div>
                </div>
                <div className="more text-xl font-bold hidden lg:block">...</div>
            </div>
            <div
             className={
                (popoverShow ? "" : "hidden ")                 
                 +
                " shadow-md bg-white flex flex-col border mb-3 z-50 w-72 rounded-2xl"
              } ref={popoverRef}>                
                <div className="flex justify-between items-center border-b p-4">
                    <div className="user_info flex items-center">
                        <img                      
                        src={user.avatar_path}
                        className="rounded-full w-10 h-10"                      
                        />
                        <div className="user_data ml-2">
                            <div className="name font-bold">{user.name}</div>
                            <div className="username text-gray-500">@{user.username}</div>
                        </div>
                    </div>
                    <div className="check text-xl font-bold text-twitter"><BsCheck /></div>
                </div>
                <a className="p-4" href="#" onClick={(e)=>logout(e)}>
                    <span>Log out @{user.username}</span>
                </a>

                { error && 
					<div className="text-red-500 text-center"> 
						There was an error
					</div> 
				}

            </div>
        </>
    )
}

export default UserBox