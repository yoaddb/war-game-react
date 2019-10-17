import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Login from "./components/Login";
import Game from "./components/Game";
import Ended from "./components/Ended";

export default function App() {
  const getShuffledDeck = () => {
    let deck = [];
    for (let i = 0; i < 13; i++) {
      for (let j = 0; j < 4; j++) {
        deck.push(i + 1);
      }
    }
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
  };

  const [game, setGame] = useState({
    isNewDeck: true,
    isLoggedIn: false,
    isEnded: false,
    rounds: 0,
    counter: 0,
    deck: [],
    player: {
      name: "",
      wins: 0,
      losses: 0,
      matches: 0,
      cards: []
    },
    computer: {
      cards: []
    }
  });

  const updateGame = gameObj => {
    let deck = gameObj.isNewDeck ? getShuffledDeck() : game.deck;

    setGame({
      isNewDeck: false,
      isLoggedIn: gameObj.isLoggedIn,
      isEnded: gameObj.isEnded,
      rounds: gameObj.rounds,
      counter: gameObj.counter,
      deck: [...deck],
      player: {
        name: gameObj.player.name,
        wins: gameObj.player.wins,
        losses: gameObj.player.losses,
        matches: gameObj.player.matches,
        cards: [...deck.slice(0, 26)]
      },
      computer: {
        cards: [...deck.slice(26)]
      }
    });
  };

  return (
    <div className="App">
      {!game.isLoggedIn ? (
        <Login updateGame={updateGame} />
      ) : !game.isEnded ? (
        <Game game={game} updateGame={updateGame} />
      ) : (
        <Ended game={game} updateGame={updateGame} />
      )}
    </div>
  );
}
