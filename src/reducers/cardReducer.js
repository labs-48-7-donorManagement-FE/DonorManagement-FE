import { GET_CARD, CARD_ERROR } from '../actions/types';

const initialState = {
  isAuthenticated: !!localStorage.getItem('jwtAuth'),
  error: {},
  cards: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CARD:
      return {
        ...state,
        cards: action.payload,
      };
    case CARD_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
