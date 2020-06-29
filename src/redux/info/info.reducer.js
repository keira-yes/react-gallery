import * as types from './info.types';

const initialState = {
  photos: [],
  isLoading: false,
  errorFetchPhotos: ''
};

const infoReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.UPDATE_PHOTOS:
      return {...state, photos: action.payload};
    case types.FETCH_REQUEST_PHOTOS :
      return {...state, isLoading: action.payload};
    case types.ERROR_REQUEST_PHOTOS :
      return {...state, errorFetchPhotos: action.payload};
    default:
      return state;
  }
};

export default infoReducer;