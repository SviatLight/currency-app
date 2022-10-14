import React from 'react';
import './Header.css';
import { convertCurrency } from '../../utils/convert';
import { useAppSelector } from '../../hooks/useAppSelector';

const Header = () => {
  const { currencies } = useAppSelector((state) => state.currencySlice);

  return (
    <div className="header">
      <div className="header__items">
        <h2>Currency</h2>
        <div className="current__currency">
          <p>
            USD:
            <span>
              {convertCurrency({
                rates: currencies.rates,
                from: 'USD',
                to: 'UAN',
                value: 1,
              })}
            </span>
          </p>
          <p>
            EUR:
            <span>
              {convertCurrency({
                rates: currencies.rates,
                from: 'EUR',
                to: 'UAN',
                value: 1,
              })}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
