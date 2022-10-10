import React from 'react';
import './Header.css';

const Header = ({ currentUSD, currentEUR }) => {
  return (
    <div className="header">
      <div className="header__items">
        <h2>Currency</h2>
        <div className="current__currency">
          <p>
            USD: <span>{currentUSD}</span>
          </p>
          <p>
            EUR: <span>{currentEUR}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
