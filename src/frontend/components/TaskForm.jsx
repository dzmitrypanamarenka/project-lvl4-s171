import React from 'react';
import { Field, reduxForm } from 'redux-form';

class NewTaskForm extends React.Component{
  addTask = ({ text }) => {
    this.props.addTask({ text });
    this.props.reset();
  };
  updateNewTaskText = e => this.props.updateNewTaskText({ text: e.target.value });

  renderTasks() {
    const tasks = this.props.tasks;

    return <ul className="list-group">
      {tasks.map(({ id, text, state }) =>
        <li key={id} className="list-group-item d-flex justify-content-end">
          { text }
        </li>,
      )}
    </ul>;
  }
  render() {
    const { newTaskText } = this.props;

    return <div>
      <form action="" className="form-inline" onSubmit={this.props.handleSubmit(this.addTask)}>
      <div className="form-group mx-3">
        <Field name="text" type="text" component='input' required  />
      </div>
      <button type="submit" className="btn btn-primary btn-sm">Add</button>
    </form>
    { this.renderTasks() }
    </div>
  }


}
export default reduxForm({
  form: 'newTask'
})(NewTaskForm);