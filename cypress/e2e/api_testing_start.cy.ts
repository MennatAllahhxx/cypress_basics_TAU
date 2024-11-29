it('sends a request over api', () => {
    cy.request('POST', '/api/boards', {
        name: 'created via cy.request()'
    });
    cy.request('DELETE', 'api/boards/1');

    cy.visit('/');

    
});

it('response gets 201 status', () => {
    cy.request('POST', '/api/boards', {
        name: 'created via cy.request()'
    }).its('status')
      .should('eq', 201);
});

it('testing board list', () => {
    cy.request({
        method: 'GET',
        url: '/api/boards',
        headers: {
            accept: 'application/json'
        }
    }).then(boards => {
        expect(boards.status).eq(200);
        expect(boards.body).to.have.length(1);
        expect(boards.body[0].id).to.be.a('number');
    })
});

before('resetting database', () => {
    cy.request('POST', '/api/reset')
})