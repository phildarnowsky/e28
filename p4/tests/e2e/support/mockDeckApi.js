const defaultDeckData = [
  {
    "id": 1,
    "name": "German vocabulary",
    "cards": [
      {
        "question": "die Bestätigung",
        "canonical_answer": "confirmation",
        "alternate_answers": [ "verification", "certificate", "endorsement" ]
      },
      {
        "question": "die Geige",
        "canonical_answer": "violin",
        "alternate_answers": [ "fiddle" ]
      },
      {
        "question": "reden",
        "canonical_answer": "to converse",
        "alternate_answers": [ "to talk", "converse", "talk" ]
      }
    ]
  },
  {
    "id": 2,
    "name": "Chemical symbols",
    "cards": [
      {
        "question": "C",
        "canonical_answer": "carbon",
        "alternate_answers": []
      },
      {
        "question": "Fe",
        "canonical_answer": "iron",
        "alternate_answers": [ ]
      }
    ]
  },
  {
    "id": 3,
    "name": "State capitals",
    "cards": [
      {
        "question": "Montpelier",
        "canonical_answer": "Vermont",
        "alternate_answers": [ "VT" ]
      },
      {
        "question": "Annapolis",
        "canonical_answer": "Maryland",
        "alternate_answers": [ "MD" ]
      },
      {
        "question": "Albany",
        "canonical_answer": "New York",
        "alternate_answers": [ "NY" ]
      },
      {
        "question": "Sacramento",
        "canonical_answer": "California",
        "alternate_answers": [ "CA" ]
      }
    ]
  }
]

const mockDeckApi = (deckData) => {
  deckData = deckData || defaultDeckData

  cy.server()
  cy.route({
    method: 'GET',
    url: '/phildarnowsky/e28_p3_api/decks',
    response: JSON.stringify(deckData)
  })
}

export default mockDeckApi
