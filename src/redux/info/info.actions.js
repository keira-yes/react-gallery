import * as types from './info.types';

export const fetchPhotos = album => dispatch => {
  dispatch(fetchRequestPhotos(true));
  fetch(`https://jsonplaceholder.typicode.com/albums/${album}/photos`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      else {
        throw new Error(response.statusText)
      }
    })
    .then(data => {
      dispatch(fetchRequestPhotos(false));
      dispatch(updatePhotos(data));
    })
    .catch(error => {
      dispatch(fetchRequestPhotos(false));
      dispatch(errorRequestPhotos(error.message))
    })
};

export const fetchRequestPhotos = payload => {
  return {
    type: types.FETCH_REQUEST_PHOTOS,
    payload
  }
};

export const errorRequestPhotos = payload => {
  return {
    type: types.ERROR_REQUEST_PHOTOS,
    payload
  }
};

export const updatePhotos = payload => {
  return {
    type: types.UPDATE_PHOTOS,
    payload
  }
};