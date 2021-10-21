import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from 'testUtils';
import SidebarOption from '.';
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const defaultProps = {text: "icon label", Icon: Object };

/**
* Factory function to create a ShallowWrapper for the SidebarOption component.
* @function setup
* @param {object} props - Component props specific to this setup.
* @returns {ShallowWrapper}
*/
const setup = (props={}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<SidebarOption {...setupProps} />)
}


describe('renders', ()=>{	

	test('renders without error', () => {
	  const wrapper = setup();
	  const component = findByTestAttr(wrapper, 'component-sidebar-option');
	  expect(component.length).toBe(1);

	});

	test('no renders `.sidebarOption--active` class when `active` prop is not set', () => {

	  const wrapper = setup();
	  const component = findByTestAttr(wrapper, 'component-sidebar-option');
	  expect(component.find('.sidebarOption--active').length).not.toBe(1);

	});

	test('renders `.sidebarOption--active` class when `active` prop is true', () => {

	  const wrapper = setup({ active: true });
	  const component = findByTestAttr(wrapper, 'component-sidebar-option');
	  expect(component.find('.sidebarOption--active').length).toBe(1);

	});

	test('renders `icon label` text', () => {

	  const text = "icon label"; 
	  const wrapper = setup({ text });
	  const component = findByTestAttr(wrapper, 'icon-label');
	  expect(component.text()).toContain(text);

	});

	test('renders `sidebar-icon` component', () => {

	  const wrapper = setup();
	  const component = findByTestAttr(wrapper, 'sidebar-icon');
	  expect(component.length).toBe(1);

	});

})	

test('does not throw warning with expected props', ()=>{

  const expectedProps = {text: "icon label", Icon: Object };
  checkProps(SidebarOption, expectedProps);  

})