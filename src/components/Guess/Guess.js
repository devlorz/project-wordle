import React from "react";

import { range } from "../../utils";

function Guess({ word }) {
  return (
    <p className="guess">
      {range(5).map((_, index) => (
        <span key={index} className="cell">
          {word ? word[index] : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
