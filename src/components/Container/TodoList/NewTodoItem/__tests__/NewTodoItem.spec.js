import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import NewTodoItem from '../NewTodoItem';

it('montar el componente sin problemas', () => {
    function onNewTodo() {
    }
    const div = document.createElement('div');
    ReactDOM.render(<NewTodoItem onNewTodo={onNewTodo} />, div);
});

const todoText = 'Todo';

it(`tener texto: ${todoText}`, () => {
    let onNewTodoSpy = jest.fn();
    const el = mount(<NewTodoItem onNewTodo={onNewTodoSpy} />);

    el.find('input[type="text"]').simulate('change', { target: { value: todoText }, currentTarget: { value: todoText } });
    expect(onNewTodoSpy).toHaveBeenCalledWith(todoText);

    const _todoText = el.state().todo;
    expect(_todoText).toBe(todoText);
});