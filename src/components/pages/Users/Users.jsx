import React from 'react';
import {Grid} from '@material-ui/core';
import User from "./User/User";
import classes from './Users.module.css';
import {withUsers} from '../../../hoc/withUsers';

class Users extends React.Component {

  componentDidMount() {
    this.props.usersActions.fetchUsers();
  }

  render() {
    const {users, usersActions} = this.props;

    return (
      <div className={classes.Users}>
        <h1 className="h1-title">Residents</h1>
        {users.isLoading ? <p>Loading...</p> :
          <Grid container spacing={3}>
            {users.users.map(item => <Grid item xs={3} key={item.id}><User user={item}/></Grid>)}
          </Grid>
        }
        {users.isError && <p>Something went wrong. <button onClick={() => usersActions.fetchUsers()}>Please try again!</button></p>}
      </div>
    )
  }
}

export default withUsers(Users);