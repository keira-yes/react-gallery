import React from 'react';
import {connect} from "react-redux";
import { bindActionCreators } from 'redux';
import * as dataActions from "../redux/data/data.actions";

const mapStateToProps = state => {
  return {
    data: state.data
  }
};

const mapDispatchToProps = dispatch => ({
  dataActions: bindActionCreators(dataActions, dispatch)
});

export const useData = ComponentName =>
  connect(mapStateToProps, mapDispatchToProps)
  (class UseData extends React.Component {
    render() {
      return <ComponentName {...this.props} />
    }
  });