import express from 'express'
import { deckRoutes } from './routers/deck'
import { Decks } from './controllers/index'

const app = express()
app.use(express.json())

app.use(deckRoutes)

const PORT = 3000
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})
