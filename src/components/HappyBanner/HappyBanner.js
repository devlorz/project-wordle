import React from "react";

function HappyBanner({ guessCount }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>
          {" "}
          {guessCount} {guessCount > 1 ? "guesses" : "guess"}
        </strong>
        .
      </p>
    </div>
  );
}

export default HappyBanner;
