const app = require('express')();
const router = require('express').Router();
const server = require('http').Server(app);
const cors = require('cors');
const io = require('socket.io')(server, {
    origin: "*",
    method: ['GET', 'POST'],
});

app.set('view engine', 'ejs');
app.use(cors());
const PORT = 3002;

app.get('/', (red, res) => {
    
    res.render('index');
})

io.on('connection', socket => {
    socket.on('join-room', (roomId, userID) => {
        socket.join(roomId)
        socket.to(roomId).broadcast.emit('user-connected', userID);

        socket.on('disconnected', () => {
            socket.to(roomId).broadcast.emit('user-disconnected', userID);
        })
    })
});

app.listen(PORT);