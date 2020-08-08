import * as types from './users.types';

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
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      else {
        throw new Error(response.statusText)
      }
    })
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