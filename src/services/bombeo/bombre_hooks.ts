import { useEffect, useState } from 'react';
import { getBombeo3 } from './bombeo_service';

// Get bombeos 1
export const useGetBombeo1 = () => {
  const [bombeo1, setBombeo1] = useState([]);
  const [loadingBombeo1, setLoadingBombeo1] = useState(true);
  const [errorBombeo1, setErrorBombeo1] = useState<unknown>(null);

  useEffect(() => {
  

    setLoadingBombeo1(true);
    setErrorBombeo1(null);
    getBombeo3()
      .then((res) => setBombeo1(res.data.data))
      .catch((err) => {
        setErrorBombeo1(err);
        setBombeo1([]);
      })
      .finally(() => setLoadingBombeo1(false));
  }, );

  return { bombeo1, loadingBombeo1, errorBombeo1 };
};


// Get bombeos 3
export const useGetBombeo3 = () => {
  const [bombeo3, setBombeo3] = useState([]);
  const [loadingBombeo3, setLoadingBombeo3] = useState(true);
  const [errorBombeo3, setErrorBombeo3] = useState<unknown>(null);

  useEffect(() => {
  

    setLoadingBombeo3(true);
    setErrorBombeo3(null);
    getBombeo3()
      .then((res) => setBombeo3(res.data.data))
      .catch((err) => {
        setErrorBombeo3(err);
        setBombeo3([]);
      })
      .finally(() => setLoadingBombeo3(false));
  }, );

  return { bombeo3, loadingBombeo3, errorBombeo3 };
};
