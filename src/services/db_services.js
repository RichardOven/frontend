const http = require('../http-common');

class DataService {
    create(data) {
        return http.post('/auth/signup', data)
    }
    
    create(data) {
        return http.post('/posts', data)
    }


}

module.exports = DataService;