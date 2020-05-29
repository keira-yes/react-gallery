import React from 'react';
import {Grid} from '@material-ui/core';

class Photos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: []
    }
  }

  getPhotos = () => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${this.props.match.params.album}/photos`)
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        else {
          throw new Error(response.statusText)
        }
      })
      .then(data => this.setState({photos: data}))
      .catch(error => console.log(error.message))
  };

  componentDidMount() {
    this.getPhotos()
  }

  render() {
    const {photos} = this.state;
    console.log(photos);
    return (
      <Grid container spacing={3}>
        {photos.map(item => <Grid item xs={2} key={item.id}><img src={item.thumbnailUrl} alt={item.title}/></Grid>)}
      </Grid>
    )
  }
}

export default Photos;