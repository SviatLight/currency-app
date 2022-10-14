import { AllowedCurrencies } from '../types/AllowedCurrencies';
import { IRates } from '../types/IRates';

interface IConvertData extends IRates {
  from: AllowedCurrencies;
  to: AllowedCurrencies;
  value: string | number;
}

export const convertCurrency = ({ rates, from, to, value }: IConvertData) =>
  ((rates['USD'] / rates[from]) * rates[to] * +value).toFixed(2);
