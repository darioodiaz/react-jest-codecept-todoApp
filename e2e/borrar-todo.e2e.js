
Feature('Borrar Todo');

Scenario('borrar un todo', (I) => {
    I.amOnPage('/');
    I.click('.todo-item:nth-child(1) input[type="checkbox"]');
    I.click('input[name="btn-remove"]');
    I.seeNumberOfElements('.todo-item', 3);
});
