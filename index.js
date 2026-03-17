/* 
  # Programming Proficiency Test

  ## Exercises

  1. Clicking the button should generate two random hands in memory (console.log).
  2. Clicking the button should render two random hands on the page as cards.
  3. Determine the winning hand by its number of pairs, add class="winning" to hand.
  4. Determine winning pairs and add class="pair0" (or "pair1" for 2nd pair) to cards.
  5. [Extra Credit] Ensure that 90% of hands have at least one pair.

*/

const Poker = (() => {
  const cardBaseURL =
    "https://raw.githubusercontent.com/danem-wildfire/storage-bucket/master/cards/{suit}_{card}.png";
  const suits = ["spade", "heart", "diamond", "club"];
  const cards = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];

  // *-* public methods *-*

  const init = () => {
    document
      .querySelector(".buttons button")
      .addEventListener("click", eventPlayAgainClicked);
  };

  // *-* utility methods *-*

  const makeHand = () => {
    // ...
  };

  // *-* event methods *-*

  const eventPlayAgainClicked = () => {
    // ...
  };

  // expose public methods
  return {
    init: init,
  };
})();

document.addEventListener("DOMContentLoaded", Poker.init);
