it('check text of all cards in first ist', () => {
    cy.intercept('GET', '/api/lists?boardId=1')
      .as('getLists');
    cy.visit("/board/1");

    cy.wait('@getLists');
    cy.get('[data-cy=list')
      .should('not.exist');
});

it.only('deleting a list', () => {
    cy.intercept({
        method: 'DELETE',
        url: '/api/lists/*'
    }).as('deleteList');

    cy.visit('/board/2');
    cy.get('[data-cy="add-list-input"]')
      .type('new list{enter}');
    
    cy.get('[data-cy=list-options]')
      .click();
    cy.get('[data-cy=delete-list]')
      .click();
    
    cy.wait('@deleteList')
      .its('response.statusCode')
      .should('eq', 200);
})