import { creatUserService, getUsersService } from "../services/user.js"

const getUserControllers = async (req, res) => {
        let users = await getUsersService()
        res.render('users', {users})
    }

const creatUserControllers = async (req, res) =>{
    let resultado =  await creatUserService(req.body)
    res.send(resultado)
}      


export  {getUserControllers, creatUserControllers}