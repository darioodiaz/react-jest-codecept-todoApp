import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import NewTodoItem from '../NewTodoItem';

it('montar el componente sin problemas', () => {
    shallow(<NewTodoItem onNewTodo={jest.fn()} />);
});

it('simular un evento de teclado y haber llamado a la funcion de cambio 1 sola vez y con parametro Todo', () => {
    const todoText = 'Todo';
    let onNewTodoSpy = jest.fn();
    const el = shallow(<NewTodoItem onNewTodo={onNewTodoSpy} />);

    el.find('input').simulate('change', { target: { value: todoText }, currentTarget: { value: todoText } });
    expect(onNewTodoSpy.mock.calls.length).toEqual(1);
    expect(onNewTodoSpy).toHaveBeenCalledWith(todoText);

    const _todoText = el.state().todo;
    expect(_todoText).toBe(todoText);
});

it('simular un evento de teclado y tener texto Todo', () => {
    const todoText = 'Todo';
    let onNewTodoSpy = jest.fn();
    const el = shallow(<NewTodoItem onNewTodo={onNewTodoSpy} />);

    el.find('input').simulate('change', { target: { value: todoText }, currentTarget: { value: todoText } });
    const _todoText = el.state().todo;
    expect(_todoText).toBe(todoText);
});

it('resetear su estado', () => {
    const todoText = 'Todo';
    let onNewTodoSpy = jest.fn();
    const el = shallow(<NewTodoItem onNewTodo={onNewTodoSpy} />);
    el.setState({ todo: 'Todo' });
    const _todoTextBeforeClear = el.state().todo;
    expect(_todoTextBeforeClear).toBe('Todo');
    
    el.instance().clear();
    const _todoText = el.state().todo;
    expect(_todoText).toBe('');
});