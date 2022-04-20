import { useEffect } from 'react';
import { useState } from 'react';
import photosService from '../../services/photosService';

const useGetDetailPhoto = (id) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetch = async () => {
            setLoading(true);
            try {
                const response = await photosService.getDetailPhoto(id);
                console.log(response);
                setData(response.data);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }

        fetch();
    }, [id]);

    return {
        data,
        loading,
        setData,
    }
}

export default useGetDetailPhoto;