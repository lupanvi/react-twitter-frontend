import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../test/testUtils';
import App from './App';
import Sidebar from '../Sidebar';
import Feed from '../Feed';
import Widgets from '../Widgets';

const setup = ()=>{
	const wrapper = shallow(<App />;
	return wrapper;	
}

describe('App', ()=>{
	
	
	
})