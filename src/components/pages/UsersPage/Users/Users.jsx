import React from 'react';
import {Grid} from '@material-ui/core';
import {withUsers} from '../../../../hoc/withUsers';
import Loader from '../../../UIComponents/Loader/Loader';
import ErrorMessage from '../../../UIComponents/ErrorMessage/ErrorMessage';
import User from "./User/User";

class Users extends React.Component {

  componentDidMount() {
    this.props.usersActions.fetchUsers();
  }

  render() {
    const {users, usersActions} = this.props;

    return (
      <>
        {users.isLoading && <Loader />}
        {users.isError && <ErrorMessage reloadData={usersActions.fetchUsers} />}

        <Grid container spacing={3}>
          {users.users.map(item => <Grid item xs={3} key={item.id}><User user={item}/></Grid>)}
        </Grid>
      </>
    )
  }
}

export default withUsers(Users);