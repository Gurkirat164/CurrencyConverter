import { useState } from 'react'
import { InputBox } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className = "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-orange-500 h-screen w-full flex justify-center items-center">
      <div className = "border-gray-700 border flex flex-col items-center bg-gray-900 shadow-2xl rounded-3xl w-4/5 sm:max-w-fit h-100">
        <h1 className = "text-2xl sm:text-3xl my-2 mt-4 font-bold">
          Currency Converter
        </h1>
        <div className = "w-full">
          <form action="">
            <div className = "m-2">
              <InputBox 
                label = "From"
                selectCurrency = "USD"
              />
            </div>
            <div className = "m-2">
              <InputBox 
              label = "To"
              selectCurrency = "INR"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
