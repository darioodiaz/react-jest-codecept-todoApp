import React from 'react';
import ReactDOM from 'react-dom';
import Container from '../Container';

it('montar el componente sin problemas', () => {
    shallow(<Container/>);
});

it('selecccionar el todo 1 y tener showRemove en true y idToRemove en 1', () => {
   const el = shallow(<Container/>);
   el.instance().onSelectItem(1);
   const state = { idToRemove: el.state().idToRemove, showRemove: el.state().showRemove };
   expect(state).toEqual({ idToRemove: 1, showRemove: true });
});

//Es un test de integracion, la funcionalidad depende de los componentes hijos
/*it('agregar un todo', () => {
   const el = mount(<Container/>);
   el.find('input[name="txt-new-todo"]').value = 'New Todo';
   el.instance().onAdd();
   const todos = el.state().todos;
   expect(todos).toEqual([{ id: 1, text: 'Todo1' },{ id: 2, text: 'Todo2' },{ id: 3, text: 'Todo3' }, { id: 4, text: 'New Todo'}]);
});*/

//Es un test de integracion, la funcionalidad depende de los componentes hijos
xit('remover un todo', () => {
   const el = shallow(<Container/>);
   el.setState({ idToRemove: 0 });
   el.instance().onRemove();
   const state = el.state();
   expect(state).toEqual({ idToRemove: null, showRemove: false, todos: [{ id: 2, text: 'Todo2' }, { id: 3, text: 'Todo3' }] });
});

it('borrar los todos y resetear el estado', () => {
   const el = shallow(<Container/>);
   el.instance().onClear();
   const state = el.state();
   expect(state).toEqual({ idToRemove: null, showRemove: false, todos: [] });
});