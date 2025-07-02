import { useEffect, useState } from 'react';
import { getAllUmas, UmaData, UmaResponse} from './uma_service';
import axios from 'axios';


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


// Component to turn on UMA

export const useTurnOnUma = (floor: number) => {
  const [loadingUseTurnOnUma, setLoadingUseTurnOnUma] = useState(false);
  const [success, setSuccess] = useState<boolean | null>(null);

  const turnOnUma = async (value: number = 151) => {
    setLoadingUseTurnOnUma(true);
    setSuccess(null);

    try {
      await axios.post(
        `http://10.1.38.171:1880/post/umas/B${floor}/turn-on`,
        { value },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      setSuccess(true);
    } catch (error) {
      console.error('Error al encender la UMA:', error);
      setSuccess(false);
    } finally {
      setLoadingUseTurnOnUma(false);
    }
  };

  return { turnOnUma, loadingUseTurnOnUma, success };
};
// Component to turn off UMA
export const useTurnOffUma = (floor: number) => {
  const [loadingUseTurnOffUma, setLoadingUseTurnOffUma] = useState(false);
  const [success, setSuccess] = useState<boolean | null>(null);

  const turnOffUma = async (value: number = 150) => {
    setLoadingUseTurnOffUma(true);
    setSuccess(null);

    try {
      await axios.post(
        `http://10.1.38.171:1880/post/umas/B${floor}/turn-on`,
        { value },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      setSuccess(true);
    } catch (error) {
      console.error('Error al encender la UMA:', error);
      setSuccess(false);
    } finally {
      setLoadingUseTurnOffUma(false);
    }
  };

  return { turnOffUma, loadingUseTurnOffUma, success };
};

// Component to set UMA frequency
export const useSetUmaFrequency = (floor: number, value: number) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<boolean | null>(null);

  const setFrequency = async () => {
    setLoading(true);
    setSuccess(null);

    try {
      await axios.post(
        `http://10.1.38.171:1880/post/umas/B${floor}/freq`,
        { value },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      setSuccess(true);
    } catch (error) {
      console.error('Error al actualizar la frecuencia:', error);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return { setFrequency, loading, success };
};

// Component to set UMA Vah
export const useSetUmaVah = (floor: number, value: number) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<boolean | null>(null);

  const setVah = async () => {
    setLoading(true);
    setSuccess(null);

    try {
      await axios.post(
        `http://10.1.38.171:1880/post/umas/B${floor}/vah`,
        { value },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      setSuccess(true);
    } catch (error) {
      console.error('Error al actualizar VAH:', error);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return { setVah, loading, success };
};