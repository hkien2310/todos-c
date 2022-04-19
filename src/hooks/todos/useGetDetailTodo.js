import { useEffect } from 'react';
import { useState } from 'react';
import todosService from '../../services/todosService';

const useGetDetailTodo = (id) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetch = async () => {
            setLoading(true);
            try {
                const response = await todosService.getDetailTodo(id);
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

export default useGetDetailTodo;