const axios = require('axios');

module.exports = axios.create({
    baseURL: "http://localhost:3000",
    headers: {
        "Content-type": "application/json"
    }
});