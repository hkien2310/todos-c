 const appPaths = {
    todo: {
        list: '/todos',
        detail: '/todos/:id',
        detailWithId: (id) => `/todos/${id}`
    },
    homepage: '/',
    post: {
        list: '/posts',
        detail: '/posts/:id',
        detailWithId: (id) => `/posts/${id}`
    },
    comment: {
        list: '/comments',
        detail: '/comments/:id',
        detailWithId: (id) => `/comments/${id}`
    },
    photos: {
        list: '/photos',
        detail: '/photos/:id',
        detailWithId: (id) => `/photos/${id}`
    },
    users: {
        list: '/users',
        detail: '/users/:id',
        detailWithId: (id) => `/users/${id}`
    }
}

export default appPaths;
