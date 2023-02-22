import {Router} from 'express'
import userModel from '../models/user.model.js'

const userRouter = Router()

// userRouter.get('/', (req, res)=> {
//     res.send('user get ok')
// })

userRouter.get('/', async (req, res)=> {
    try {
        let users = await userModel.find()
        res.send(users)
    } catch (error) {
        console.log(error)
    }
})

userRouter.post('/', async (res, req)=> {
    let {name, lastname, email, password} = req.body;
    let result = await userModel.create({
        name, 
        lastname,
        email,
        password
     })
     res.send(result)    
})



export default userRouter
