var express = require('express')
var app = express()
var http = require('http');
var server = http.createServer(app);
server.listen(2000);
server.on('error', (err) => {
    console.log(err)
});
server.on('listening', (listening) => {
    console.log(listening)
});