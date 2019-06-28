import axios from 'axios';
import { GET_CARD, CARD_ERROR } from './types';

const getCardDetails = () => async (dispatch) => {
  await axios
    .get('https://donor-manage.herokuapp.com/api/v1/donors')
    .then((res) => {
      console.log('called', res.data.data);
      dispatch({
        type: GET_CARD,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err, '<<<<<<<<<<<');
      return dispatch({
        type: CARD_ERROR,
        payload: err.response.data,
      });
    });
};

export default getCardDetails;
