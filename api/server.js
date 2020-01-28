const express = require('express');
const cors = require('cors');
const server = express();

server.use(express.json(), cors());

server.get('/', (req, res) => {
    res.send("Hello from Express")
})
module.exports = server; 
