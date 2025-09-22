import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/getCurrencyInfo";
import useCurrencyCodes from "./hooks/getCurrencyCodes";

function App() {
  const [amount, setAmount] = useState(0);
  const [convertedAmount , setConvertedAmount] = useState(0);
  const [from, setFrom] = useState("USD")
  const [to, setTo] = useState("INR")

  const apiKey = import.meta.env.VITE_API_KEY;

  const options = useCurrencyCodes(apiKey)

  const currencyInfo = useCurrencyInfo(from, to, apiKey);

  const convert = () => {
    setConvertedAmount(amount * currencyInfo)
  }

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-orange-500 h-screen w-full flex justify-center items-center">
      <div className="border-gray-700 border flex flex-col items-center bg-gray-900 shadow-2xl rounded-3xl w-4/5 sm:max-w-fit h-100">
        <h1 className="text-2xl sm:text-3xl my-2 mt-4 font-bold">
          Currency Converter
        </h1>
        <div className="w-full">
          <form onSubmit={(e) => {
            e.preventDefault();
              console.log(amount);
              convert()
            
          }}
          >
            <div className="m-2">
              <InputBox
                label="From"
                amount={amount === 0 ? "" : amount}
                selectCurrency={from}
                onAmountChange = {(amount) => setAmount(amount)}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
              />
              
            </div>
            <div className="m-2">
              <InputBox
                label="To"
                amount={convertedAmount}
                selectCurrency={to}
                amountDisabled={true}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="flex justify-center">
              <button type="submit" className="border px-4 py-2 rounded-xl">
                Get Exchange Rate
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
