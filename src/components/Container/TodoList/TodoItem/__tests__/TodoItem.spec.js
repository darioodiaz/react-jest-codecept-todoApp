import React from 'react';
import ReactDOM from 'react-dom';
import TodoItem from '../TodoItem';

it('montar el componente sin problemas', () => {
    const todo = {
        text: 'Todo',
        selected: false
    };
    shallow(<TodoItem id={0} todo={todo.text} selected={todo.selected} onSelectItem={jest.fn()} />);
});

describe('Control de estados', () => {
    let todo = {
        text: 'Todo predefinido'
    };

    it(`tener texto: ${todo.text}`, () => {
        const el = shallow(<TodoItem id={0} todo={todo.text} selected={false} onSelectItem={jest.fn()} />);
        const todoText = el.find('input[name="todo-item-0"]').prop('value');
        expect(todoText).toBe(todo.text);
    });

    it('no estar seleccionado', () => {
        const el = shallow(<TodoItem id={0} todo={todo.text} selected={false} onSelectItem={jest.fn()} />);
        const isChecked = el.find('input[type="checkbox"]').prop('checked');
        expect(isChecked).toBeFalsy();
    });

    it('estar seleccionado', () => {
        const el = shallow(<TodoItem id={0} todo={todo.text} selected={true} onSelectItem={jest.fn()} />);
        const isChecked = el.find('input[type="checkbox"]').prop('checked');
        expect(isChecked).toBeTruthy();
    });

    it('no estando seleccionado deberia cambia a seleccionado', () => {
        let todo = { text: 'Todo', selected: false };
        const onSelectItemSpy = jest.fn();
        const el = shallow(<TodoItem id={0} todo={todo.text} selected={todo.selected} onSelectItem={onSelectItemSpy} />);
        el.find('input[type="checkbox"]').simulate('change', { target: { checked: true }, currentTarget: { checked: true } });
        const state = el.state().selected;
        expect(state).toBeTruthy();
    });

    it('no estando seleccionado deberia cambia a seleccionado, luego volver a no estar seleccionado', () => {
        let todo = { text: 'Todo', selected: false };
        const onSelectItemSpy = jest.fn();
        const el = shallow(<TodoItem id={0} todo={todo.text} selected={todo.selected} onSelectItem={onSelectItemSpy} />);
        el.find('input[type="checkbox"]').simulate('change', { target: { checked: true }, currentTarget: { checked: true } });
        let state = el.state().selected;
        expect(state).toBeTruthy();

        el.find('input[type="checkbox"]').simulate('change', { target: { checked: false }, currentTarget: { checked: false } });
        state = el.state().selected;
        expect(state).toBeFalsy();
    });
});