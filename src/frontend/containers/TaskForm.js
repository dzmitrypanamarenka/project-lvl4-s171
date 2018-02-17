import { connect } from 'react-redux';
import Component from '../components/TaskForm.jsx';
import * as actionCreators from '../actions';

const mapStateToProps = (state) => {
  return {
    tasks: Object.values(state.tasks)
  };
};

const Container = connect(
  mapStateToProps,
  actionCreators,
)(Component);

export default Container;