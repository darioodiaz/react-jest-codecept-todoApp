import React, { Component } from 'react';
import TodoList from './TodoList/TodoList';
import ButtonToolBar from './ButtonToolBar/ButtonToolBar';

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                { id: 1, text: 'Todo1' },
                { id: 2, text: 'Todo2' },
                { id: 3, text: 'Todo3' }
            ],
            showRemove: false,
            idToRemove: null
        }
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
        todo.id = this.state.todos.length + 1;
        this.state.todos.push(todo);
        this.refs.todoList.clearNewTodo();
        this.forceUpdate();
    }
    onRemove() {
        let _id;
        this.state.todos.forEach((item, i) => {
            if (item.id === this.state.idToRemove) {
                _id = i;
                return;
            }
        });
        this.state.todos.splice(_id, 1);
        this.setState({ idToRemove: null, showRemove: false });
    }
    onClear() {
        this.setState({ todos: [], idToRemove: null, showRemove: false });
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