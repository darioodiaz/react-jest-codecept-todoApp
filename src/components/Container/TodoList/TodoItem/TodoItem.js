import React, { Component, PropTypes } from 'react';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: props.todo,
      selected: props.selected
    };
    this.onTodoSelect = this.onTodoSelect.bind(this);
  }

  onTodoSelect(event) {
    this.setState({ selected: event.currentTarget.checked });
    this.props.onSelectItem(event.currentTarget.checked ? this.props.id : null);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ todo: nextProps.todo, selected: nextProps.selected });
  }

  render() {
    return (
      <div className={`todo-item ${this.state.selected ? 'todo-item_selected' : ''}`}>
        <input type="checkbox" checked={this.state.selected} onChange={this.onTodoSelect} />
        <input name={`todo-item-${this.props.id}`} type="text" readOnly value={this.state.todo} />
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  onSelectItem: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
};

export default TodoItem;