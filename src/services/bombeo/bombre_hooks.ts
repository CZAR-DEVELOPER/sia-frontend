import { useEffect, useState } from 'react';
import { getBombeo,  } from './bombeo_service';
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
