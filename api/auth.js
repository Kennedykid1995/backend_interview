const axios = require('axios');
const bcrypt = require('bcryptjs'); 
const db = require('../knexfile')
const jwt = require('jsonwebtoken');


module.exports = server => {
    server.post('/register', register);
    server.post('login', login); 
}

function generateToken(user){
    const payload = {
        username: user.username,
    };
    const options = {
        expiresIn: '1h',
        jwtid: '12345',
    };
    return jwt.sign(payload, options)
}

