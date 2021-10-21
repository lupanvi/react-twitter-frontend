import React from 'react'
import Sidebar from 'components/Sidebar'
import Widgets from 'components/Widgets'

function MainLayout({children}){
    return (
        <div className="main-layout lg:w-11/12 mx-auto" data-test="component-main-layout">
            <div className="home flex h-screen md:mx-6" data-test="component-home">			
			<div className="flex lg:flex-1 mx-auto relative">
				<div className="xl:w-72">
					<Sidebar data-test="component-sidebar" />
				</div>
				<div className="flex flex-1 border-l">
                    <div className="max-w-2xl w-full border-r">
						{children}
					</div>
                    <Widgets data-test="component-widgets" />
				</div>
			</div>
		</div>
        </div>
    )
}

export default MainLayout