// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

describe('Load the store and log in', () => {
  it('loads', () => {
    cy.visit('/')
  })

  it('can log in and reach homepage', () => {
    cy.get('#password').type('faicaw')
    cy.get('[type=submit]').click()
    // pause a second to ensure the page can change before checking
    cy.wait(1000)
    cy.location().should(($url) => {
      expect($url.pathname).to.not.equal('/password')
    })
  })
})
