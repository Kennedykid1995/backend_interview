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

// find the user in the database by it's username then
if (!user || !bcrypt.compareSync(credentials.password, user.password)) {
  return res.status(401).json({ error: 'Incorrect credentials' });
}
// the user is valid, continue on

server.post('/notesuser/login', (req, res) => {
    let {username, password} = req.body; 

    Users.findBy({username})
    .first()
    .then(user => {
        //check that passwords match
        if(user && bcrypt.compareSync(password, user.password)){
            res.status(200).json({message: `Welcome ${user.username}!`});
        } else {
            // we will return 401 if the password or username are invalid
            // we don't want to let attackers know when they have a good username
            res.status(401).json({message: 'Invalid Credentials'})
        }
    })
    .catch(error => {
        res.status(500).json(error); 
    })
})

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
