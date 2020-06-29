import React from 'react';
import {Grid} from '@material-ui/core';
import {connect} from "react-redux";
// import { bindActionCreators } from 'redux'
import {fetchPhotos, updatePhotos} from "../../redux/info/info.actions";

class Photos extends React.Component {

  goBack = () => {
    this.props.history.goBack();
  };

  componentDidMount() {
    const {album} = this.props.match.params;
    const {fetchPhotos} = this.props;
    fetchPhotos(album);
  }

  render() {
    const {album} = this.props.match.params;
    const {photos, isLoading, errorFetchPhotos, fetchPhotos} = this.props;
    return (
      <div>
        <input type="button" value="Back" onClick={this.goBack}/>
        {isLoading && <p>Loading...</p>}
        {errorFetchPhotos && <p>{errorFetchPhotos}. <button onClick={() => fetchPhotos(album)}>Try again!</button></p>}
        <Grid container spacing={3}>
          {photos.map(item => <Grid item xs={2} key={item.id}><img src={item.thumbnailUrl} alt={item.title}/></Grid>)}
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    photos: state.info.photos,
    isLoading: state.info.isLoading,
    errorFetchPhotos: state.info.errorFetchPhotos
  }
};

const mapDispatchToProps = {
  fetchPhotos,
  updatePhotos
};

export default connect(mapStateToProps, mapDispatchToProps)(Photos);