import React from 'react'

const Modal = (props) =>{

    const onClose = () => {
        props.onClose()
    }

    if (!props.show) {
        return null
    }

    return (      
        <div className="modal pt-10 z-20 h-screen w-full fixed left-0 top-0 flex justify-center items-start bg-black bg-opacity-50">    
            <div className="bg-white rounded-lg w-10/12 md:w-1/3">        
                <div className="header border-b px-6 py-3">            
                    <button className="close-modal text-twitter text-xl" onClick={() => onClose()}>X</button>
                </div>        
                <div className="body">
                    { props.children }
                </div>          
            </div>
        </div>     
    )

}
export default Modal