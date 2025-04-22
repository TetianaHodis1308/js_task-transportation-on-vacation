/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const pricePerDay = 40;
  const totalAmount = days * pricePerDay;
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
