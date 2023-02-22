import ContendorMongoDb from "../db/user.dao.js"
import userSchema from "../db/models/user,model.js"

const userDAO = new ContendorMongoDb('usuarios', userSchema)

const getUsersService = async () => {
        let users = await userDAO.getUsers()
        return users
}
const creatUserService = (user) => {
        return `user ${user} guardado`
}

export {getUsersService, creatUserService}

 