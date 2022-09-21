const http = require('../http-common');

class DataService {
    create(data) {
        return http.post('/users/signup', data)
    }
    
    get(data) {
        return http.get('/posts', data)
    }


}

module.exports = DataService;