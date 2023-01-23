const express = require('express')
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: true}))


let users = []
const getId = () => {
    return users.length + 1
}

app.get('/', (req, res) => {
    res.send('Pagina principal')
})

app.post('/user', (req, res) => {
    let user = req.body;
    user.id = getId()
    if(!user){
        res.statusCode(400).send({status: 'error', error: 'Incomplete USER value'})
    }
    users.push(user)
    res.send(user)
})

app.get('/user', (req, res) => {
    res.send(users)
})

app.put('/user/:id', (req, res)=> {
    let id = req.params.id
    let user = req.body
    console.log(`Recibo id: ${id}`)
    console.log(`Recibo id: ${JSON.stringify(user)}`)
    users[users.findIndex(elem => elem.id == id)] = user
    res.send({status: 'succes', id})
})

app.delete('/user/:id'), (req, res) => {
    let id = req.parms.id;
    users = users.filter((elem) => elem.id != id)
    res.send({status: 'success', id})
}

const server = app.listen(8080, () => console.log('Server running on port 8080'))
server.on('error', error => console.log(error))