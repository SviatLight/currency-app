import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currencyFrom: {
    activeCurrency: 'UAN',
    value: 0,
  },
  currencyTo: {
    activeCurrency: 'USD',
    value: 0,
  },
};

export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setValueFrom(state, action) {
      state.currencyFrom.value = action.payload;
    },
    setCurrencyFrom(state, action) {
      state.currencyFrom.activeCurrency = action.payload;
    },
    setValueTo(state, action) {
      state.currencyTo.value = action.payload;
    },
    setCurrencyTo(state, action) {
      state.currencyTo.activeCurrency = action.payload;
    },
  },
});

export const { setValueFrom, setCurrencyFrom, setValueTo, setCurrencyTo } = currencySlice.actions;

export default currencySlice.reducer;
