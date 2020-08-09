import * as types from "./photos.types";

const initialState = {
  isLoading: false,
  isError: false,
  photos: [],
};

const photosReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.LOADING_PHOTOS :
      return {...state, isLoading: action.payload};
    case types.ERROR_PHOTOS :
      return {...state, isError: action.payload};
    case types.UPDATE_PHOTOS:
      return {...state, photos: action.payload};
    default:
      return state;
  }
};

export default photosReducer;