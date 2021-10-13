import axios from 'axios';
import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from './userTypes';

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

export const fetchUsersFailure = (err) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: err,
  };
};

// can be made because there is a thunk middleware---
// return a function
export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());

    setTimeout(() => {
      axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
          const users = res.data;
          dispatch(fetchUsersSuccess(users));
        })
        .catch((err) => {
          const errorMsg = err.message;
          dispatch(fetchUsersFailure(errorMsg));
        });
    }, 1000);
  };
};
