import React from 'react';
import {Grid} from '@material-ui/core';
import {connect} from "react-redux";
// import { bindActionCreators } from 'redux'
import {fetchPhotos, updatePhotos} from "../../redux/info/info.actions";

class Photos extends React.Component {
  // constructor(props) {
  //   super(props);
  //
  //   this.state = {
  //     photos: []
  //   }
  // }

  // getPhoto = () => {
  //   fetch(`https://jsonplaceholder.typicode.com/albums/${this.props.match.params.album}/photos`)
  //     .then(response => {
  //       if (response.ok) {
  //         return response.json()
  //       }
  //       else {
  //         throw new Error(response.statusText)
  //       }
  //     })
  //     .then(data => this.props.updatePhotos(data))
  //     .catch(error => console.log(error.message))
  // };

  goBack = () => {
    this.props.history.goBack();
  };

  componentDidMount() {
    const {album} = this.props.match.params;
    const {fetchPhotos} = this.props;
    fetchPhotos(album);
  }

  render() {
    const {photos} = this.props;
    return (
      <div>
        <input type="button" value="Back" onClick={this.goBack}/>
        <Grid container spacing={3}>
          {photos.map(item => <Grid item xs={2} key={item.id}><img src={item.thumbnailUrl} alt={item.title}/></Grid>)}
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    photos: state.info.photos
  }
};

const mapDispatchToProps = {
  fetchPhotos,
  updatePhotos
};

export default connect(mapStateToProps, mapDispatchToProps)(Photos);