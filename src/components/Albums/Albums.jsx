import React from 'react';
import {Grid} from '@material-ui/core';
import Album from "../Album/Album";
import classes from './Albums.module.css';
import {useData} from '../../hoc/useData';

class Albums extends React.Component {
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
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        else {
          throw new Error(response.statusText)
        }
      })
      .then(data => this.setState({albumsPhotos: data, loading: false}))
      .catch(error => this.setState({errorAlbumsPhotos: error}))
  };

  componentDidMount() {
    const {user} = this.props.match.params;
    this.props.dataActions.fetchAlbums(user);
    this.fetchAlbumsPhotos();
  }

  render() {
    const {user} = this.props.match.params;
    const {data, dataActions} = this.props;
    const {albumsPhotos, errorAlbumsPhotos, loading} = this.state;

    return (
      <div className={classes.Albums}>
        <h1 className="h1-title">Albums</h1>
        <button type="button" className="back-btn" onClick={() => this.props.history.goBack()}>Back to Residents</button>
        {data.isLoading ? <p>Loading...</p> :
          <Grid container spacing={3}>
            {data.albums.map(item => <Grid item xs={3} key={item.id}>
              <Album
                album={item}
                albumsPhotos={albumsPhotos}
                errorAlbumsPhotos={errorAlbumsPhotos}
                loading={loading}
              />
            </Grid>)}
          </Grid>
        }
        {data.errorDataMessage && <p>Something went wrong. {data.errorDataMessage}. <button onClick={() => dataActions.fetchAlbums(user)}>Please try again!</button></p>}
      </div>
    )
  }
}

export default useData(Albums);