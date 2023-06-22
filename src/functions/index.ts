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

// windowSize

import { useState, useEffect } from 'react';

export interface WindowSizeTypes {
  width: number | undefined;
  height: number | undefined;
}

function useWindowSize(): WindowSizeTypes {
  const [windowSize, setWindowSize] = useState<WindowSizeTypes>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}

// export
export { formatZipcode, formatCurrency, useWindowSize };
