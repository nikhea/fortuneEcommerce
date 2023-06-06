export const formatToCurrency = (amount: number) => {
  if (typeof amount === "number") {
    return amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  }
};

export const numberWithCommas = (x: any) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
