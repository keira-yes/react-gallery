import React from 'react';
import {Link} from "react-router-dom";
import classes from './Album.module.css'

const Album = ({album}) => {
  return (
    <Link to={`/albums/${album.id}/photos`} className={classes.Album}>
      <div className={classes.Image}>Image</div>
      <h3 className={classes.Title}><Link to={`/albums/${album.id}/photos`}>{album.title}</Link></h3>
      <p>Photos: qty</p>
    </Link>
  )
};

export default Album;