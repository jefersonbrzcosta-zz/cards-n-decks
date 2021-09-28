import { Router } from 'express'
import { Decks } from '../controllers'
import createDeck from '../repositories/createDeck'
import openDeck from '../repositories/openDeck'
import drawCardsDeck from '../repositories/drawCardsDeck'
import { createDeckSchema } from './schemas'

const deckRoutes = Router()

deckRoutes.post('/deck', createDeckSchema, createDeck)
deckRoutes.post('/deck/:id', openDeck)
deckRoutes.post('/deck/:id/draw/:count', drawCardsDeck)

export { deckRoutes }
