import React from "react";
import PropTypes from "prop-types";

const ErrorMessage = ({reloadData}) => {
  return (
    <p>Something went wrong.
      <button onClick={() => reloadData()}>Please try again!</button>
    </p>
  )
};

export default ErrorMessage;

ErrorMessage.propTypes = {
  album_id: PropTypes.func
};