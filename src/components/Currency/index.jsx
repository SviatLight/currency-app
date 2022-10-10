import React from 'react';
import './Currency.css';

const Currency = ({ activeCurrency, setActiveCurrency, currencyRates, value, onChangeValue }) => {
  return (
    <div className="currency">
      <div className="currency__list">
        {Object.keys(currencyRates).map((item) => (
          <div
            key={item}
            className={`currency__item ${activeCurrency === item ? 'active' : ''}`}
            onClick={() => setActiveCurrency(item)}
          >
            {item}
          </div>
        ))}
      </div>
      <input
        type="number"
        value={value}
        onChange={(event) => onChangeValue(event.target.value)}
        className="currencyInp"
        placeholder="0"
      />
    </div>
  );
};

export default Currency;
