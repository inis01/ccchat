const express = require('express');
const app = express();

const server = app.listen(3000, () => {
  console.log('listening on *:3000');
});

const io = require('socket.io')(server);

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
});

app.use(express.static('public'));
