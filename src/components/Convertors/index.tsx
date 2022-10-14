import React, { useState } from 'react';
import './Convertors.css';
import Convertor from '../Convertor';
import { convertCurrency } from '../../utils/convert';
import { useAppSelector } from '../../hooks/useAppSelector';
import { AllowedCurrencies } from '../../types/AllowedCurrencies';

interface IInitialValue {
  value: string;
  currency: AllowedCurrencies;
}

const initialFields: IInitialValue[] = [
  {
    value: '',
    currency: 'UAN',
  },
  {
    value: '',
    currency: 'EUR',
  },
];

interface IUpdateData {
  value: string;
  currency: AllowedCurrencies;
  convertorIndex: number;
}

const Convertors = () => {
  const [convertors, setConvertors] = useState(initialFields);
  const { currencies } = useAppSelector((state) => state.currencySlice);

  const updateConvertors = ({ value, currency, convertorIndex }: IUpdateData) => {
    const newConvertors = convertors.map((field, index) =>
      convertorIndex === index
        ? {
            ...field,
            value,
            currency,
          }
        : {
            ...field,
            value: convertCurrency({
              rates: currencies.rates,
              from: currency,
              to: field.currency,
              value,
            }),
          },
    );
    setConvertors(newConvertors);
  };

  return (
    <div className="currency__block">
      {convertors.map(({ value, currency }, index) => (
        <Convertor
          key={index}
          value={value}
          currency={currency}
          onChange={(value, currency) =>
            updateConvertors({ value, currency, convertorIndex: index })
          }
        />
      ))}
    </div>
  );
};

export default Convertors;
