import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import TodoList from '../TodoList';

it('montar el componente sin problemas', () => {
    const todos = [{ id: 0, text: 'Todo 0'}];
    shallow(<TodoList todos={todos} onSelectItem={jest.fn()} />);
});

it('tener la misma cantidad de todos', () => {
    const todos = [{ id: 0, text: 'Todo 0'}, { id: 1, text: 'Todo 1'}];
    const el = shallow(<TodoList todos={todos} onSelectItem={jest.fn()} />);
    const _todos = el.state().todos;
    _todos.forEach( (item, i) => {
        expect(item).toBe(todos[i]);
    });
});

it('tener un nuevo todo con texto Todo', () => {
    const todos = [{ id: 0, text: 'Todo 0'}, { id: 1, text: 'Todo 1'}];
    const el = shallow(<TodoList todos={todos} onSelectItem={jest.fn()} onNewTodo={jest.fn()} />);
    el.instance().onNewTodo('Todo');
    const todo = el.state().newTodo;
    expect(todo).toBe('Todo');
});

it('tener un nuevo todo con texto Todo y no estar seleccionado', () => {
    const todos = [{ id: 0, text: 'Todo 0'}, { id: 1, text: 'Todo 1'}];
    const el = shallow(<TodoList todos={todos} onSelectItem={jest.fn()} onNewTodo={jest.fn()} />);
    const todo = { text: 'Todo', selected: false };
    el.instance().onNewTodo(todo.text);
    const _todo = el.instance().getNewTodo();
    expect(_todo).toBe(todo);
});