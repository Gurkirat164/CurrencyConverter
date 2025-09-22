import React from 'react';

function InputBox({
      label,
      amount = 1,
      onAmountChange,
      onCurrencyChange,
      selectCurrency = "USD",
      currencyOptions = [],
      amountDisabled = false,
      currencyDisabled = false
}) {
      return (
            <div className = "flex">
                  <div className = "flex flex-col mx-2 sm:mx-3">
                        <label htmlFor= {label} className = "mx-1 text-sm font-bold">
                              {label}
                        </label>
                        <input
                              id = {label}
                              type="number"
                              className = "border-none bg-gray-800 rounded-md p-3 text-white text-lg w-full"
                              value = {amount}
                              placeholder='Enter Amount'
                              disabled = {amountDisabled}
                              onChange = {(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                        />
                  </div>
                  <div className = "flex flex-col mx-3">
                        <label htmlFor={label} className = "mx-1 text-sm font-bold">
                              Currency
                        </label>
                        <select 
                              className = "border-none bg-gray-800 rounded-md w-contain p-3 text-white text-lg"
                              disabled = {currencyDisabled}
                              value = {selectCurrency}
                              onChange = {(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                        >
                              {currencyOptions.map((currency) => (
                                    <option key={currency} value={currency}>
                                          {currency}
                                    </option>
                              ))}
                        </select>
                  </div>
            </div>
      );
}

export default InputBox;