import _ from 'lodash';
import { createAction } from 'redux-actions';

export const addTask = createAction('TASK_ADD', task =>
  ({ task: { ...task, state: 'active', id: _.uniqueId() } }));