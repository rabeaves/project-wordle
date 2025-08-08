import React from 'react';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import HappyBanner from '../HappyBanner';
import SadBanner from '../SadBanner';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessLogs, setGuessLogs] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("running");

  function processGuess(guess) {
    const nextGuessLog = [...guessLogs, guess];
    setGuessLogs(nextGuessLog);
    if(guess === answer) {
      setGameStatus("won");
    } else if(nextGuessLog.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  }

  return (
  <>
    {gameStatus}
    <GuessResults guessLogs={guessLogs} answer={answer}/>
    <GuessInput processGuess={processGuess} gameStatus={gameStatus}/>
    {gameStatus === "won" && <HappyBanner guessCount={guessLogs.length}></HappyBanner>}
    {gameStatus === "lost" && <SadBanner answer={answer}></SadBanner>}
  </>
  );
}

export default Game;
