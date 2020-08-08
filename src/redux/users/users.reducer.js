import * as types from "./users.types";

const initialState = {
  isLoading: false,
  isError: false,
  errorMessage: '',
  users: [],
};

const usersReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.LOADING_USERS :
      return {...state, isLoading: action.payload};
    case types.ERROR_USERS :
      return {...state, errorMessage: action.payload};
    case types.UPDATE_USERS:
      return {...state, users: action.payload};
    default:
      return state;
  }
};

export default usersReducer;