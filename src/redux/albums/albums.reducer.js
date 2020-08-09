import * as types from "./albums.types";

const initialState = {
  isLoading: false,
  isError: false,
  albums: [],
};

const albumsReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.LOADING_ALBUMS :
      return {...state, isLoading: action.payload};
    case types.ERROR_ALBUMS :
      return {...state, isError: action.payload};
    case types.UPDATE_ALBUMS:
      return {...state, albums: action.payload};
    default:
      return state;
  }
};

export default albumsReducer;