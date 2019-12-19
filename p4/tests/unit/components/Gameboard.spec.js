import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Gameboard from '@/components/Gameboard.vue'

describe('Gameboard', () => {
  const currentCard = {
    question: "Who's buried in Grant's Tomb?",
    canonical_answer: "Ulysses S. Grant",
    alternate_answers: ["Grant"]
  }

  describe('when there is a current card', () => {
    it("contains the card's question text", () => {
      const wrapper = shallowMount(Gameboard, {
        propsData: {
          currentCard
        }
      })

      expect(wrapper.text()).to.include(
        "Who's buried in Grant's Tomb?"
      )
    })
  })

  describe('when there is not a current card', () => {
    it('contains a congratulatory message', () => {
      const wrapper = shallowMount(Gameboard)
      expect(wrapper.text()).to.include(
        "Congratulations! You've completed all the cards in this deck."
      )
    })
  })
})
