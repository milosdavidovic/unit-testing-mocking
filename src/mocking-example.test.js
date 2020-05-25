const playRound = require("./mocking-example");
const coinFlipper = require("./utils/coinFlipper");

test("when user wins, playRound will return true", () => {
  const originalFlipCoin = coinFlipper.flipACoin;
  coinFlipper.flipACoin = () => "heads"; // monkey patching
  const result = playRound("1", "heads", 100);

  expect(result).toBe(true);
  coinFlipper.flipACoin = originalFlipCoin;
});
