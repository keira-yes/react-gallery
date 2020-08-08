import * as types from './users.types';
import CallAPI from "../../api/api";

export const loadingUsers = payload => {
  return {
    type: types.LOADING_USERS,
    payload
  }
};

export const displayErrorUsers = payload => {
  return {
    type: types.ERROR_USERS,
    payload
  }
};

export const fetchUsers = () => dispatch => {
  dispatch(loadingUsers(true));
  dispatch(displayErrorUsers(''));

  CallAPI.get('users')
    .then(data => {
      dispatch(loadingUsers(false));
      dispatch(updateUsers(data));
    })
    .catch(error => {
      dispatch(loadingUsers(false));
      dispatch(displayErrorUsers(error.message));
    })
};

export const updateUsers = payload => {
  return {
    type: types.UPDATE_USERS,
    payload
  }
};