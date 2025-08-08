import React from 'react';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import GameBanner from '../GameBanner';
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
    {gameStatus != "running" && <GameBanner gameStatus={gameStatus} guessCount={guessLogs.length} answer={answer} />}
  </>
  );
}

export default Game;
