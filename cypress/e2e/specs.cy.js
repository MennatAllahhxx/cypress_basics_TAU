/// <reference types='cypress'/>

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

it('favourite this board', () => {
  cy.visit('/');
  cy.get('.star')
    .first()
    .click({force: true});
});

it.only('making assertions', () => {
  cy.visit('/board/1');

  cy.get('[data-cy="new-card"]')
    .click();
  cy.get('[data-cy="new-card-input"]')
    .type('bread{enter}');
  cy.get('[data-cy="new-card-input"]')
    .type('milk{enter}');

  cy.get('[data-cy="card"]')
    .should("be.visible");
  cy.get('[data-cy="card"]')
    .should("have.length", 2);

  cy.get('[data-cy="card-checkbox"]')
    .first()
    .check();
  cy.get('[data-cy="due-date"')
    .first()
    .should('have.class','completed');
  
  cy.get('[data-cy="list-name"')
    .should('have.value','groceries');
  cy.get('[data-cy="card-text"')
    .first()
    .should('have.text','bread');
})
