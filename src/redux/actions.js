import * as types from './types';

export const getPhotos = (payload) => {
  return {
    type: types.GET_PHOTOS,
    payload
  }
};