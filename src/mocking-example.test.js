const playRound = require("./mocking-example");
const coinFlipper = require("./utils/coinFlipper");

test("when user wins, playRound will return true", () => {
  const originalFlipCoin = coinFlipper.flipACoin;
  coinFlipper.flipACoin = () => "heads"; // monkey patching
  const result = playRound("1", "heads", 100);

  expect(result).toBe(true);
  coinFlipper.flipACoin = originalFlipCoin;
});

test("when user losses, playRound will return false", () => {
  // arrange
  jest.spyOn(coinFlipper, "flipACoin");
  coinFlipper.flipACoin.mockImplementation(() => "tails");
  // act
  const result = playRound("1", "heads", 100);
  // assert
  expect(result).toBe(false);
  jest.clearAllMocks();
});
