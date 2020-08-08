import * as types from './data.types';

export const dataLoading = payload => {
  return {
    type: types.DATA_LOADING,
    payload
  }
};

export const displayDataError = payload => {
  return {
    type: types.DISPLAY_DATA_ERROR,
    payload
  }
};

export const fetchAlbums = user => dispatch => {
  dispatch(dataLoading(true));
  dispatch(displayDataError(''));
  fetch(`https://jsonplaceholder.typicode.com/albums?userId=${user}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      else {
        throw new Error(response.statusText)
      }
    })
    .then(data => {
      dispatch(dataLoading(false));
      dispatch(updateAlbums(data));
    })
    .catch(error => {
      dispatch(dataLoading(false));
      dispatch(displayDataError(error.message))
    })
};

export const updateAlbums = payload => {
  return {
    type: types.UPDATE_ALBUMS,
    payload
  }
};

export const fetchPhotos = album => dispatch => {
  dispatch(dataLoading(true));
  dispatch(displayDataError(''));
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
      dispatch(dataLoading(false));
      dispatch(updatePhotos(data));
    })
    .catch(error => {
      dispatch(dataLoading(false));
      dispatch(displayDataError(error.message))
    })
};

export const updatePhotos = payload => {
  return {
    type: types.UPDATE_PHOTOS,
    payload
  }
};