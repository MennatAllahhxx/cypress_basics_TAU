it.only('getting a list of boards', () => {
    cy.intercept({
        method: 'GET',
        url: '/api/boards'
    }, {
        fixture: 'twoBoards.json'
    }).as('boardList');

    cy.visit('/');
});