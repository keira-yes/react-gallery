import * as types from './types';

const initialState = {
  photos: []
};

const infoReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.GET_PHOTOS:
      return {...state, photos: action.payload};
    default:
      return state;
  }
};

export default infoReducer;