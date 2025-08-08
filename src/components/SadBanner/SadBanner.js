import React from "react";
import GameBanner from "../GameBanner";

function SadBanner({ answer }) {
  return (
    <GameBanner status="sad">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </GameBanner>
  );
}

export default SadBanner;
