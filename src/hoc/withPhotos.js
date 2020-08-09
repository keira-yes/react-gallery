import React from 'react';
import {connect} from "react-redux";
import { bindActionCreators } from 'redux';
import * as photosActions from "../redux/photos/photos.actions";

const mapStateToProps = state => {
  return {
    photos: state.photos
  }
};

const mapDispatchToProps = dispatch => ({
  photosActions: bindActionCreators(photosActions, dispatch)
});

export const withPhotos = ComponentName =>
  connect(mapStateToProps, mapDispatchToProps)
  (class WithPhotos extends React.Component {
    render() {
      return <ComponentName {...this.props} />
    }
  });