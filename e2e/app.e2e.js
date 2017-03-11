
Feature('Aplicacion');

Scenario('cargar pagina y ver 3 todos y un todo vacio', (I) => {
    I.amOnPage('/');
    I.see('Todo App');
    I.seeNumberOfElements('.todo-item', 4);
    I.seeNumberOfElements('input[name="txt-new-todo"]', 1);
});
