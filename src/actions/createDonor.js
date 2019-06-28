import axios from 'axios';
import { CREATE_DONOR, CREATE_DONOR_ERROR } from './types';

const createDonor = (donor, history) => async (dispatch) => {
  await axios
    .post('https://donor-manage.herokuapp.com/api/v1/donors', donor)
    .then((res) => {
      history.push('/dashboard');
      dispatch({
        type: CREATE_DONOR,
        payload: res.data,
      });
    })
    .catch(err => dispatch({
      type: CREATE_DONOR_ERROR,
      payload: err.response.data,
    }));
};

export default createDonor;
