import { ICard } from './typings'

export const shuffleCards = (cards: Array<ICard>) => {
  return cards.sort(() => Math.random() - 0.5)
}

export const drawCards = (cards: Array<ICard> | undefined, count: number) => {
  const deleted = cards && cards.splice(0, count)
  return {
    deleted,
    cards,
  }
}
