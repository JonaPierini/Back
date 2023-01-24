const {Router} = require('express')
const userRouter = Router()

const users = []

userRouter.get('/', (req, res) => {
    res.json(users)
})

userRouter.post('/agregar', (req, res) => {
    let user = req.body;
    users.push(user)
    res.send('usuario agregado')
})

module.exports = userRouter