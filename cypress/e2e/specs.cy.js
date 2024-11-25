it('create a new list, new card, delete a list', () => {
    cy.visit("/board/1");
    cy.get('[data-cy="add-list-input"]')
      .type('new list{enter}');
    cy.contains('Add another card')
      .type('new card{enter}');
    cy.get('[data-cy="list-options"]')
      .click();
    cy.contains('Delete')
      .click();
});

it.only('favourite this board', () => {
  cy.visit('/');
  cy.get('.star')
    .first()
    .click({force: true});
});
