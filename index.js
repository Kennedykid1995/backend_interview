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

