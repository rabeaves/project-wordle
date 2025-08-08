import React from "react";
import Guess from "../Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

function GuessResults({ guessLogs, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Guess
          className="guess"
          key={num}
          value={guessLogs[num]}
          answer={answer}
        />
      ))}
    </div>
  );
}

export default GuessResults;
