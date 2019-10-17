import React, { useState } from "react";

export default function Login(props) {
  const [input, setInput] = useState("");

  const onInputChange = el => setInput(el.target.value);

  const onStartClick = () => {
    if (input === "") {
      alert("Please enter a name.");
      return;
    }
    props.updateGame({
      isNewDeck: true,
      isLoggedIn: true,
      isEnded: false,
      rounds: 0,
      counter: 0,
      player: {
        name: input,
        wins: 0,
        losses: 0,
        matches: 0
      }
    });
  };

  return (
    <div>
      <div className="title" style={{ color: "blue" }}>
        Ready for WAR
      </div>
      <input
        type="text"
        onChange={onInputChange}
        placeholder="Enter your name"
      />
      <br />
      <button className="btn btn-primary" onClick={() => onStartClick()}>
        Start
      </button>
    </div>
  );
}
