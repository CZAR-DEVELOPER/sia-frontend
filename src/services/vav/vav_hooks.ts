import { useEffect, useState } from 'react';
import axios from 'axios';

export interface VavDevice {
  device: number;
  mode?: number | null;
  temp?: number | null;
  offset?: number | null;
  aperture?: number | null;
  setpoint?: number | null;
}

// Get all VAV devices for a specific floor
export const useGetAllVavDevices = (floor: number) => {
  const [devices, setDevices] = useState<VavDevice[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVavDevices = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await axios.get<{
          status: string;
          data: { devices: VavDevice[] };
          timestamp: string;
        }>(`http://10.1.38.171:1880/get/vav/B${floor}`);

        setDevices(res.data.data.devices);
      } catch (err) {
        console.error('Error al obtener VAV devices:', err);
        setError('No se pudo cargar la información de VAV');
      } finally {
        setLoading(false);
      }
    };

    fetchVavDevices();
  }, [floor]);

  return { devices, loading, error };
};

// Get a specific VAV device by floor and device number
export const useGetVavDevice = (floor: number, deviceNumber: number) => {
  const [device, setDevice] = useState<VavDevice | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDevice = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await axios.get<{
          status: string;
          data: { devices: VavDevice[] };
          timestamp: string;
        }>(`http://10.1.38.171:1880/get/vav/B${floor}`);

        const found = res.data.data.devices.find((d) => d.device === deviceNumber) || null;
        setDevice(found);
      } catch (err) {
        console.error('Error al obtener el dispositivo VAV:', err);
        setError('No se pudo obtener el dispositivo');
      } finally {
        setLoading(false);
      }
    };

    fetchDevice();
  }, [floor, deviceNumber]);

  return { device, loading, error };
};
