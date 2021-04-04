import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../../../../test/testUtils';
import Feed from './index';
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

//const defaultProps = {text: "icon label", Icon: Object };

/**
* Factory function to create a ShallowWrapper for the SidebarOption component.
* @function setup
* @param {object} props - Component props specific to this setup.
* @returns {ShallowWrapper}
*/
const setup = () => {
  //const setupProps = { ...defaultProps, ...props };
  return shallow(<Feed />)
}


describe('Feed', ()=>{

	test('renders without error', () => {
	  const wrapper = setup();
	  const component = findByTestAttr(wrapper, 'component-feed');
	  expect(component.length).toBe(1);
	});

	test('renders tweetBox component', () => {
	  const wrapper = setup();
	  const component = findByTestAttr(wrapper, 'component-tweet-box');
	  expect(component.length).toBe(1);
	});

})


test('get Tweets on Feed mount', ()=>{

	const wrapper = setup()

	const component = findByTestAttr(wrapper, 'component-tweet');
	expect(component.length).toBeGreaterThan(0);

	//mock the action
	/*const fetchData = jest.fn()

	const wrapper = setup()

	expect(fetchData).toHaveBeenCalled();*/

	//expect(wrapper.find(RecipeItem)).toHaveLength(3);

})