const express = require('express')
const app = express()
const PORT = 8000
//importo la ruta
const userRouter = require('./routes/users')

//Middlawares para usar la carpeta public
app.use(express.static('public'))
//Middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))


//utilizo la ruta => /user
app.use('/api/user', userRouter)
//utilizo la ruta => /user/agregar
app.use('/api/user/agregar', userRouter)


const server = app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))
server.on('error', error => console.log(error))