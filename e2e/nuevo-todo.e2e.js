
Feature('Agregar Todo');

Scenario('cargar pagina', (I) => {
    I.amOnPage('/');
    I.see('Todo App');
});

Scenario('cargar pagina', (I) => {
    I.amOnPage('/');
    I.seeElement('.todo-list');
    let todos = 
});
