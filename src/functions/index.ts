// function zipcode
function formatZipcode(zipcode: any) {
  return String(zipcode)
    .replace(/\D/g, '')
    .slice(0, 7)
    .replace(/(\d{4})(\d)/, '$1-$2');
}

// function currency

export interface FormatCurrencyProps {
  amount: number;
  locale: string;
  currency: string;
}

function formatCurrency({ amount, locale, currency }: FormatCurrencyProps) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2,
  }).format(amount);
}

// export
export { formatZipcode, formatCurrency };
