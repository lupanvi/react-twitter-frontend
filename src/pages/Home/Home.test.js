import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../../test/testUtils';
import Home from './';
import Sidebar from './Components/Sidebar';
import Feed from './Components/Feed';
import Widgets from './Components/Widgets';

const setup = ()=>{
	const wrapper = shallow(<Home />);
	return wrapper;	
}

describe('App', ()=>{

	let wrapper
	
	beforeEach(()=>{
		wrapper = setup();		
	})

	test('it renders without errors', ()=>{			
		const component = findByTestAttr(wrapper, 'component-home');
		expect(component.length).toBe(1);
	})

	test('it renders child component Sidebar', ()=>{	
		const component = findByTestAttr(wrapper, 'component-sidebar');
		expect(component.length).toBe(1);
	})

	test('it renders child component Feed', ()=>{	
		const component = findByTestAttr(wrapper, 'component-feed');
		expect(component.length).toBe(1);
	})

	test('it renders child component Widgets', ()=>{	
		const component = findByTestAttr(wrapper, 'component-widgets');
		expect(component.length).toBe(1);
	})	
	
})