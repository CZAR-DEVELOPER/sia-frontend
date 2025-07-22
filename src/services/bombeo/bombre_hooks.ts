import { useEffect, useState } from 'react';
import { BombPriPayload, BombSecPayload, BombTerPayload, getBombeo, postBombPri, postBombSec, postBombTer,  } from './bombeo_service';
// Get bombeos
export const useGetBombeo = (cuartoValue: string, secondArg: any) => {
  const [bombeo, setBombeo] = useState();
  const [loadingBombeo, setLoadingBombeo] = useState(true);
  const [errorBombeo, setErrorBombeo] = useState<unknown>(null);

  useEffect(() => {
    setLoadingBombeo(true);
    setErrorBombeo(null);
    getBombeo(cuartoValue, secondArg)
      .then((res) => {
        setBombeo(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        setErrorBombeo(err);
        
      })
      .finally(() => setLoadingBombeo(false));
  }, [cuartoValue, secondArg]);

  return { bombeo, loadingBombeo, errorBombeo };
};

//Update Bombeo 1
export const usePostBombPri = () => {
  const [response, setResponse] = useState<any>();      // <— any / undefined
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);

  const sendCommand = async (payload: BombPriPayload): Promise<any> => {
    setLoading(true);
    setError(null);
    try {
      const res = await postBombPri(payload);
      setResponse(res.data);  // res.data is `any`
      return res.data;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { sendCommand, response, loading, error };
};

// Update bombeo 2
export const usePostBombSec = () => {
  const [response, setResponse] = useState<any>();   // any / undefined
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);

  const sendCommand = async (payload: BombSecPayload): Promise<any> => {
    setLoading(true);
    setError(null);
    try {
      const res = await postBombSec(payload);
      setResponse(res.data);        // res.data is `any`
      return res.data;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { sendCommand, response, loading, error };
  
};

// Update bombeo 3
export const usePostBombTer = () => {
  const [response, setResponse] = useState<any>();      // any / undefined
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);

  const sendCommand = async (payload: BombTerPayload): Promise<any> => {
    setLoading(true);
    setError(null);
    try {
      const res = await postBombTer(payload);
      setResponse(res.data);  // res.data is `any`
      return res.data;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { sendCommand, response, loading, error };
};