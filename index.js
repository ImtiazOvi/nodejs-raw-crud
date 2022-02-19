
// dependencies
const http = require('http');
const { buffer } = require('stream/consumers');
const{handleReqRes} = require('./helpers/handleReqRes')
const evnvironment = require('./helpers/environment')
const routes = require('./routes')
const {notFoundHandler} = require('./handlers/routeHandlers/notFoundHandler')
const data = require('./lib/data');


// app object - module scaffolding
const app = {};

//testing file syetem
// wirte file
// data.create('test', 'newFile', {name: 'Bangladesh', language : 'Bangla'}, (err)=>{
//     console.log(`Error was`, err);
// });

// read file
// data.read('test', 'newFile', (err, data) => {
//     console.log((err, data));
// });

// update file
data.update('test', 'newFile', {name: 'Bangladesh, Dhaka', language : 'Bangla-Dhakaiya'}, (err) => {
    console.log(err);
});

// delete file
// data.delete('test', 'newFile', (err) => {
//     console.log(err);
// });

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