import React from 'react';
import ReactDOM from 'react-dom';
import ButtonToolBar from '../ButtonToolBar';

it('montar el componente sin problemas', () => {
    shallow(<ButtonToolBar onAdd={jest.fn()} onClear={jest.fn()} onRemove={jest.fn()} />);
});

it('no mostrar el boton Clear', () => {
    const el = shallow(<ButtonToolBar onAdd={jest.fn()} onClear={jest.fn()} onRemove={jest.fn()} />);
    const buttons = el.find('input[type="button"]').length;
    expect(buttons).toBe(2);
});

it('no mostrar el boton Clear con la propiedad showRemove en false', () => {
    const el = shallow(<ButtonToolBar showRemove={false} onAdd={jest.fn()} onClear={jest.fn()} onRemove={jest.fn()} />);
    const buttons = el.find('input[type="button"]').length;
    expect(buttons).toBe(2);
});

it('mostrar el boton Clear con la propiedad showRemove en true', () => {
    const el = shallow(<ButtonToolBar showRemove={true} onAdd={jest.fn()} onClear={jest.fn()} onRemove={jest.fn()} />);
    const buttons = el.find('input[type="button"]').length;
    expect(buttons).toBe(3);
});