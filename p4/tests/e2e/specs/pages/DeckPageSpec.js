import mockDeckApi from '../../support/mockDeckApi.js'

const singleCardDeck = {
  "id": 123,
  "name": "Trick questions",
  "cards": [
    {
      "question": "Who's buried in Grant's Tomb?",
      "canonical_answer": "Grant",
      "alternate_answers": [ "Ulysses S. Grant" ]
    }
  ]
}

describe('Deck page', () => {
  beforeEach(function () {
    mockDeckApi([singleCardDeck])
  })

  it("has appropriate content", () => {
    cy.visit('/decks/123')
    cy.contains('h1', 'Trick questions')
    cy.contains("h2", "Who's buried in Grant's Tomb?")
  })

  it("Reacts appropriately to a correct answer", () => {
    cy.visit('/decks/123')
    cy.get('input[type="text"]').type("Grant")
    cy.contains('Guess!').click()
    cy.contains('Correct! "Who\'s buried in Grant\'s Tomb?" is "Grant"')
    cy.contains("Congratulations! You've completed all the cards in this deck.")
  })

  it("Reacts appropriately to an incorrect answer", () => {
    cy.visit('/decks/123')
    cy.get('input[type="text"]').type("Nixon")
    cy.contains('Guess!').click()
    cy.contains('Sorry, "Nixon" isn\'t right.')
  })

  it("Keeps track of progress as verified by the stats page", () => {
    cy.visit('/stats')
    cy.contains('Trick questions: 0/1')
    cy.visit('/decks/123/')
    cy.get('input[type="text"]').type("Grant")
    cy.contains('Guess!').click()
    cy.contains('Correct! "Who\'s buried in Grant\'s Tomb?" is "Grant"')
    cy.contains('Congratulations! You\'ve completed all the cards in this deck.')
    cy.visit('/stats')
    cy.contains('Trick questions: 1/1')

    cy.visit('/decks/123/')
    cy.contains('Reset Progress').click()
    cy.visit('/stats')
    cy.contains('Trick questions: 0/1')
  })
})
