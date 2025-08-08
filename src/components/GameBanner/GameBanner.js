import React from 'react';

function HappyBanner({ guessCount }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        {' '}
        <strong>{guessCount} {guessCount == "1" ? "guess" : "guesses"}</strong>.
      </p>
    </div>
  );
}

function SadBanner({ answer }) {
  return (
    <div className="sad banner">
      <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
    </div>
  );
}

function GameBanner({ gameStatus, guessCount, answer }) {
  if(gameStatus === "won")
  return (
    <HappyBanner guessCount={guessCount}/>
  );
  else if(gameStatus === "lost") {
    return (
      <SadBanner answer={answer}/>
    );
  }
}

export default GameBanner;
