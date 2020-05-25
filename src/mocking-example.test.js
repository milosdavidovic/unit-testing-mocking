const playRound = require("./mocking-example");
const coinFlipper = require("./utils/coinFlipper");
const service = require("./utils/walletService");

afterEach(() => {
  jest.clearAllMocks();
});

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
});

test("when user wins, createTransaction is called with double bet amount", () => {
  // arrange
  jest.spyOn(coinFlipper, "flipACoin");
  coinFlipper.flipACoin.mockImplementation(() => "heads");
  service.createTransaction = jest.fn();
  // act
  playRound("1", "heads", 100);
  // assert
  expect(service.createTransaction).toBeCalledTimes(1);
  expect(service.createTransaction).toBeCalledWith("1", 200);
});
