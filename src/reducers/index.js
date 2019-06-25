import { combineReducers } from 'redux';
import signupReducer from './signupReducer';
import loginReducer from './loginReducer';

export default combineReducers({
  signup: signupReducer,
  login: loginReducer,
});
