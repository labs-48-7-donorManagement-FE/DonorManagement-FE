import { CREATE_DONOR, CREATE_DONOR_ERROR } from '../actions/types';

const initialState = {
  body: {},
  isAuthenticated: !!localStorage.getItem('jwtAuth'),
  error: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CREATE_DONOR:
      return {
        ...state,
        body: action.payload,
      };
    case CREATE_DONOR_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
