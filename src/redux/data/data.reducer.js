import * as types from './data.types';

const initialState = {
  isLoading: false,
  errorDataMessage: '',
  albums: [],
  photos: []
};

const dataReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.DATA_LOADING :
      return {...state, isLoading: action.payload};
    case types.DISPLAY_DATA_ERROR :
      return {...state, errorDataMessage: action.payload};
    case types.UPDATE_ALBUMS:
      return {...state, albums: action.payload};
    case types.UPDATE_PHOTOS:
      return {...state, photos: action.payload};
    default:
      return state;
  }
};

export default dataReducer;