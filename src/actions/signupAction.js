import axios from 'axios';
import { SIGNUP_SUCCESS, SIGNUP_ERROR, GET_CURRENT_USER } from './types';

const getCurrentUser = user => ({
  type: GET_CURRENT_USER,
  payload: user,
});

const fetchSignup = (user, history) => (dispatch) => {
  axios
    .post('https://donor-manage.herokuapp.com/api/v1/auth/signup', user)
    .then((res) => {
      localStorage.setItem('jwtAuth', res.data.token);
      history.push('/dashboard');
      dispatch(getCurrentUser(res.data));
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: res.data,
      });
    })
    .catch(err => dispatch({
      type: SIGNUP_ERROR,
      payload: err.response.data,
    }));
};

export default fetchSignup;
