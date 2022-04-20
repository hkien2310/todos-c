import { useEffect } from 'react';
import { useState } from 'react';
import photosService from '../../services/photosService';

const useGetListPhotos = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const refetch = async () => {
        try {
            const response = await photosService.getListPhotos();
            setData(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        const fetch = async () => {
            setLoading(true);
            try {
                const response = await photosService.getListPhotos();
                setData(response.data);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }

        fetch();
    }, []);

    return {
        data,
        loading,
        setData,
        refetch,
    }
}

export default useGetListPhotos;