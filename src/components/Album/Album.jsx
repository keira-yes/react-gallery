import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import cover from './../../img/cover.jpg';
import classes from './Album.module.css';
import {useData} from '../../hoc/useData';

const Album = ({album, albumsPhotos, errorAlbumsPhotos, loading}) => {
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
          <p className={classes.Qty}>Photos:
            {loading ? <span>Loading...</span> :
              <span className={classes.Number}>{albumsPhotos.filter(item => Number(album.id) === Number(item.albumId)).length}</span>
            }
            {errorAlbumsPhotos && {errorAlbumsPhotos}}
          </p>
        </CardContent>
      </Card>
    </Link>
  )
};

export default useData(Album);

Album.propTypes = {
  album: PropTypes.object.isRequired,
  albumsPhotos: PropTypes.array.isRequired,
  errorAlbumsPhotos: PropTypes.string,
  loading: PropTypes.bool
};