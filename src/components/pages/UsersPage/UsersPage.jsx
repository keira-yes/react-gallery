import React from 'react';
import Users from './Users/Users';
import classes from './usersPage.module.css';

const UsersPage = () => {
  return (
    <div className={classes.users}>
      <h1 className="h1-title">Residents</h1>
      <Users />
    </div>
  )
};

export default UsersPage;