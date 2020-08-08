import React from 'react';
import {connect} from "react-redux";
import { bindActionCreators } from 'redux';
import * as usersActions from "../redux/users/users.actions";

const mapStateToProps = state => {
  return {
    users: state.users
  }
};

const mapDispatchToProps = dispatch => ({
  usersActions: bindActionCreators(usersActions, dispatch)
});

export const withUsers = ComponentName =>
  connect(mapStateToProps, mapDispatchToProps)
  (class WithUsers extends React.Component {
    render() {
      return <ComponentName {...this.props} />
    }
  });