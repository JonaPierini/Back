const express = require('express');
const app = express();
const {Server} = require('socket.io')

const PORT = 8080

app.use(express.static('public'))


app.get('/', (req, res)=>{
    res.send('ok')
})

let dataCompeta = []
const httpServer = app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})

//conexion del lado del servidor

const io = new Server(httpServer)

io.on('connection', socket => {
    console.log(`Nuevo cliente conectado`)
    io.sockets.emit('messages', dataCompeta)
    socket.on('message', data => {
        dataCompeta.push(data)
        io.sockets.emit('messages', dataCompeta)
        console.log(dataCompeta)
    })
})




 

