const express = require('express');  //import the express package

const server = express(); // creates the server

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

server.listen(5000, () => 
    console.log('Server running on http://localhost:5000')
    
)