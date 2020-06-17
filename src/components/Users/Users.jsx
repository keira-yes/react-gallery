import React from 'react';
import {Grid} from '@material-ui/core';
import User from "../User/User";
import classes from './Users.module.css';

class Users extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    }
  }

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
    this.getUsers()
  }

  render() {
    const {users} = this.state;

    return (
      <div className={classes.Users}>
        <h1 className="h1-title">Residents</h1>
        <Grid container spacing={3}>
          {users.map(item => <Grid item xs={3} key={item.id}><User user={item}/></Grid>)}
        </Grid>
      </div>
    )
  }
}

export default Users;