import React, { Component } from 'react';
import Actions from '../actions/TodoActions.js';

class NewTodoPage extends Component {
    constructor(props) {
        super(props);
        this.state = { todoText: '' };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.back = this.back.bind(this);
    }
    back() {
        this.props.router.navigate('/');
    }
    onSubmit(event) {
        event.preventDefault();
        Actions.newTodo(this.state.todoText);
        this.back();
    }
    onChange(event) {
        this.setState({ todoText: event.currentTarget.value });
    }
    render() {
        return (
            <div>
                <form name="new-todo-form" onSubmit={this.onSubmit}>
                    <label>Title</label>
                    <input type="text" value={this.state.todoText} onChange={this.onChange}/>
                    <button type="submit">Add</button>
                    <button type="button" onClick={this.back}>Back</button>
                </form>
            </div>
        );
    }
}

export default NewTodoPage;