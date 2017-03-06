import React from 'react';
import ReactDOM from 'react-dom';
import TodoItem from '../TodoItem';

it('montar el componente sin problemas', () => {
    const todo = {
        text: 'Todo',
        selected: false
    };
    function onSelectItem() {
    }
    const div = document.createElement('div');
    ReactDOM.render(<TodoItem id={0} todo={todo.text} selected={todo.selected} onSelectItem={onSelectItem} />, div);
});

describe('Control de estados', () => {
    let todo = {
        text: 'Todo',
        selected: false
    };
    function onSelectItem() { }

    it(`tener texto: ${todo.text}`, () => {
        const div = document.createElement('div');
        ReactDOM.render(<TodoItem id={0} todo={todo.text} selected={todo.selected} onSelectItem={onSelectItem} />, div);
        const todoText = div.querySelector('input[type="text"]').value;
        expect(todoText).toBe(todo.text);
    });

    it(`no estar seleccionado`, () => {
        const div = document.createElement('div');
        ReactDOM.render(<TodoItem id={0} todo={todo.text} selected={todo.selected} onSelectItem={onSelectItem} />, div);
        const isChecked = div.querySelector('input[type="checkbox"]').checked;
        expect(isChecked).toBeFalsy();
    });

    it(`estar seleccionado`, () => {
        let todo = {
            text: 'Todo',
            selected: true
        };
        const div = document.createElement('div');
        ReactDOM.render(<TodoItem id={0} todo={todo.text} selected={todo.selected} onSelectItem={onSelectItem} />, div);
        const isChecked = div.querySelector('input[type="checkbox"]').checked;
        expect(isChecked).toBeTruthy();
    });
});