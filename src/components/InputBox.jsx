import React, { useId } from 'react';

const InputBox = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = 'usd',
  amountDisabled = false,
  currencyDisabled = false,
  className = '',
}) => {
  const id = useId();
  return (
    <div
      className={`bg-white p-3 rounded-lg text-sm flex ${className}`}
    >
      <div className="w-1-2">
        <label className="text-black/40 mb-2 inline-block" htmlFor={id}>
          {label}
        </label>
        <input
          id={id}
          type="number"
          className="outline-none w-full bg-transparent"
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          disabled={amountDisabled}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg p-1 bg-gray-100 cursor-pointer outline-none"
          value={selectedCurrency}
          onChange={(e) =>
            onCurrencyChange && onCurrencyChange(e.target.value)
          }
          disabled={currencyDisabled}
        >
          {currencyOptions.map((cur) => (
            <option key={cur} value={cur}>
              {cur.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InputBox;
