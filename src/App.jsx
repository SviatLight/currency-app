import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/Header';
import Currency from './components/Currency';

const App = () => {
  const [currencyRates, setCurrencyRates] = useState({});
  const [activeCurrencyFrom, setActiveCurrencyFrom] = useState('UAN');
  const [activeCurrencyTo, setActiveCurrencyTo] = useState('USD');
  const [valueFrom, setValueFrom] = useState(0);
  const [valueTo, setValueTo] = useState(0);
  const [currentUSD, setCurrentUSD] = useState(0);
  const [currentEUR, setCurrentEUR] = useState(0);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios('http://localhost:3001/currency');
        if (response.data) {
          setCurrencyRates(response.data.rates);
          setCurrentUSD(response.data.rates.USD * response.data.rates.UAN);
          setCurrentEUR(response.data.rates.EUR * response.data.rates.UAN);
        }
      } catch (error) {
        if (error) {
          alert('Сталася помилка, спробуйте перезавантажити сторінку!');
        }
      }
    })();
  }, []);

  const onChangeFrom = (value) => {
    const price = value / currencyRates[activeCurrencyFrom];
    const result = price * currencyRates[activeCurrencyTo];
    setValueTo(result);
    setValueFrom(value);
  };

  const onChangeTo = (value) => {
    const price = (currencyRates[activeCurrencyFrom] / currencyRates[activeCurrencyTo]) * value;
    setValueFrom(price);
    setValueTo(value);
  };

  useEffect(() => {
    if (valueFrom) {
      onChangeFrom(valueFrom);
    }
  }, [activeCurrencyFrom, valueFrom]);

  useEffect(() => {
    if (valueTo) {
      onChangeTo(valueTo);
    }
  }, [activeCurrencyTo, valueTo]);

  return (
    <div className="App">
      <Header currentUSD={currentUSD} currentEUR={currentEUR} />
      <div className="currency__block">
        <Currency
          value={valueFrom}
          onChangeValue={onChangeFrom}
          activeCurrency={activeCurrencyFrom}
          setActiveCurrency={setActiveCurrencyFrom}
          currencyRates={currencyRates}
        />
        <Currency
          value={valueTo}
          onChangeValue={onChangeTo}
          activeCurrency={activeCurrencyTo}
          setActiveCurrency={setActiveCurrencyTo}
          currencyRates={currencyRates}
        />
      </div>
    </div>
  );
};

export default App;
