const express = require("express");
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const PORT = process.env.AUTH_PORT || 3002;

io.on('connection', (socket) => {
    console.log("onConnection");

    socket.on('text', (text) => {
        console.log(`onText ${text}`);
    });

    socket.on('disconnect', () => {
        console.log('onDisconnect');
    });
});

server.listen(PORT, (err) => {
    if (err) 
        throw new Error(err);
    
    console.log(`Editor service running at ${PORT}`);
});