import express from 'express'
import userRouter from './src/routes/user.js'
import mongoose from 'mongoose'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
//router
app.use('/users', userRouter)

//moongose
mongoose.connect('mongodb+srv://jonadmi:Jona123456@cluster0.pgoh4mn.mongodb.net/test', error => {
    if(error){
        console.log('Cannot connect to database')
        process.exit()
    }
})


const PORT = process.env.PORT || 8080
const server = app.listen(PORT, ()=> console.log(`Server running on port: ${server.address().port}`))