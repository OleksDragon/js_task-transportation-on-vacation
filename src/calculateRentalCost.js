/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const dailyRate = 40;
  const totalCost = days * dailyRate;
  const discount10 = 20;
  const discount20 = 50;

  if (days >= 7) {
    return totalCost - discount20;
  } else if (days >= 3) {
    return totalCost - discount10;
  } else {
    return totalCost;
  }
}

module.exports = calculateRentalCost;
