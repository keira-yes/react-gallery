import React from 'react';
import Albums from "./Albums/Albums";
import classes from './AlbumsPage.module.css';

const AlbumsPage = (props) => {

  const {user_id} = props.match.params;

  return (
    <div className={classes.Albums}>
      <h1 className="h1-title">Albums</h1>

      <button
        type="button"
        className="back-btn"
        onClick={props.history.goBack}>
        Back to Residents
      </button>

      <Albums user_id={user_id} />
    </div>
  )
};

export default AlbumsPage;