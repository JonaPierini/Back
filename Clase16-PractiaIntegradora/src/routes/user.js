import { Router } from "express";
import { getUserControllers, creatUserControllers } from "../controllers/user.js";

const userRouter = Router()

userRouter.get('/', (req, res)=>{
    res.send('get user ok')
})
//user/example
userRouter.get('/example', getUserControllers)

//user/creatUser
userRouter.post('/creatUser', creatUserControllers)


userRouter.post('/',(req, res)=> {
    res.send('post user ok')
})

export default userRouter