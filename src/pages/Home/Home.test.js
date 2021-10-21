import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from 'testUtils';
import Home from './';

const setup = ()=>{
	const wrapper = shallow(<Home />);
	return wrapper;	
}

describe('App', ()=>{

	let wrapper
	
	beforeEach(()=>{
		wrapper = setup();		
	})

	test('it renders child component Feed', ()=>{	
		const component = findByTestAttr(wrapper, 'component-feed');
		expect(component.length).toBe(1);
	})
		
	
})