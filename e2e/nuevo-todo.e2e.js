
Feature('Agregar Todo');

Scenario('cargar pagina y ver 3 todos y un todo vacio', (I) => {
    I.amOnPage('/');
    I.see('Todo App');
    I.seeNumberOfElements('.todo-item', 3);
    I.seeNumberOfElements('txt-new-todo', 1);
});
