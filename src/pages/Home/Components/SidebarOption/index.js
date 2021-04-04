import React from "react";
import PropTypes from 'prop-types';

const SidebarOption = ({ active, text, Icon }) => {
  return (
    <div data-test="component-sidebar-option">    	    	    
    	<div className="cursor-pointer flex">
        <div className={`${active && 'text-twitter'} rounded-full transition-colors ease-out flex max-w-full items-center p-3 xl:pr-6 hover:text-twitter hover:bg-blue-100`}>
        	<Icon className="text-2xl" data-test="sidebar-icon" />
      		<h2 className="ml-5 text-xl font-bold hidden xl:block" data-test="icon-label">{text}</h2>
        </div>
    	</div>
    </div>
  );
}

SidebarOption.propTypes = {  
  active: PropTypes.bool,
  text: PropTypes.string.isRequired,
  Icon: PropTypes.elementType.isRequired
};


export default SidebarOption;