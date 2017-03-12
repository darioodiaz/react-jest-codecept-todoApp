import React from 'react';
import { Component } from 'reflux';
import TodoList from './TodoList/TodoList';
import ButtonToolBar from './ButtonToolBar/ButtonToolBar';
import TodoStore from '../../stores/TodoStore.js';
import Actions from '../../actions/TodoActions';

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            showRemove: false,
            idToRemove: null
        }
        this.store = TodoStore;
        this.onAdd = this.onAdd.bind(this);
        this.onClear = this.onClear.bind(this);
        this.onRemove = this.onRemove.bind(this);
        this.onSelectItem = this.onSelectItem.bind(this);
    }
    onSelectItem(id) {
        this.setState({ showRemove: id !== null, idToRemove: id });
    }
    onAdd() {
        let todo = this.refs.todoList.getNewTodo();
        this.refs.todoList.clearNewTodo();
        Actions.addTodo(todo);
    }
    onRemove() {
        Actions.removeTodo(this.state.idToRemove);
        this.setState({ idToRemove: null, showRemove: false });
    }
    onClear() {
        Actions.clearTodos();
        this.setState({ idToRemove: null, showRemove: false });
    }
    render() {
        return (
            <div className="todo-list-container">
                <h1>Todo App</h1>
                <TodoList ref="todoList" onSelectItem={this.onSelectItem} todos={this.state.todos} />
                <ButtonToolBar showRemove={this.state.showRemove} onAdd={this.onAdd} onRemove={this.onRemove} onClear={this.onClear} />
            </div>
        );
    }
}

export default Container;