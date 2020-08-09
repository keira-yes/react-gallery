import * as types from './photos.types';
import CallAPI from "../../api/api";

export const loadingPhotos = payload => {
  return {
    type: types.LOADING_PHOTOS,
    payload
  }
};

export const errorPhotos = payload => {
  return {
    type: types.ERROR_PHOTOS,
    payload
  }
};

export const fetchPhotos = album => dispatch => {
  dispatch(loadingPhotos(true));

  CallAPI.get(`albums/${album}/photos`)
    .then(data => {
      dispatch(loadingPhotos(false));
      dispatch(updatePhotos(data));
    })
    .catch(error => {
      dispatch(loadingPhotos(false));
      dispatch(errorPhotos(true));
      console.log('Fetch Photos error', error);
    })
};

export const updatePhotos = payload => {
  return {
    type: types.UPDATE_PHOTOS,
    payload
  }
};