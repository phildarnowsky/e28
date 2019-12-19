import mockDeckApi from '../../support/mockDeckApi.js'

describe('Home page', () => {
  beforeEach(function () {
    mockDeckApi()
  })

  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'Available Decks')
  })

  it('Has a link to each available deck', () => {
    cy.visit('/')
    cy.contains('a', 'German vocabulary')
    cy.contains('a', 'Chemical symbols')
    cy.contains('a', 'State capitals')
    cy.contains('a', 'Chemical symbols').click()
    cy.contains('h1', 'Chemical symbols')
  })

  it('Has a link to the stats page', () => {
    cy.visit('/')
    cy.contains('a', 'View stats').click()
    cy.contains('h1', 'Stats')
  })
})
