it.only('getting a list of boards', () => {
    cy.intercept({
        method: 'GET',
        url: '/api/boards'
    }, {
        body: [{
            name: 'TAU',
            starred: true,
            id: 11,
            user: 0,
            created: '2024-11-26'
        }]
    }).as('boardList');

    cy.visit('/');
});