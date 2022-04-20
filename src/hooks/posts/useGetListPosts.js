import { useEffect } from 'react';
import { useState } from 'react';
import postsService from '../../services/postsService';

const useGetListTodos = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const refetch = async () => {
        try {
            const response = await postsService.getListPosts();
            setData(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        const fetch = async () => {
            setLoading(true);
            try {
                const response = await postsService.getListPosts();
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

export default useGetListTodos;