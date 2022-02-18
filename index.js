
// dependencies
const http = require('http');
const { buffer } = require('stream/consumers');
const{handleReqRes} = require('./helpers/handleReqRes')
const routes = require('./routes')
const {notFoundHandler} = require('./handlers/routeHandlers/notFoundHandler')

// app object - module scaffolding
const app = {};

// configuration
app.config = {
    port:3000
};

// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () =>{
        console.log(`Listening to port ${app.config.port}`);
    });
};

// handle request response
app.handleReqRes = handleReqRes;

// start the server
app.createServer();