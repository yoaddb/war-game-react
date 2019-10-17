import React from "react";

export default function Ended(props) {
  const onAgainClick = () => {
    props.updateGame({
      isNewDeck: true,
      isLoggedIn: true,
      isEnded: false,
      rounds: 0,
      counter: 0,
      player: {
        name: props.game.player.name,
        wins: props.game.player.wins,
        losses: props.game.player.losses,
        matches: props.game.player.matches + 1
      }
    });
  };

  return (
    <div>
      <div className="redded">
        {props.game.counter > 0
          ? "WIN"
          : props.game.counter < 0
          ? "LOSE"
          : "DRAW"}
      </div>
      <div className="redded">
        {props.game.player.wins + " - " + props.game.player.losses}
      </div>
      <button className="btn btn-primary" onClick={() => onAgainClick()}>
        Again?
      </button>
    </div>
  );
}
