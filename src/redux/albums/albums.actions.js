import * as types from './albums.types';
import CallAPI from "../../api/api";

export const loadingAlbums = payload => {
  return {
    type: types.LOADING_ALBUMS,
    payload
  }
};

export const errorAlbums = payload => {
  return {
    type: types.ERROR_ALBUMS,
    payload
  }
};

export const fetchAlbums = user => dispatch => {
  dispatch(loadingAlbums(true));

  CallAPI.get(`albums?userId=${user}`)
    .then(data => {
      dispatch(loadingAlbums(false));
      dispatch(updateAlbums(data));
    })
    .catch(error => {
      dispatch(loadingAlbums(false));
      dispatch(errorAlbums(true));
      console.log('Fetch Albums error', error);
    })
};

export const updateAlbums = payload => {
  return {
    type: types.UPDATE_ALBUMS,
    payload
  }
};