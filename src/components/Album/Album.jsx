import React from 'react';
import {Link} from "react-router-dom";
import classes from './Album.module.css'

const Album = ({album}) => {
  return (
    <Link to={`/${album.userId}/album_${album.id}`} className={classes.Album}>
      <div className={classes.Image}>Image</div>
      <h3 className={classes.Title}>{album.title}</h3>
      <p>Photos: qty</p>
    </Link>
  )
};

export default Album;