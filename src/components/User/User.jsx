import React from 'react';
import classes from './User.module.css'

const User = ({user}) => {
  return (
    <div className={classes.User}>
      <div className={classes.Image}>{user.name[0]}</div>
      <h3 className={classes.Title}>{user.name}</h3>
      <p>{user.address.city}</p>
      <a href="#" className={classes.Portfolio}>View portfolio</a>
    </div>
  )
};

export default User;