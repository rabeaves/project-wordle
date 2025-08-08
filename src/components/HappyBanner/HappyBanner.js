import React from "react";
import GameBanner from "../GameBanner";

function HappyBanner({ guessCount }) {
  return (
    <GameBanner status="happy">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {guessCount} {guessCount == "1" ? "guess" : "guesses"}
        </strong>
        .
      </p>
    </GameBanner>
  );
}

export default HappyBanner;
