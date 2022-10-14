import { createSlice } from '@reduxjs/toolkit';
import { IRates } from '../../types/IRates';

interface IInitialState {
  currencies: IRates;
}

const initialState: IInitialState = {
  currencies: {
    rates: {} as IRates[keyof IRates],
  },
};

export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setCurrencies(state, action) {
      state.currencies.rates = action.payload;
    },
  },
});

export const { setCurrencies } = currencySlice.actions;

export default currencySlice.reducer;
