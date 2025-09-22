import { useState, useEffect } from "react";
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
    setConvertedAmount(Number((amount * currencyInfo).toFixed(2)))
  }

  const swap = () => {
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  useEffect(() => {
    convert();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [from, to, currencyInfo]);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-orange-500 h-screen w-full flex justify-center items-center">
      <div className="border-gray-700 border flex flex-col items-center bg-gray-900 shadow-2xl rounded-3xl w-4/5 sm:max-w-fit">
        <h1 className="text-2xl sm:text-3xl my-4 mt-8 font-bold">
          Currency Converter
        </h1>
        <div className="w-full">
          <form onSubmit={(e) => {
            e.preventDefault();
            convert()
          }}
          >
            <div className="m-4">
              <InputBox
                label="From"
                amount={amount === 0 ? "" : amount}
                selectCurrency={from}
                onAmountChange = {(amount) => setAmount(amount)}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
              />
              
            </div>

            <div className="flex justify-center mt-6" >
              <button 
                className="border-2 p-3 rounded-full hover:bg-gray-800 cursor-pointer ease-in-out duration-200"
                onClick={() => {
                  swap()
                }}  
              >
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#D24E11"><path d="M204-318q-22-38-33-78t-11-82q0-134 93-228t227-94h7l-64-64 56-56 160 160-160 160-56-56 64-64h-7q-100 0-170 70.5T240-478q0 26 6 51t18 49l-60 60ZM481-40 321-200l160-160 56 56-64 64h7q100 0 170-70.5T720-482q0-26-6-51t-18-49l60-60q22 38 33 78t11 82q0 134-93 228t-227 94h-7l64 64-56 56Z"/></svg>
              </button>
            </div>

            <div className="m-4">
              <InputBox
                label="To"
                amount={convertedAmount.toFixed(2)}
                selectCurrency={to}
                amountDisabled={true}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="flex justify-center m-6">
              <button type="submit" className="border px-15 py-4 rounded-xl cursor-pointer hover:bg-gray-800 ease-in-out duration-200">
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
