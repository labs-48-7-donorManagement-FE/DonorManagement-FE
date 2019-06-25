import { LOGIN_SUCCESS, LOGIN_ERROR, GET_CURRENT_USER } from '../actions/types';

const initialState = {
  body: {},
  isAuthenticated: !!localStorage.getItem('jwtAuth'),
  error: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        body: action.payload,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case GET_CURRENT_USER:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
