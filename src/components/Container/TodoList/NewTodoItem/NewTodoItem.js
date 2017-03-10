import React, { Component, PropTypes } from 'react';

class NewTodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: ''
    };
    this.onChange = this.onChange.bind(this);
  }
  clear() {
    this.setState({ todo: '' });
  }
  onChange(event) {
    this.setState({ todo: event.currentTarget.value });
    this.props.onNewTodo(event.currentTarget.value);
  }

  render() {
    return (
      <div className="todo-item">
        <input name="txt-new-todo" type="text" onChange={this.onChange} value={this.state.todo} />
      </div>
    );
  }
}
NewTodoItem.propTypes = {
  onNewTodo: PropTypes.func.isRequired
}

export default NewTodoItem;