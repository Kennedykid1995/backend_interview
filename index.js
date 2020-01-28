//Backend MVP
// Add data persistence using a Relational Database. We suggest you start with SQLite3.
// Create a Web API for the React application you built in the front-end project week.
// Build endpoints for each of the following features:
//   Display a list of notes.
//   Create a note with a title and content.
//   View an existing note.
//   Edit an existing note.
//   Delete an existing note.
//   Modify your front-end so that it uses your newly created Web API.
//Deploy through Heroku

require('dotenv').config(); 

const server = require('./api/server.js');

const port = 5000; 
server.listen(port, () => {
    console.log(`**** Server up on PORT ${port} ****`)
})