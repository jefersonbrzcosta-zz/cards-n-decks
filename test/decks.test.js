let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

chai.use(chaiHttp);

let firstDeck

describe('Decks', function () {
  it('should create a new Deck FULL', async () => {
    const res = await chai.request('http://localhost:3000')
    .post('/deck')
    .send({ type: "FULL"})

    res.should.have.status(201);
    res.body.should.have.property('deckId')
    res.body.should.have.property('remaining', 52)

    firstDeck = res.body
  })
  
  it('should create a new Deck SHORT', async () => {
    const res = await chai.request('http://localhost:3000')
    .post('/deck')
    .send({ type: "SHORT"})

    res.should.have.status(201);
    res.body.should.have.property('deckId')
    res.body.should.have.property('remaining', 36)
  })

  it('should open first Deck that was created', async () => {
    const res = await chai.request('http://localhost:3000')
    .post(`/deck/${firstDeck.deckId}`)
    res.should.have.status(200);
    res.body.should.have.property('cards')
  })
  it('should remove the first 3 cards of the FULL deck', async () => {
    const res = await chai.request('http://localhost:3000')
    .post(`/deck/${firstDeck.deckId}/draw/3`)
    res.should.have.status(200);
    res.body.should.have.length(3);
  })
})
