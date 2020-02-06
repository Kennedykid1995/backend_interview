const bcrypt = require('bcrypt'); 
const dbConfig = require('../knexfile'); 
const knex = require('knex');
const db = knex(dbConfig.development); 
const jwt = require('jsonwebtoken');
const {authenticate} = require('./middleware'); 
const jwtkey = require("./key").jwtkey; 

module.exports = server => {
    server.post('/register', register);
    server.post('/login', login); 
    server.get('/auth', authenticate); 

    server.get('/register', (req, res) => {
        res.send("register page")
    })
    server.get('/login', (req, res) => {
        res.send("login page")
    })
}

function generateToken(user){
    const payload = {
        username: user.username,
    };
    const options = {
        expiresIn: '1h',
        jwtid: '12345',
    };
    console.log(payload, options);
    return jwt.sign(payload, jwtkey, options); 
}

    function register(req, res){
    let creds = req.body; 
    console.log(creds, "creds"); 
    const hashed = bcrypt.hashSync(creds.password, 10);
    creds.password = hashed;
    db('user')
        .insert(creds)
        .then(response => {
            if(response) return res.status(200).send(response);
        })
        .catch(err => res.status(500).send(err));
}

function login(req, res){
    let creds = req.body;
    db('user')
        .where({username: creds.username})
        .first()
        .then(user => {
            console.log(user, "user")
            if(user && bcrypt.compareSync(creds.password, user.password)){
                console.log(creds.password, "creds.password", user.password, "user.password")
                const token = generateToken(user);
                res.status(200).json({token});              
            }else{
                res.status(401).json({message: "No User Found"});
            }
        })
        .catch(err => res.status(500).send(console.log(err))); 
}

