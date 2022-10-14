import React from 'react';
import './Convertor.css';
import { useAppSelector } from '../../hooks/useAppSelector';
import { AllowedCurrencies } from '../../types/AllowedCurrencies';

interface IProps {
  value: string;
  currency: AllowedCurrencies;
  onChange: (value: string, currency: AllowedCurrencies) => void;
}

const Currency = (props: IProps) => {
  const { value, currency, onChange } = props;
  const { currencies } = useAppSelector((state) => state.currencySlice);
  return (
    <div className="currency">
      <div className="currency__list">
        {Object.keys(currencies.rates).map((item) => (
          <div
            key={item}
            className={`currency__item ${item === currency ? 'active' : ''}`}
            onClick={() => onChange(value, item as AllowedCurrencies)}
          >
            {item}
          </div>
        ))}
      </div>
      <input
        type="number"
        value={value}
        onChange={(event) => onChange(event.target.value, currency)}
        className="currencyInp"
        placeholder="0"
      />
    </div>
  );
};

export default Currency;
