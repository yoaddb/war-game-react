import React from "react";

export default function Game(props) {
  const game = props.game;
  const rounds = game.rounds;

  const onNextClick = () => {
    if (game.rounds === 25) {
      // calculate counter on last round
      let counter =
        game.counter +
        (game.player.cards[rounds] < game.computer.cards[rounds]
          ? -1
          : game.player.cards[rounds] > game.computer.cards[rounds]
          ? 1
          : 0);

      props.updateGame({
        isNewDeck: game.isNewDeck,
        isLoggedIn: game.isLoggedIn,
        isEnded: true,
        rounds: game.rounds + 1,
        counter: counter,
        player: {
          name: game.player.name,
          wins: counter > 0 ? game.player.wins + 1 : game.player.wins,
          losses: counter < 0 ? game.player.losses + 1 : game.player.losses,
          matches: game.player.matches
        }
      });
      return;
    }
    // computer wins round
    if (game.player.cards[rounds] < game.computer.cards[rounds]) {
      props.updateGame({
        isNewDeck: game.isNewDeck,
        isLoggedIn: game.isLoggedIn,
        isEnded: game.isEnded,
        rounds: game.rounds + 1,
        counter: game.counter - 1,
        player: {
          name: game.player.name,
          wins: game.player.wins,
          losses: game.player.losses,
          matches: game.player.matches
        }
      });
    }
    // player wins round
    else if (game.player.cards[rounds] > game.computer.cards[rounds]) {
      props.updateGame({
        isNewDeck: game.isNewDeck,
        isLoggedIn: game.isLoggedIn,
        isEnded: game.isEnded,
        rounds: game.rounds + 1,
        counter: game.counter + 1,
        player: {
          name: game.player.name,
          wins: game.player.wins,
          losses: game.player.losses,
          matches: game.player.matches
        }
      });
    }
    // neither win ,increment rounds
    else {
      props.updateGame({
        isNewDeck: game.isNewDeck,
        isLoggedIn: game.isLoggedIn,
        isEnded: game.isEnded,
        rounds: game.rounds + 1,
        counter: game.counter,
        player: {
          name: game.player.name,
          wins: game.player.wins,
          losses: game.player.losses,
          matches: game.player.matches
        }
      });
    }
  };

  return (
    <div>
      <div className="title left">COMPUTER</div>
      <div className="card">{game.computer.cards[rounds]}</div>
      <div className="card">{game.player.cards[rounds]}</div>
      <div className="footer">
        <button className="btn btn-primary" onClick={() => onNextClick()}>
          Next
        </button>
        <div className="title">{game.player.name.toUpperCase()}</div>
      </div>
    </div>
  );
}
