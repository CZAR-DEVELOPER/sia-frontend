import { useEffect, useState } from 'react';
import { getAllUmas} from './uma_service';

export const useAllUmas = (building: string) => {
  const [umas, setUmas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!building) return;

    setLoading(true);
    getAllUmas(building)
      .then((res) => {setUmas(res.data); console.log(res.data);})
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [building]);

  return { umas, loading };
};