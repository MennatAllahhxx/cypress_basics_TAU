it('this is my first test', () => {
    cy.visit("/");
    cy.contains('new board');
    cy.get('.board');
    cy.get('#board-1');
    cy.get('[data-cy=board-item]');
    cy.contains('.board', 'new board');

    cy.get('.board')
      .first();
    cy.get('.board')
      .last();

    cy.get('.board')
      . eq(0);
    cy.get('.board')
      . eq(1);
})
