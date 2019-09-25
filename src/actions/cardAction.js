import axios from 'axios';
import { GET_CARD, CARD_ERROR } from './types';

const getCardDetails = () => async (dispatch) => {
  await axios
    .get('https://donor-manage.herokuapp.com/api/v1/donors')
    .then((res) => {
      dispatch({
        type: GET_CARD,
        payload: res.data.data,
      });
    })
    .catch(err => dispatch({
      type: CARD_ERROR,
      payload: err.response.data,
    }));
};

export default getCardDetails;
