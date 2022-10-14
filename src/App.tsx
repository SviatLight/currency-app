import React from 'react';
import Header from './components/Header';
import Convertors from './components/Convertors/index';
import { setCurrencies } from './redux/slices/currencySlice';
import { useAppDispatch } from './hooks/useAppDispatch';
import useFetchCurrency from './hooks/useFetchCurrency';

const App = () => {
  const dispatch = useAppDispatch();
  const { data, isLoading } = useFetchCurrency('http://localhost:3001/currency');

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>Something went wrong :(</div>;
  }

  dispatch(setCurrencies(data.rates));

  return (
    data && (
      <div>
        <Header />
        <Convertors />
      </div>
    )
  );
};

export default App;
