const express = require('express');
const cors = require('cors');
const knex = require('knex');
const dbConfig = require('../knexfile'); 
const db = knex(dbConfig.development); 
const server = express();

server.use(express.json(), cors());

server.get('/', (req, res) => {
    res.send("Hello from Express")
});

server.get('/notes', (req, res) => {
    //all notes 
    db('notes')
    .then(notes => res.status(200).json(notes))
    .catch(err => res.status(500).json(err));
    
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
