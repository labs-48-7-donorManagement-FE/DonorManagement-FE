import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';

const initialState = {};

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(rootReducer, initialState, composedEnhancer);

export default store;
