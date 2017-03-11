
Feature('Agregar Todo');

Scenario('agregar un todo "Nuevo" y el campo nuevo todo debe estar vacio', (I) => {
    I.amOnPage('/');
    I.fillField('txt-new-todo', 'Nuevo');
    I.click('btn-add');
    I.seeNumberOfElements('.todo-item', 5);
    I.seeInField('txt-new-todo', '');
});
