import React from "react";

function PreviousGuess({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map((guess, index) => {
        return (
          <div key={index} className="guess-result">
            <span className="guess">{guess}</span>
          </div>
        );
      })}
    </div>
  );
}

export default PreviousGuess;
