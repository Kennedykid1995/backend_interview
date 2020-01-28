const express = require('express');
const cors = require('cors');
const server = express();

server.use(express.json(), cors());

server.get('/', (req, res) => {
    res.send("Hello from Express")
});

server.get('/notes', (req, res) => {
    //all notes 
});

server.get('/notes/:id', (req, res) => {
    //a note
});

server.post('/notes', (req, res) => {
    //post to notes 
});

server.put('/notes/:id', (req, res) => {
    //edit a note 
});

server.delete('/notes/:id', (req, res) => {
    //delete a note 
});

module.exports = server; 
