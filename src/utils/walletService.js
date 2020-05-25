/**
 * Creates a transaction towards users account
 *
 * @param {string}   userId    ID of user account.
 * @param {number}   amount    Bet amount. Negative amount decreases users ballance.
 * Positive amount increases users ballance
 *
 */
function createTransaction(userId, amount) {
  console.log(`Users ${userId} account changed by ${amount}.`);
}

module.exports = { createTransaction };
