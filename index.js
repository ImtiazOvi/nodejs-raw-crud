
// dependencies
const http = require('http');
const { buffer } = require('stream/consumers');
const url = require('url');
const {StringDecoder} = require('string_decoder');
const{handleReqRes} = require('./helpers/handleReqRes')

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