import { Request, Response } from 'express'

import { Decks } from '../controllers/index'

const openDeck = (request: Request, response: Response) => {
  const { id } = request.params
  if (!id)
    return response
      .status(400)
      .json({ error: 'You need to pass a valid deckID' })

  const results = Decks.find(id)

  if (!results) return response.status(404).json({ error: 'Deck not found' })

  return response.status(200).json(results)
}

export default openDeck
