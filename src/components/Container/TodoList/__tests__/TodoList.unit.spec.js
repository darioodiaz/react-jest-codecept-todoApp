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
        expect(item).toEqual(todos[i]);
    });
});

it('llamar a la funcion onSelectItem', () => {
    const todos = [{ id: 0, text: 'Todo 0'}];
    const onSelectItem = jest.fn();
    const el = shallow(<TodoList todos={todos} onSelectItem={onSelectItem} />);
    el.instance().onSelectItem(0);
    expect(onSelectItem).toHaveBeenCalledWith(0);
});

it('cambiar los todos y tener los mismos cambiados', () => {
    const todos = [{ id: 0, text: 'Todo 0'}];
    const newTodos = [{ id: 0, text: 'Todo 0'}, { id: 1, text: 'Todo 1'}];
    const el = mount(<TodoList todos={todos} onSelectItem={jest.fn()} />);
    expect(el.state().todos).toEqual(todos);
    el.setProps({todos: newTodos});
    expect(el.state().todos).toEqual(newTodos);
});

it('tener un nuevo todo y llamar a la funcion clearTodo y borrar el estado', () => {
    const todos = [{ id: 0, text: 'Todo 0'}];
    const onSelectItem = jest.fn();
    const el = mount(<TodoList todos={todos} onSelectItem={onSelectItem} />);
    el.instance().onNewTodo('Todo1');
    expect(el.state().newTodo).toBe('Todo1');
    el.instance().clearNewTodo();
    expect(el.state().newTodo).toBe('');
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
    expect(_todo).toEqual(todo);
});