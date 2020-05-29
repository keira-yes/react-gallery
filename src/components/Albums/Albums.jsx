import React from 'react';
import {Grid} from '@material-ui/core';

class Albums extends React.Component {
  // constructor(props) {
  //   super(props);
  //
  //   this.state = {
  //     albums: []
  //   }
  // }

  getUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        else {
          throw new Error(response.statusText)
        }
      })
      .then(data => this.setState({users: data}))
      .catch(error => console.log(error.message))
  };

  componentDidMount() {
    // this.getUsers()
  }

  render() {
    // const {albums} = this.state;
    console.log(this.props.match.params)
    return (
      <p>Albums</p>
      // <Grid container spacing={3}>
      //   {albums.map(item => <Grid item xs={3} key={item.id}>Album</Grid>)}
      // </Grid>
    )
  }
}

export default Albums;