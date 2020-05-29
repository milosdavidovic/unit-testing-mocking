/**
 * Creates a transaction towards users account
 *
 * @param {string}   userId    ID of user account.
 * @param {number}   amount    Bet amount. Negative amount decreases users ballance.
 * Positive amount increases users ballance
 *
 */
function createTransaction(userId, amount) {
  // here would be some logic to call the wallet api
}

module.exports = { createTransaction };
