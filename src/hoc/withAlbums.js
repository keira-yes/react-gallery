import React from 'react';
import {connect} from "react-redux";
import { bindActionCreators } from 'redux';
import * as albumsActions from "../redux/albums/albums.actions";

const mapStateToProps = state => {
  return {
    albums: state.albums
  }
};

const mapDispatchToProps = dispatch => ({
  albumsActions: bindActionCreators(albumsActions, dispatch)
});

export const withAlbums = ComponentName =>
  connect(mapStateToProps, mapDispatchToProps)
  (class WithAlbums extends React.Component {
    render() {
      return <ComponentName {...this.props} />
    }
  });