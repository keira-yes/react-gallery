import React from 'react';
import Users from './Users/Users';
import classes from './UsersPage.module.css';

const UsersPage = () => {
  return (
    <div className={classes.Users}>
      <h1 className="h1-title">Residents</h1>
      <Users />
    </div>
  )
}

export default UsersPage;