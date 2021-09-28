import { Request, Response } from 'express'
import { Decks } from '../controllers/index'
import { drawCards } from '../helpers'

const drawCardsDeck = (request: Request, response: Response) => {
  const { id, count } = request.params
  if (!id || !count)
    return response.status(400).json({
      error: 'You need to pass a valid deckID: /{deckId}/draw/{count}',
    })

  const decksArray = Decks.get()
  const deckIndex = decksArray.findIndex((deck) => deck.deckId === id)

  if (deckIndex < 0)
    return response.status(404).json({ error: 'Deck not found' })

  const cardsDeck = decksArray[deckIndex].cards || []

  if (Number(count) > cardsDeck.length)
    return response.status(400).json({
      error: 'There is no enough cards in the deck',
    })

  const { deleted, cards } = drawCards(cardsDeck, Number(count))

  Decks.replace(deckIndex, cards)

  return response.status(200).json(deleted)
}

export default drawCardsDeck
