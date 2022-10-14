import { useState, useEffect } from 'react';
import axios from 'axios';
import { IRates } from '../types/IRates';

interface StateData {
  isLoading: boolean;
  data: IRates | null;
}

const useFetchCurrency = (url: string) => {
  const [status, setStatus] = useState<StateData>({
    isLoading: false,
    data: null,
  });

  const fetch = async (url: string) => {
    setStatus({ ...status, isLoading: true });
    try {
      const response = await axios<IRates>(url);
      setStatus({ isLoading: false, data: response.data });
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    url && fetch(url);
  }, [url]);

  return status;
};

export default useFetchCurrency;
