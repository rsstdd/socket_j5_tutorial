'use strict';

const  app = require('express').createServer(),
        io = require('socket.io')(app),
        fs = require('fs'),
      path = require('path');
guestsPath = path.join(__dirname, + '/index.html');
      five = require('johnny-five');

app.listen(8080);

function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}

board = new five.Board();

board.on("ready", function() {
  led = new five.Led(13);

  io.sockets.on('connection', function (socket) {
    socket.on('click', function () {
      led.toggle();
    });
  });
});
