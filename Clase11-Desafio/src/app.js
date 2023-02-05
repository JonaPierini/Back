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


let dataCompleta = [
    {
        id: new Date().getMilliseconds(),
        nombre: 'Producto 1',
    },
    {
        id: new Date().getMilliseconds(),
        nombre: 'Producto 2',
    },
    {
        id: new Date().getMilliseconds(),
        nombre: 'Producto 3',
    },
]

app.get('/realTimeProducts', (req, res)=>{
    res.render('realTimeProducts', {dataCompleta})
})

io.on('connection', socket => {
    console.log(`Conexion realizada`)
    io.sockets.emit('messages', JSON.stringify(dataCompleta))
    socket.on('message', data => {
        dataCompleta.push({
            id: new Date().getMilliseconds(),
            nombre:data,
        })
        io.sockets.emit('messages', JSON.stringify(dataCompleta))
    })
})