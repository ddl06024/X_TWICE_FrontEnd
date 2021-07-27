import { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

export const useAxios = (axiosParams: any) => {
    const [response, setResponse] = useState(undefined);
    const [error, setError] = useState('');
    const [loading, setloading] = useState(true);

    const fetchData = async (params: any) => {
      try {
       const result = await axios.request(params);
       setResponse(result.data);
       } catch( error ) {
         setError(error);
       } finally {
         setloading(false);
       }
    };

    useEffect(() => {
        fetchData(axiosParams);
        
    }, []); // execute once only

    return { response, error, loading };
};