import { configureStore } from '@reduxjs/toolkit';
import currencySlice from './slices/currencySlice';

export const store = configureStore({
  reducer: { currencySlice },
});

export type RootState = ReturnType<typeof store.getState>;
