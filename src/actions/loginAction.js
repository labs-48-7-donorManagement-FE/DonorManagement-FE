import axios from 'axios';
import { LOGIN_SUCCESS, LOGIN_ERROR, GET_CURRENT_USER } from './types';

const getCurrentUser = user => ({
  type: GET_CURRENT_USER,
  payload: user,
});

const fetchLogin = (user, history, resetIsLoadingState) => (dispatch) => {
  resetIsLoadingState();
  axios
    .post('https://donor-manage.herokuapp.com/api/v1/auth/login', user)
    .then((res) => {
      localStorage.setItem('jwtAuth', res.data.token);
      history.push('/dashboard');
      dispatch(getCurrentUser(res.data));
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      resetIsLoadingState();
    })
    .catch((err) => {
      dispatch({
        type: LOGIN_ERROR,
        payload: err.response.data,
      });
      resetIsLoadingState();
    });
};

export default fetchLogin;
