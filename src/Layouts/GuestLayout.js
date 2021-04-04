import React from 'react'

function GuestLayout({children}){
    return (
        <div className="guest-layout" data-test="component-guest-layout">
            {children}
        </div>
    )
}

export default GuestLayout