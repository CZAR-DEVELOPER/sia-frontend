import { useEffect, useState } from 'react';
import { getAllUmas, UmaData, UmaResponse} from './uma_service';
import axios from 'axios';
import { UpdateUmaBPayload, updateUmaB } from './uma_service';


// Get all UMAs for a specific building
export const useGetAllUmas = (building: string) => {
  const [umas, setUmas] = useState<UmaResponse>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    if (!building) return;

    setLoading(true);
    setError(null);
    getAllUmas(building)
      .then((res) => setUmas(res.data))
      .catch((err) => {
        setError(err);
        setUmas([]);
      })
      .finally(() => setLoading(false));
  }, [building]);

  return { umas, loading, error };
};

// Get a single UMA for a specific building and floor
export const useGetSingleUma = (building: string, floor: number) => {
  const [uma, setUma] = useState<UmaData>({} as UmaData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    if (!building) return;

    setLoading(true);
    setError(null);
    getAllUmas(building)
      .then((res) => {

        
          const match = res.data.data.find((u:any) => u.floor === floor);
        // Find the UMA for the specified floor
        console.log("UMA DATA", match);

    setUma(match ?? ({} as UmaData));

      })
      .catch((err: unknown) => {
        setError(err);
        setUma({} as UmaData);
      })
      .finally(() => setLoading(false));
  }, [building, floor]);

  return { uma, loading, error };
};

export const useUpdateUmaB = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<boolean | null>(null);
  const [error, setError] = useState<unknown>(null);

  const update = async (payload: UpdateUmaBPayload) => {
    setLoading(true);
    setSuccess(null);
    setError(null);

    try {
      await updateUmaB(payload);
      setSuccess(true);
    } catch (err) {
      setError(err);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return { update, loading, success, error };
};