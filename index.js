
// dependencies
const http = require('http');
const { buffer } = require('stream/consumers');
const{handleReqRes} = require('./helpers/handleReqRes')
const evnvironment = require('./helpers/environment')
const routes = require('./routes')
const {notFoundHandler} = require('./handlers/routeHandlers/notFoundHandler')

// app object - module scaffolding
const app = {};

// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(evnvironment.port, () =>{
        console.log(`Listening to port ${evnvironment.port}`);
    });
};

// handle request response
app.handleReqRes = handleReqRes;

// start the server
app.createServer();