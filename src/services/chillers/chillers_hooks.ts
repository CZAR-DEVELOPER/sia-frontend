import { useEffect, useState } from 'react';



export function useChillerTemps() {
    const [chillersData, setChillersData] = useState<any | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        let isMounted = true;
        setLoading(true);
        fetch('http://10.1.38.171:1880/get/chiller/temps')
            .then((res) => {
                if (!res.ok) throw new Error('Network response was not ok');
                return res.json();
            })
            .then((json) => {
                if (isMounted) {
                    setChillersData(json);
                    setLoading(false);
                }
            })
            .catch((err) => {
                if (isMounted) {
                    setError(err);
                    setLoading(false);
                }
            });
        return () => {
            isMounted = false;
        };
    }, []);

    return { chillersData, loading, error };
}