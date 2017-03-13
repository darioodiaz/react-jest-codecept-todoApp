import { Store } from 'reflux';
import Actions from '../actions/TodoActions';

class TodoStore extends Store {
    constructor() {
        super();
        const todos = [
            { id: 1, text: 'Todo1', selected: false },
            { id: 2, text: 'Todo2', selected: false },
            { id: 3, text: 'Todo3', selected: false }
        ];
        this.state = {
            todos
        };
        this.listenables = Actions;
    }

    onAddTodo(todo) {
        let newTodo = { id: ++this.state.todos.length, text: todo, selected: false };
        this.setState({ todos: this.state.todos.push(newTodo) });
    }
    onRemoveTodo(index) {
        this.state.todos.splice(index, 1);
        this.setState({ todos: this.state.todos });
    }
    onClearTodos() {
        this.setState({ todos: [] });
    }
}

export default TodoStore