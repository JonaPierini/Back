//Server con socket.io
import { engine } from 'express-handlebars';
import express from 'express';
import {Server} from 'socket.io'
const app = express();

const PORT = 8080;



app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', '../views');


const httpServer = app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})

const io = new Server(httpServer)


let dataCompleta = []

app.get('/realTimeProducts', (req, res)=>{
    res.render('realTimeProducts', {dataCompleta})
})

io.on('connection', socket => {
    io.sockets.emit('messages', JSON.stringify(dataCompleta))
    socket.on('message', data => {
        dataCompleta.push({
            id: new Date().getMilliseconds(),
            nombre:data,
        })
        io.sockets.emit('messages', JSON.stringify(dataCompleta))
    })
})


io.on('/realTimeProducts', socket => {
    console.log(socket)
    io.sockets.emit('eliminacion', JSON.stringify(dataCompleta))
    socket.on('eliminar', data => {
        let filter = dataCompleta.filter((elem) => elem.id != Number(data))
        dataCompleta = filter
        io.sockets.emit('eliminar', JSON.stringify(dataCompleta)) 
    })
    io.sockets.emit('eliminacion', JSON.stringify(dataCompleta))
})