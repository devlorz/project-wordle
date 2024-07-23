import React from "react";

import { checkGuess } from "../../game-helpers";
import { range } from "../../utils";

function Guess({ word, answer }) {
  const result = checkGuess(word, answer);

  return (
    <p className="guess">
      {result
        ? result.map((item, index) => (
            <span key={index} className={`cell ${item.status}`}>
              {word ? word[index] : undefined}
            </span>
          ))
        : range(5).map((index) => (
            <span key={index} className="cell">
              {word ? word[index] : undefined}
            </span>
          ))}
    </p>
  );
}

export default Guess;
