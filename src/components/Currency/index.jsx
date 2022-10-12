import React from 'react';
import './Currency.css';
import { useDispatch } from 'react-redux';

const Currency = ({ activeCurrency, setCurrency, currencyRates, value, onChangeValue }) => {
  const dispatch = useDispatch();

  return (
    <div className="currency">
      <div className="currency__list">
        {Object.keys(currencyRates).map((item) => (
          <div
            key={item}
            className={`currency__item ${activeCurrency === item ? 'active' : ''}`}
            onClick={() => dispatch(setCurrency(item))}
          >
            {item}
          </div>
        ))}
      </div>
      <input
        type="number"
        value={value ? value : ''}
        onChange={(event) => onChangeValue(event.target.value)}
        className="currencyInp"
        placeholder="0"
      />
    </div>
  );
};

export default Currency;
