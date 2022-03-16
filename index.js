var express = require('express');
var socket = require ('socket.io');
//App setup
var app = express();
var server = app.listen(8000, function(){
    console.log('escuchando la respuesta del puerto 8000');
});

//Static files

app.use(express.static('public'));

//socket Setup

var io = socket(server);

io.on('connection', function(socket){
    console.log('hecha la conexion con socket', socket.id);

    socket.on('chat', function(data){
        io.sockets.emit('chat', data);
    });
    socket.on('typing', function(data){
        socket.broadcast.emit('typing', data)
    });

});
