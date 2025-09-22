import { useState, useEffect } from "react";

function useCurrencyCodes(apiKey) {
      const [codes, setCodes] = useState([]);
      useEffect(() => {
            if (!apiKey) return;
            fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/codes`)
                  .then((res) => res.json())
                  .then((res) => {
            const onlyCodes = res.supported_codes.map(([code, name]) => code);
            setCodes(onlyCodes);
      });
      }, [apiKey]);
      return codes;
}

export default useCurrencyCodes;