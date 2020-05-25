/**
 * A game with 50/50 chance
 *
 */
function flipACoin() {
  return Math.random() > 0.5 ? "heads" : "tails";
}

module.exports = { flipACoin };
