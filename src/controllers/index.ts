import { IDeck } from '../typings'
import { shuffleCards } from '../helpers'

let data: Array<IDeck> = []

export const Decks = {
  add: function add(newDeck: IDeck) {
    data.push(newDeck)
    return (({ cards, ...rest }) => rest)(newDeck)
  },
  get: function get() {
    return data
  },
  find: function find(deckId: string) {
    const results = data.find((deck) => deck.deckId === deckId)
    return results
  },
  replace: function replace(deckIndex: number, cards: any) {
    data[deckIndex].cards = cards
    data[deckIndex].remaining = cards.length
  },
}
