const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

//socket.io
const {Server} = require('socket.io')

app.use(express.static('public'))
app.get('/', (req, res) => {
    res.send(`Ruta ok`);
});
const httpServer = app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));
httpServer.on('error', error => console.log(error))


//array de mensajes
let messageslist = []
//server socket
const io = new Server(httpServer)

//preparar para recibir peticiones
io.on('connection', socket =>{
    console.log('Nuevo Cliente')
    socket.emit('messages', messageslist)

    socket.on('newUserLog', user =>{
        socket.broadcast.emit(`newUserLog`, user)
        // io.sockets.emit(`newUserLog`, user)
    })

    socket.on('message', data => {
        console.log(data)
        messageslist.push(data)
        io.sockets.emit('messages', messageslist)
    })
})