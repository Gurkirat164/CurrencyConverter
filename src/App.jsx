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
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-orange-400 h-screen w-full flex justify-center items-center flex-col">

      {/* Bottom left GitHub logo and name */}

      <div className="absolute bottom-4 right-4 z-20 text-black">
        <a
          href="https://github.com/Gurkirat164"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-900 shadow-2xl border border-orange-700 shadow-x transition-all duration-200 group"
          title="GitHub"
        >
          <span className="p-1 bg-orange-700 rounded-full group-hover:bg-orange-800 transition">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.545 1.378.202 2.396.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.853 0 1.337-.012 2.419-.012 2.749 0 .268.18.579.688.481C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"
                clipRule="evenodd"
              />
            </svg>

          </span>
          <span className="ml-1.5 text-orange-300 font-bold text-base sm:text-lg group-hover:text-orange-400 transition">
            Gurkirat164
          </span>
        </a>
      </div>

      {/* Main App  */}

      <div className="border-gray-700 border flex flex-col items-center bg-gray-900 shadow-2xl rounded-3xl w-4/5 sm:max-w-fit">
        <h1 className="text-2xl sm:text-3xl mt-4 mb-1 sm:my-4 sm:mt-8 font-bold">
          Currency Converter
        </h1>

        {/* from box  */}

        <div className="w-full">
          <form onSubmit={(e) => {
            e.preventDefault();
            convert()
          }}
          >
            <div className="m-1 sm:m-4">
              <InputBox
                label="From"
                amount={amount === 0 ? "" : amount}
                selectCurrency={from}
                onAmountChange = {(amount) => setAmount(amount)}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
              />
              
            </div>

            {/* swap button  */}

            <div className="flex justify-center mt-4 sm:mt-6" >
              <button 
                className="border-2 p-3 rounded-full hover:bg-gray-800 border-orange-700 cursor-pointer ease-in-out duration-200"
                onClick={() => {
                  swap()
                }}  
              >
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FD8804"><path d="M204-318q-22-38-33-78t-11-82q0-134 93-228t227-94h7l-64-64 56-56 160 160-160 160-56-56 64-64h-7q-100 0-170 70.5T240-478q0 26 6 51t18 49l-60 60ZM481-40 321-200l160-160 56 56-64 64h7q100 0 170-70.5T720-482q0-26-6-51t-18-49l60-60q22 38 33 78t11 82q0 134-93 228t-227 94h-7l64 64-56 56Z"/></svg>
              </button>
            </div>

            {/* to box  */}

            <div className="m-1 sm:m-4">
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

            {/* Submit button  */}

            <div className="flex justify-center m-6">
              <button type="submit" className="border px-4 py-2 sm:px-12 sm:py-3 rounded-xl cursor-pointer border-orange-700 hover:bg-gray-800 ease-in-out duration-200 text-xl">
                Get Exchange Rate
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Credits Section */}
          <footer className="mt-8 mb-4 text-center text-gray-400 text-xs flex flex-col items-center gap-2">
            <span>
              Made with <span className="text-red-500">♥</span> by{" "}
              <a
                href="https://linkedin.com/in/gurkirat164"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-orange-400 hover:underline hover:text-orange-500 transition"
              >
                Gurkirat Singh
              </a>
            </span>
          </footer>

    </div>
  );
}

export default App;
