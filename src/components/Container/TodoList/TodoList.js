import React, { Component, PropTypes } from 'react';
import TodoItem from './TodoItem/TodoItem.js';
import NewTodoItem from './NewTodoItem/NewTodoItem.js';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: props.todos,
            newTodo: ''
        };
        this.onNewTodo = this.onNewTodo.bind(this);
        this.onSelectItem = this.onSelectItem.bind(this);
    }
    onSelectItem(id) {
        this.props.onSelectItem(id);
    }
    getNewTodo() {
        return {
            text: this.state.newTodo,
            selected: false
        };
    }
    clearNewTodo() {
        this.refs.newTodo.clear();
        this.setState({ newTodo: '' });
    }
    onNewTodo(todo) {
        this.setState({ newTodo: todo });
    }
    componentWillReceiveProps(nextProps) {
        this.setState({ todos: nextProps.todos });
    }

    render() {
        return (
            <ul className="todo-list">
                {this.state.todos.map((todo, i) => <TodoItem onSelectItem={this.onSelectItem} id={todo.id} key={todo.id} todo={todo.text} selected={todo.selected} />)}
                <NewTodoItem ref="newTodo" onNewTodo={this.onNewTodo} />
            </ul>
        );
    }
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    onSelectItem: PropTypes.func.isRequired,
    newTodo: PropTypes.string
};

export default TodoList;