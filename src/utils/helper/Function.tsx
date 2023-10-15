export const currencyConverter = (amount:number) =>
  new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumSignificantDigits: 3,
  }).format(amount);