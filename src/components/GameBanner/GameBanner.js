import React from 'react';

function GameBanner({ status, children }) {
  return (
    <div className={`${status} banner`}>{children}</div>
  );
}

export default GameBanner;
