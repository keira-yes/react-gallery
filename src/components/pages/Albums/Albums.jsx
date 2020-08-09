import React from 'react';
import {Grid} from '@material-ui/core';
import Album from "./Album/Album";
import classes from './Albums.module.css';
import {withAlbums} from '../../../hoc/withAlbums';

class Albums extends React.Component {

  componentDidMount() {
    const {user_id} = this.props.match.params;
    this.props.albumsActions.fetchAlbums(user_id);
  }

  render() {
    const {user_id} = this.props.match.params;
    const {albums, albumsActions} = this.props;

    return (
      <div className={classes.Albums}>
        <h1 className="h1-title">Albums</h1>
        <button type="button" className="back-btn" onClick={() => this.props.history.goBack()}>Back to Residents</button>
        {albums.isLoading ? <p>Loading...</p> :
          <Grid container spacing={3}>
            {albums.albums.map(item => <Grid item xs={3} key={item.id}><Album album={item}/></Grid>)}
          </Grid>
        }
        {albums.isError && <p>Something went wrong. <button onClick={() => albumsActions.fetchAlbums(user_id)}>Please try again!</button></p>}
      </div>
    )
  }
}

export default withAlbums(Albums);