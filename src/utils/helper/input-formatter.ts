export const isNullish = (value: unknown) =>
  value === null || value === undefined;

export const currencyToNumber = (currency: string) => {
  const cleanedCurrency =
    typeof currency === 'number'
      ? currency
      : currency?.replace(/,/g, '')?.trim();
  if (isNullish(cleanedCurrency) || cleanedCurrency === '') {
    return 0;
  }

  return parseFloat(cleanedCurrency);
};

export const currencyInputFormatter = (inputValue: string) => {
  const rawValue = inputValue?.replace(/[^\d.]/g, '');
  const parts = rawValue?.split('.');

  const integerPart = Number(parts[0] || 0).toLocaleString();
  const decimalPart = !isNullish(parts[1])
    ? `.${parts[1]?.substring(0, 2)}`
    : '';

  return {
    parts,
    originalValue: inputValue,
    hasDecimal: !!parts[1],
    currency: `${integerPart}${decimalPart}`,
    integerPart,
    decimalPart,
  };
};

export const percentageInputFormatter = (inputValue: string) => {
  let value = inputValue?.replace(/[^\d.-]/g, '');
  value = Number(value) <= 100 ? value : value?.substring(0, value.length - 1);

  const parts = value.split('.');
  const integerPart = parts[0] ? `${parts[0]}` : '0';

  const decimalPart =
    parts[1] !== undefined ? `.${parts[1]?.substring(0, 2)}` : '';

  return {
    parts,
    originalValue: inputValue,
    hasDecimal: parts[1] !== undefined,
    percentage: `${integerPart}${decimalPart}%`,
    ratio: `${integerPart}${decimalPart}`,
    integerPart,
    decimalPart,
  };
};
