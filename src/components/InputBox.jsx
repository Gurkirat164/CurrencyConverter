import React from 'react';

function InputBox({
      label
}) {
      return (
            <div className = "flex">
                  <div className = "flex flex-col mx-2 sm:mx-3">
                        <label htmlFor="" className = "mx-1 text-sm font-bold">
                              {label}
                        </label>
                        <input 
                              type="number"
                              className = "border-none bg-gray-800 rounded-md p-3 text-white text-lg w-full"
                        />
                  </div>
                  <div className = "flex flex-col mx-3">
                        <label htmlFor="" className = "mx-1 text-sm font-bold">
                              Currency
                        </label>
                        <select className = "border-none bg-gray-800 rounded-md w-full p-3 text-white text-lg">
                              <option>
                                    Test USD
                              </option>
                              <option>
                                    INR
                              </option>
                        </select>
                  </div>
            </div>
      );
}

export default InputBox;