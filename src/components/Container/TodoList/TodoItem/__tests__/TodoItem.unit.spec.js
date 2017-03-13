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

it('actualizar el estado cuando las propiedades cambien y llamar a la funcion componentWillReceiveProps y tener el estado actualizado', () => {
    const props = { todo: 'Todo', selected: false, onSelectItem: jest.fn(), id: 0 };
    const newProps = { todo: 'Todo1', selected: true };
    const el = shallow(<TodoItem id={props.id} todo={props.todo} selected={props.selected} onSelectItem={props.onSelectItem} />);
    el.setProps(newProps);
    const state = el.state();
    expect(toJson(el)).toMatchSnapshot();
    expect(state).toEqual(newProps);
});

describe('Control de estados', () => {
    let todo = {
        text: 'Todo predefinido'
    };

    it(`tener texto: ${todo.text}`, () => {
        const el = shallow(<TodoItem id={0} todo={todo.text} selected={false} onSelectItem={jest.fn()} />);
        const todoText = el.find('input[name="todo-item-0"]').prop('value');
        expect(toJson(el)).toMatchSnapshot();
        expect(todoText).toBe(todo.text);
    });

    it('no estar seleccionado', () => {
        const el = shallow(<TodoItem id={0} todo={todo.text} selected={false} onSelectItem={jest.fn()} />);
        const isChecked = el.find('input[type="checkbox"]').prop('checked');
        expect(toJson(el)).toMatchSnapshot();
        expect(isChecked).toBeFalsy();
    });

    it('estar seleccionado', () => {
        const el = shallow(<TodoItem id={0} todo={todo.text} selected={true} onSelectItem={jest.fn()} />);
        const isChecked = el.find('input[type="checkbox"]').prop('checked');
        expect(toJson(el)).toMatchSnapshot();
        expect(isChecked).toBeTruthy();
    });

    it('no estando seleccionado deberia cambia a seleccionado', () => {
        let todo = { text: 'Todo', selected: false };
        const onSelectItemSpy = jest.fn();
        const el = shallow(<TodoItem id={0} todo={todo.text} selected={todo.selected} onSelectItem={onSelectItemSpy} />);
        el.find('input[type="checkbox"]').simulate('change', { target: { checked: true }, currentTarget: { checked: true } });
        const state = el.state().selected;
        expect(toJson(el)).toMatchSnapshot();
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