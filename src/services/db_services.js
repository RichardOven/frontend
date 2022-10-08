const http = require('../http-common');

class DataService {
    // USERS
    signupUser(data) {
        return http.post('/users/signup', data)
    }
    
    loginUser(data) {
        return http.post('users/login', data)
    }

    getOneUser(data) {
        return http.get('/users/:id', data)
    }

    modifyUser(data) {
        return http.put('/users/:id', data)
    }

    deleteUser(data) {
        return http.delete('/users/:id', data)
    }

    // POSTS
    getAllPosts(data) {
        return http.get('/posts/', data)
    }

    addPost(data) {
        return http.post('/posts/', data)
    }

    getOnePost(data) {
        return http.get('/posts/:id', data)
    }

    modifyPost(data) {
        return http.put('/posts/:id', data)
    }

    deletePost(data) {
        return http.delete('/posts/:id', data)
    }

    // COMMENTS
    addComment(data) {
        return http.post('/comments/', data)
    }

    modifyComment(data) {
        return http.put('/comments/:id', data)
    }

    deleteComment(data) {
        return http.delete('/comments/:id', data)
    }

}

module.exports = DataService;