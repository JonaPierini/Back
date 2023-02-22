import express from 'express'
import userRouter from './src/routes/user.js'
import hbs from 'express-handlebars'
const app = express()


app.engine('handlebars', hbs.engine())
app.set('view engine', 'handlebars')
app.set('views', './views')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/user', userRouter)

const PORT = process.env.PORT || 8080
const server = app.listen(PORT, () => {
    console.log(`server running on port: ${server.address().port}`)
})

server.on('error', error => console.log(error))