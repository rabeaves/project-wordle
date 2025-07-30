import React from 'react';

function GuessResults({guessLogs}) {
  return (
    <div className="guess-results">
      {guessLogs.map(thisLog => (
        <p className="guess" key={crypto.randomUUID()}>{thisLog}</p>
      ))}
    </div>
  );
}

export default GuessResults;
