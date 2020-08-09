import React from "react";

const ErrorMessage = ({reloadData}) => {
  return (
    <p>Something went wrong.
      <button onClick={() => reloadData()}>Please try again!</button>
    </p>
  )
};

export default ErrorMessage;