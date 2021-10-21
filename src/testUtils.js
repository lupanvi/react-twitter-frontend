import checkPropTypes from 'check-prop-types';
import { middlewares } from 'store/store';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from 'store/reducers';

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}

export const checkProps = (component, conformingProps) =>{
	const propError = checkPropTypes(component.propTypes, 
									 conformingProps,
									 'prop', 
									 component.name);
	
	expect(propError).toBeUndefined();
}

/**
 * Create a testing store with imported reducers, middleware, and initial state.
 *  globals: rootReducer, middlewares.
 * @param {object} initialState - Initial state for store.
 * @function storeFactory
 * @returns {Store} - Redux store.
 */
 export const storeFactory = (initialState) => {
	const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
	return createStoreWithMiddleware(rootReducer, initialState);
  }