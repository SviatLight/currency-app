import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url, options) => {
  const [status, setStatus] = useState({
    loading: false,
    data: null,
    error: null,
  });

  const fetch = async (url, options) => {
    setStatus({ loading: true });
    try {
      const response = await axios(url, options);
      setStatus({ loading: false, data: response.data });
    } catch (error) {
      setStatus({ loading: false, error });
    }
  };

  useEffect(() => {
    if (url) {
      fetch(url, options);
    }
  }, [url, options]);

  return { ...status, fetch };
};

export default useFetch;
