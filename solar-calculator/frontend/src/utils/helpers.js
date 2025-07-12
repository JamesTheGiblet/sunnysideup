// Utility functions (e.g., unit conversions, data formatting)
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(amount);
};
