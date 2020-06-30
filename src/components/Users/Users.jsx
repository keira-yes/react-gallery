import React from 'react';
import {Grid} from '@material-ui/core';
import User from "../User/User";
import classes from './Users.module.css';
import {useData} from '../../hoc/useData';

class Users extends React.Component {

  componentDidMount() {
    this.props.dataActions.fetchUsers();
  }

  render() {
    const {data, dataActions} = this.props;

    return (
      <div className={classes.Users}>
        <h1 className="h1-title">Residents</h1>
        {data.isLoading ? <p>Loading...</p> :
          <Grid container spacing={3}>
            {data.users.map(item => <Grid item xs={3} key={item.id}><User user={item}/></Grid>)}
          </Grid>
        }
        {data.errorDataMessage && <p>Something went wrong. {data.errorDataMessage}. <button onClick={() => dataActions.fetchUsers()}>Please try again!</button></p>}
      </div>
    )
  }
}

export default useData(Users);