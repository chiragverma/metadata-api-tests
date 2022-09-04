import selectors from '../support/selectors.js';

// -- This is the common response assertion function --
Cypress.Commands.add('commonAssertion', () => {
    expect(response.status).to.eq(200);
    expect(response.body).to.not.be.null
    expect(response.headers['content-type']).to.include('application/json')
});