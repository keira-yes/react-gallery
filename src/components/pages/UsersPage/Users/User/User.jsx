import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import classes from './User.module.css'

const User = ({user}) => {
  return (
    <div className={classes.User}>
      <div className={classes.Image}>{user.name[0]}</div>
      <h3 className={classes.Title}>{user.name}</h3>
      <p>{user.address.city}</p>
      <Link to={`/user/${user.id}/albums`} className={classes.Portfolio}>View portfolio</Link>
    </div>
  )
};

export default User;

User.propTypes = {
  user: PropTypes.object.isRequired,
};