import { useEffect, useState } from "react";

function useCurrencyInfo(fromCurrency, toCurrency, apiKey) {
      const [rate, setRate] = useState(null);
      useEffect(() => {
            if (!fromCurrency || !toCurrency || !apiKey) return;
            fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromCurrency}/${toCurrency}`)
            .then((res) => res.json())
            .then((res) => setRate(res.conversion_rate));
            }, [fromCurrency, toCurrency, apiKey]);
      return rate;
}

export default useCurrencyInfo;