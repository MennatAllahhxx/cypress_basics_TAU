it('check text of all cards in first ist', () => {
    cy.visit("/board/1");

    cy.get('[data-cy="card-text"')
      .then((cards) => {
        expect(cards[0]).to.have.text('bread');
        expect(cards[0]).to.have.text('bread');
        expect(cards[0]).to.have.text('bread');
        expect(cards[0]).to.have.text('bread');
      });
})