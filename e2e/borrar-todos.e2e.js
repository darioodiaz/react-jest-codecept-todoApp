
Feature('Borrars Todos');

Scenario('borrar todos los todos', (I) => {
    I.amOnPage('/');
    I.click('input[name="btn-clear"]');
    I.seeNumberOfElements('.todo-item', 1);
});
