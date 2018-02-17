import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions'; // eslint-disable-line
import { reducer as formReducer } from 'redux-form'; // eslint-disable-line
import * as actions from '../actions'; // eslint-disable-line

const tasks = handleActions({
  [actions.addTask](state, { payload: { task } }) {
    return { ...state, [task.id]: task };
  },
}, {});

export default combineReducers({
  form: formReducer,
  tasks,
});