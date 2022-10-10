// const http = require('../http-common');

// class DataService {
//     // USERS
//     signupUser(data) {
//         return http.post('/api/users/signup', data)
//     }
    
//     loginUser(data) {
//         return http.post('/api/users/login', data)
//     }

//     getOneUser(data) {
//         return http.get('/api/users/:id', data)
//     }

//     modifyUser(data) {
//         return http.put('/api/users/:id', data)
//     }

//     deleteUser(data) {
//         return http.delete('/api/users/:id', data)
//     }

//     // POSTS
//     getAllPosts(data) {
//         return http.get('/api/posts/', data)
//     }

//     addPost(data) {
//         return http.post('/api/posts/', data)
//     }

//     getOnePost(data) {
//         return http.get('/api/posts/:id', data)
//     }

//     modifyPost(data) {
//         return http.put('/api/posts/:id', data)
//     }

//     deletePost(data) {
//         return http.delete('/api/posts/:id', data)
//     }

//     // COMMENTS
//     addComment(data) {
//         return http.post('/api/comments/', data)
//     }

//     modifyComment(data) {
//         return http.put('/api/comments/:id', data)
//     }

//     deleteComment(data) {
//         return http.delete('/api/comments/:id', data)
//     }

// }

// module.exports = DataService;