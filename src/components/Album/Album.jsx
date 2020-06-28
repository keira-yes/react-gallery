import React from 'react';
import {Link} from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import cover from './../../img/cover.jpg';
import classes from './Album.module.css'

const Album = ({album}) => {
  return (
    <Link to={`/${album.userId}/album_${album.id}`} className={classes.Album}>
      <Card className={classes.Card}>
        <CardMedia
          image={cover}
          title="Contemplative Reptile"
          className={classes.Image}
        />
        <CardContent>
          <h3 className={classes.Title}>{album.title}</h3>
          <p className={classes.Qty}>Photos: qty</p>
        </CardContent>
      </Card>
    </Link>
  )
};

export default Album;