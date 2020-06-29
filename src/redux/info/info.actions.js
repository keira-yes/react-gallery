import * as types from './info.types';

export const getPhotos = (payload) => {
  return {
    type: types.GET_PHOTOS,
    payload
  }
};