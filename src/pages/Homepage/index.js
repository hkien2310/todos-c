import React from 'react';
import useGetListTodos from '../../hooks/todos/useGetListTodos';

const Homepage = () => {
    const { data, loading } = useGetListTodos();

    if (loading) {
        return "Loading..."
    }
    
    return <div>{data.map(todo => (
        <p key={todo.id}>{todo.title}</p>
    ))}</div>
}

export default Homepage;