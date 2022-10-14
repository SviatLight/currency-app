import { AllowedCurrencies } from './AllowedCurrencies';

export interface IRates {
  rates: Record<AllowedCurrencies, number>;
}
