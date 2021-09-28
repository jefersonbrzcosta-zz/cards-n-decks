export interface ICard {
  suit: string
  value: string
  code: string
}

export interface IDeck {
  deckId?: string
  type: string
  shuffled: boolean
  remaining?: number
  cards?: Array<ICard>
}
