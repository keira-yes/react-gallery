import React from 'react';
import {Grid} from '@material-ui/core';
import Album from "./Album/Album";

class Albums extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      albums: []
    }
  }

  getAlbums = () => {
    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${this.props.match.params.id}`)
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        else {
          throw new Error(response.statusText)
        }
      })
      .then(data => this.setState({albums: data}))
      .catch(error => console.log(error.message))
  };

  componentDidMount() {
    this.getAlbums()
  }

  render() {
    const {albums} = this.state;
    console.log(albums);
    return (
      <Grid container spacing={3}>
        {albums.map(item => <Grid item xs={3} key={item.id}><Album album={item}/></Grid>)}
      </Grid>
    )
  }
}

export default Albums;