import React from 'react'

function MainLayout({children}){
    return (
        <div className="main-layout lg:w-11/12 mx-auto" data-test="component-main-layout">
            {children}
        </div>
    )
}

export default MainLayout