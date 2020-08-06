import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import cover from './../../img/cover.jpg';
import classes from './Album.module.css';

class Album extends React.Component {
  _isMounted = false;

  constructor(props) {
    super(props);

    this.state = {
      albumsPhotos: [],
      errorAlbumsPhotos: '',
      loading: false
    }
  }

  fetchAlbumsPhotos = () => {
    this.setState({loading: true});
    fetch(`https://jsonplaceholder.typicode.com/albums/${this.props.album.id}/photos`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        else {
          throw new Error(response.statusText)
        }
      })
      .then(data => {
        if (this._isMounted) {
          this.setState({albumsPhotos: data, loading: false})
        }
      })
      .catch(error => this.setState({errorAlbumsPhotos: error, loading: false}))
  };

  componentDidMount() {
    this._isMounted = true;
    this.fetchAlbumsPhotos();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const {albumsPhotos, errorAlbumsPhotos, loading} = this.state;
    const {album} = this.props;

    return (
      <Link to={`/user/${album.userId}/albums/${album.id}`} className={classes.Album}>
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
                <span className={classes.Number}>{albumsPhotos.length}</span>
              }
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