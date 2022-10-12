import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Currency from './components/Currency';
import useFetch from './hooks/useFetch';
import { useDispatch, useSelector } from 'react-redux';
import {
  setValueFrom,
  setCurrencyFrom,
  setValueTo,
  setCurrencyTo,
} from './redux/slices/currencySlice';

const App = () => {
  const dispatch = useDispatch();
  const { currencyFrom, currencyTo } = useSelector((state) => state.currencySlice);
  const { data, loading, error } = useFetch('http://localhost:3001/currency');

  const onChangeFrom = (value) => {
    const price = value / data.rates[currencyFrom.activeCurrency];
    const result = price * data.rates[currencyTo.activeCurrency];

    dispatch(setValueTo(result.toFixed(2)));
    dispatch(setValueFrom(value));
  };

  const onChangeTo = (value) => {
    const price =
      (data.rates[currencyFrom.activeCurrency] / data.rates[currencyTo.activeCurrency]) * value;
    dispatch(setValueFrom(price.toFixed(2)));
    dispatch(setValueTo(value));
  };

  useEffect(() => {
    if (currencyFrom.value) {
      onChangeFrom(currencyFrom.value);
    }
  }, [currencyFrom.activeCurrency, currencyFrom.value]);

  // useEffect(() => {
  //   if (currencyTo.value) {
  //     onChangeFrom(currencyTo.value);
  //   }
  // }, [currencyTo.activeCurrency, currencyTo.value]);

  if (loading) {
    return <h1>Loading ...</h1>;
  }

  if (error) {
    console.log(error);
    return null;
  }

  return (
    <div className="App">
      <Header />
      <div className="currency__block">
        <Currency
          value={currencyFrom.value}
          onChangeValue={onChangeFrom}
          activeCurrency={currencyFrom.activeCurrency}
          setCurrency={setCurrencyFrom}
          currencyRates={data ? data.rates : []}
        />
        <Currency
          value={currencyTo.value}
          onChangeValue={onChangeTo}
          activeCurrency={currencyTo.activeCurrency}
          setCurrency={setCurrencyTo}
          currencyRates={data ? data.rates : []}
        />
      </div>
    </div>
  );
};

export default App;
