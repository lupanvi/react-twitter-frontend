import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from 'testUtils';
import App from './index';

const setup = ()=>{
	const wrapper = shallow(<App />);
	return wrapper;	
}

describe('App', ()=>{

	let wrapper
	
	beforeEach(()=>{
		wrapper = setup();		
	})

	test('it renders without errors', ()=>{			
		const component = findByTestAttr(wrapper, 'component-app');
		expect(component.length).toBe(1);
	})	
	
})