 const appPaths = {
    todo: {
        list: '/todos',
        detai: '/todos/:id',
        detailWithId: (id) => `/todos/${id}`
    },
    homepage: '/'
}

export default appPaths;
