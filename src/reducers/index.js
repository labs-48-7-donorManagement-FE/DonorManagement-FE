import { combineReducers } from 'redux';
import signupReducer from './signupReducer';
import loginReducer from './loginReducer';
import cardReducer from './cardReducer';
import createDonor from './createDonor';

export default combineReducers({
  signup: signupReducer,
  login: loginReducer,
  card: cardReducer,
  createDonor,
});
