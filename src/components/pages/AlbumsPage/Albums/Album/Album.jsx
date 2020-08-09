import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import cover from '../../../../../img/cover.jpg';
import CallAPI from "../../../../../api/api";
import classes from './album.module.css';

class Album extends React.Component {
  _isMounted = false;

  constructor(props) {
    super(props);

    this.state = {
      albumsPhotos: [],
      errorAlbumsPhotos: ''
    }
  }

  fetchAlbumPhotos = () => {
    CallAPI.get(`albums/${this.props.album.id}/photos`)
      .then(data => {
        if (this._isMounted) {
          this.setState({albumsPhotos: data})
        }
      })
      .catch(error => {
        this.setState({errorAlbumsPhotos: error.statusText})
      })
  };

  componentDidMount() {
    this._isMounted = true;
    this.fetchAlbumPhotos();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const {albumsPhotos, errorAlbumsPhotos} = this.state;
    const {album} = this.props;

    return (
      <Link to={`/user/${album.userId}/albums/${album.id}`} className={classes.album}>
        <Card className={classes.card}>
          <CardMedia
            image={cover}
            title="Contemplative Reptile"
            className={classes.image}
          />
          <CardContent>
            <h3 className={classes.title}>{album.title}</h3>
            <p className={classes.qty}>Photos:
              <span className={classes.number}>{albumsPhotos.length}</span>
              {errorAlbumsPhotos && errorAlbumsPhotos}
            </p>
          </CardContent>
        </Card>
      </Link>
    )
  }
}

export default Album;

Album.propTypes = {
  album: PropTypes.object.isRequired
};