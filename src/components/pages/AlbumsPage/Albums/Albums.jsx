import React from 'react';
import PropTypes from "prop-types";
import {Grid} from '@material-ui/core';
import Album from "./Album/Album";
import {withAlbums} from '../../../../hoc/withAlbums';
import Loader from "../../../UIComponents/Loader/Loader";
import ErrorMessage from "../../../UIComponents/ErrorMessage/ErrorMessage";

class Albums extends React.Component {

  componentDidMount() {
    const {user_id} = this.props;
    this.props.albumsActions.fetchAlbums(user_id);
  }

  render() {
    const {albums, albumsActions, user_id} = this.props;

    return (
      <>
        {albums.isLoading ? <Loader /> :

          <Grid container spacing={3}>
            {albums.albums.map(item => <Grid item xs={3} key={item.id}><Album album={item}/></Grid>)}
          </Grid>
        }

        {albums.isError && <ErrorMessage reloadData={albumsActions.fetchAlbums(user_id)} />}
      </>
    )
  }
}

export default withAlbums(Albums);

Albums.propTypes = {
  user_id: PropTypes.string.isRequired
};