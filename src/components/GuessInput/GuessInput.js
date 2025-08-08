import React from "react";

function GuessInput({ processGuess, gameStatus }) {
  const [guess, setGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    processGuess(guess);
    setGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guessInput">Enter guess:</label>
      <input
        disabled={gameStatus !== "running"}
        id="guessInput"
        type="text"
        minLength="5"
        maxLength="5"
        pattern="[a-zA-Z]{5}"
        title="5 letter words only"
        value={guess}
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase();
          setGuess(nextGuess);
        }}
      />
    </form>
  );
}

export default GuessInput;
