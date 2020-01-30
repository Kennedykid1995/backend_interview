const express = require('express');
const cors = require('cors');
const knex = require('knex');
const dbConfig = require('../knexfile'); 
const db = knex(dbConfig.development); 
const server = express();
//-----authentication------
const bcrypt = require('bcryptjs'); 

const credentials = req.body;

const hash = bcrypt.hashSync(credentials.password, 14);

credentials.password = hash;

//-------------------------

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
    const {id} = req.params; 
    db("notes")
    .where({id})
    .then(note => res.status(200).json(note))
    .catch(err => res.status(500).json(err)); 
});

server.post('/notes', (req, res) => {
    //post to notes 
    const note = req.body; 
    const {title} = req.body;
    const {content} = req.body;
    if(!title & !content){
        res
            .status(400)
            .json({errorMessage: "NEED TITLE/CONTENT"})
    }
    db.insert(note)
        .into('notes')
        .then(ids => {
            res.status(201).json(ids);
        })
        .catch(err => res.status(500).json(err));
});

server.put('/notes/:id', (req, res) => {
    //edit a note 
    const changes = req.body; 
    const {id} = req.params; 

    db("notes")
        .where({id})
        .update(changes)
        .then(count => {
            res.status(200).json(count)
        })
        .catch(err => {
            res.status(500).json(err); 
        }); 
});

server.delete('/notes/:id', (req, res) => {
    //delete a note
    const {id} = req.params; 
    db("notes")
    .where({id})
    .del()
    .then(count => {
        res.status(200).json(count); 
    })
    .catch(err => {
        res.status(500).json(err); 
    })
});

module.exports = server; 
