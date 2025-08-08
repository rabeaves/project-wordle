import React from 'react';
import { range } from '../../utils';
import { checkGuess }from '../../game-helpers';

function Guess( { value, answer } ) {
  const checkedValue = checkGuess(value, answer);
  return (
    <p className="guess">
      {range(5).map((num) => (
        <span 
          className={checkedValue ? `cell ${checkedValue[num].status}` : "cell"}
          key={num}
        >
          {checkedValue ? checkedValue[num].letter : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
