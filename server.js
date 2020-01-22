const express = require('express');  //import the express package

const server = express(); // creates the server
server.use(express.json());
//handle requests to the root of the api, the / route
server.get('/', (req, res) => {
    res.send('Hello from Express');
});

server.get('/names', (req, res) => {
    const names = [
        {
            id:1,
            name: 'Keith',
        },
        {
            id:2,
            name: 'Ryan'
        },
    ];
    res.status(200).json(names); 
})
let nextId = 3; 

server.post('/names', (req, res) => {
    const name = req.body;
    name.id = nextId;
    res.status(201).json(names); 
});


server.listen(5000, () => 
    console.log('Server running on http://localhost:5000')
    
)