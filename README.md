# **Welcome to Cards N Decks Game**

## Introduction
Here you be able to create and open decks. Choosing the cards type and optional to shuffle.

**This project uses Nodejs and Docker, please make sure to have it installed before running locally**


## Endpoints

 - POST /deck -  It creates your decks, accepting JSON body with type ["FULL", "SHORT"] and shuffed [true, false];
 
 - POST /deck/:id -  Send your deckId in the url to open the Deck, in the return you should be able to see the deck information, plus the cards of that deck;
 
 - POST /deck/:id/draw/:count - At this endpoint, you should be able to draw cards from a deck, send the deckId and how many cards you will draw from that deck (count);

> Insominia file available to test endpoints.

## Run the project
	
    - clone repository
    - run yarn or npm inside the root folder to install dependencies
    - run yarn start to build the docker image and start the server
    - run yarn test to run all the test

**The project saves all the decks locally, no database is configured.**

Jeferson Costa
