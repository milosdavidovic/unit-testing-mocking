const coinFlipper = require("./utils/coinFlipper");
const service = require("./utils/walletService");

const WIN_MULTIPLIER = 2;

function playRound(userId, predictedResult, betAmount) {
  if (!betAmount) {
    throw new Error("betAmount is invalid");
  }
  const result = coinFlipper.flipACoin();
  const hasWon = result === predictedResult;

  if (hasWon) {
    service.createTransaction(userId, WIN_MULTIPLIER * betAmount);
  } else {
    service.createTransaction(userId, -betAmount);
  }
  return hasWon;
}

module.exports = playRound;
