import React from 'react';
import SimpleReactLightbox from 'simple-react-lightbox'
import Photos from "./Photos/Photos";
import classes from './photosPage.module.css';

const PhotosPage = (props) => {

  const {album_id} = props.match.params;

  return (
    <SimpleReactLightbox>
      <div className={classes.photos}>
        <h1 className="h1-title">Photos</h1>

        <button
          type="button"
          className="back-btn"
          onClick={props.history.goBack}>
          Back to Albums
        </button>

        <Photos album_id={album_id} />

      </div>
    </SimpleReactLightbox>
  )
};

export default PhotosPage;