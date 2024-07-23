import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import GuessInput from "../GuessInput";
import PreviousGuess from "../PreviousGuess/PreviousGuess";
import Guess from "../Guess";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleGuess(guess) {
    setGuesses((prevGuesses) => [...prevGuesses, guess]);
  }

  return (
    <>
      <PreviousGuess guesses={guesses} />
      <GuessInput addGuess={handleGuess} />
    </>
  );
}

export default Game;
