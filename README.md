# backend_interview

Some of the advantages of using Node.js for writing server side code are:

- JavaScript on the server: use the same programming language and paradigm for both client and server. This minimizes context switching and makes it easy to share code between the client and the server.
- Single-threaded: removes the complexity involved in handling multiple threads.
- Asynchronous: can take full advantage of the processor it’s running on. This matters because the node process will be running on a single CPU.
- npm repository: access the largest ecosystem of useful libraries (most of them free to use) in the form of npm modules.

Some of the disadvantages of using Node.js for writing server-side code are:

- JavaScript on the server: we lose the ability to use the right tool (language) for the job.
- single-threaded: can’t take advantage of servers with multiple cores/processors.
- asynchronous: it is harder to learn for developers that have only worked with languages that default to synchronous operations that block the execution thread.
- npm repository: too many packages that do the same thing makes it harder to choose one and, in some cases, may introduce vulnerabilities into our code.

What can we do with Express? So many things! For example:

- build web applications.
- serve Single Page Applications (SPAs).
- build RESTful web services that work with JSON.
- serve static content, like HTML files, images, audio files, PDFs, and     more.
- power real-time applications using technologies like Web Sockets or       WebRTC.

Some of the benefits of using Express are that it is:

- Simple
- Unopinionated
- Extensible
- Light-weight
- Compatible with connect middleware. (This means we can tap into an
  extensive collection of modules written for connect.)
- All packaged into a clean, intuitive, and easy to use API.
- Abstracts away common tasks (writing web applications can be verbose,     hence the need for a library like this)

Some of the drawbacks of Express are:

- It’s not a one-stop solution. Because of its simplicity, it does very     little out of the box compared to frameworks like Rails and django.
- We are forced to make more decisions due to the flexibility and control   it provides.

-------
const http = require('http'); //built in node.js module to handle http traffic

const hostname = '127.0.0.1'; //local computer where the server is running
const port = 3000; // a port we'll use to watch for traffic

const server = http.createServer((req, res) => {
    //creates the server
    res.statusCode = 200; //http status code returned to the client
    res.setHeader('Content-Type', 'text/plain'); //inform the client that we'll be returing text
    res.end('Hello World from Node\n');// end the request and send a response with the specific message
});

server.listen(port, hostname, () => {
    // start watching for connectiong on the port specified
    console.log(`Server running at http://${hostname}:${port}/`);
});

----------


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

server.get("/names/:id", (res, res) => {
    
})
let nextId = 3; 

server.post('/names', (req, res) => {
    const name = req.body;
    name.id = nextId;
    res.status(201).json(names); 
});

server.put('/names', (req, res) => {
    res.status(200).json({url: '/names', operation:'PUT'})
})

server.put('/names/:id', (req, res) => {
    res.status(200).json({url: '/names', operation: 'PUT'})
})

server.put('/names/:id', (req, res) => {
    const name = names.find(n => n.id == req.params.id);

    if(!name){
        res.status(404).json({message: 'name does not exist'});
    } else {
        Object.assign(name, req.body); 

        res.status(200).json(name); 
    };
})



server.listen(5000, () => 
    console.log('Server running on http://localhost:5000')
    
)

---------