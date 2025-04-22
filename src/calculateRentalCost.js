/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const totalAmount = days * 40;
  const mediumTerm = 3;
  const mediumTermDiscount = 20;
  const longTerm = 7;
  const longTermDiscount = 50;

  if (days >= longTerm) {
    return totalAmount - longTermDiscount;
  }

  if (days >= mediumTerm) {
    return totalAmount - mediumTermDiscount;
  }

  return totalAmount;
}

module.exports = calculateRentalCost;
