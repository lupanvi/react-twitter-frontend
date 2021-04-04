import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../../../../test/testUtils';
import Sidebar from './';

const setup = ()=>{
	const wrapper = shallow(<Sidebar />);
	return wrapper;	
}

describe('renders', ()=>{

	let wrapper
	
	beforeEach(()=>{
		wrapper = setup();		
	})

	test('it renders without errors', ()=>{			
		const component = findByTestAttr(wrapper, 'component-sidebar');
		expect(component.length).toBe(1);
	})

	test('it renders twitter icon', ()=>{	
		const component = findByTestAttr(wrapper, 'twitter-icon');
		expect(component.length).toBe(1);
	})

	test('it renders search icon', ()=>{	
		const component = findByTestAttr(wrapper, 'search-icon');
		expect(component.length).toBe(1);
	})

	test('it renders notifications icon', ()=>{	
		const component = findByTestAttr(wrapper, 'notifications-icon');
		expect(component.length).toBe(1);
	})	

	test('it renders mail icon', ()=>{	
		const component = findByTestAttr(wrapper, 'mail-icon');
		expect(component.length).toBe(1);
	})	

	test('it renders lists icon', ()=>{	
		const component = findByTestAttr(wrapper, 'lists-icon');
		expect(component.length).toBe(1);
	})	

	test('it renders profile icon', ()=>{	
		const component = findByTestAttr(wrapper, 'profile-icon');
		expect(component.length).toBe(1);
	})	

	test('it renders more icon', ()=>{	
		const component = findByTestAttr(wrapper, 'more-icon');
		expect(component.length).toBe(1);
	})	

	test('it renders tweet button', ()=>{	
		const component = findByTestAttr(wrapper, 'tweet-button');
		expect(component.length).toBe(1);
	})	
	
})