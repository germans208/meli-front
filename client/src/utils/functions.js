export const currencyFormatter = (num, symbol = "$") =>
  symbol + " " + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
