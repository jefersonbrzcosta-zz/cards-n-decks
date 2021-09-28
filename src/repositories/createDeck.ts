import { v4 as uuid } from 'uuid'
import { Request, Response } from 'express'
import { FULL, SHORT } from '../data/decks'
import { shuffleCards } from '../helpers'

import { Decks } from '../controllers/index'
import { IDeck } from '../typings'

const createDeck = (request: Request, response: Response) => {
  const { type, shuffled } = request.body
  const cardsArray = type === 'FULL' ? FULL() : SHORT()

  const newDeck: IDeck = {
    deckId: uuid(),
    type,
    shuffled: shuffled ? true : false,
    remaining: cardsArray.length,
    cards: shuffled ? shuffleCards(cardsArray) : cardsArray,
  }

  const newDeckCreated = Decks.add(newDeck)
  if (newDeckCreated) return response.status(201).json(newDeckCreated)
  return response.status(401).json({ error: 'Deck not created' })
}

export default createDeck
